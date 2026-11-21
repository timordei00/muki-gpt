import { readFile, realpath } from 'node:fs/promises';
import path from 'node:path';
import { installedVersion, normalize, result } from './contract.mjs';

function attr(node, key) {
  return node?.attrs?.find(a => a.name === key)?.value;
}
function elements(node, out = []) {
  if (node.tagName) out.push(node);
  for (const child of node.childNodes ?? []) elements(child, out);
  return out;
}
function textOf(node) {
  if (!node || ['script', 'style', 'template', 'noscript'].includes(node.tagName) || attr(node, 'hidden') != null) return '';
  if (node.nodeName === '#text') return node.value;
  if (node.tagName === 'br') return ' ';
  if (node.tagName === 'img') return attr(node, 'alt') ?? '';
  return (node.childNodes ?? []).map(textOf).join('');
}
function resolved(raw, base) {
  if (!raw?.trim()) return null;
  try { return new URL(raw, base); } catch { return null; }
}
async function readArtifact(cfg, route, parse) {
  if (!cfg.siteRoot || !route.file) return { gap: 'No local artifact was declared.' };
  try {
    const root = await realpath(cfg.siteRoot);
    const file = await realpath(path.resolve(root, route.file));
    const relative = path.relative(root, file);
    if (relative === '..' || relative.startsWith('..' + path.sep) || path.isAbsolute(relative)) {
      return { gap: 'The artifact resolves outside siteRoot.' };
    }
    const nodes = elements(parse(await readFile(file, 'utf8')));
    const headings = nodes.filter(n => n.tagName === 'h1' && normalize(textOf(n)) === normalize(route.heading));
    if (headings.length !== 1) return { gap: 'The declared page identity was not established by one matching h1.' };
    const pageURL = new URL(route.path, cfg.publicOrigin);
    const base = nodes.find(n => n.tagName === 'base' && attr(n, 'href') != null);
    const baseURL = base ? resolved(attr(base, 'href'), pageURL) : pageURL;
    return { nodes, pageURL, baseURL };
  } catch { return { gap: 'The declared artifact could not be read or parsed.' }; }
}
function metadata(doc, expected) {
  const tags = name => doc.nodes.filter(n => n.tagName === name);
  const title = tags('title');
  const mismatches = [];
  if (title.length !== 1 || normalize(textOf(title[0])) !== normalize(expected.title)) mismatches.push('title');
  if ((attr(tags('html')[0], 'lang') ?? '').trim().toLowerCase() !== expected.lang.toLowerCase()) mismatches.push('lang');
  if (expected.canonical != null) {
    const canonical = tags('link').filter(n => (attr(n, 'rel') ?? '').toLowerCase().split(/\s+/u).includes('canonical'));
    if (canonical.length !== 1 || resolved(attr(canonical[0], 'href'), doc.baseURL)?.href !== new URL(expected.canonical).href) mismatches.push('canonical');
  }
  if (expected.indexing != null) {
    const tokens = tags('meta').filter(n => (attr(n, 'name') ?? '').toLowerCase() === 'robots')
      .flatMap(n => (attr(n, 'content') ?? '').toLowerCase().split(/[\s,]+/u));
    const blocked = tokens.includes('noindex') || tokens.includes('none');
    if (blocked !== (expected.indexing === 'noindex')) mismatches.push('robots');
  }
  return {
    status: mismatches.length ? 'FAIL' : 'PASS',
    observed: mismatches.length ? 'Mismatched metadata: ' + mismatches.join(', ') : 'All declared metadata matched the identified artifact.',
    limitation: 'HTML metadata only. HTTP headers, crawler-specific directives and indexing outcomes require separate evidence.'
  };
}
async function linkEvidence(cfg, doc, contract, getDoc) {
  const wanted = new URL(contract.href, doc.pageURL);
  if (!doc.baseURL) return { status: 'NOT TESTED', observed: 'The document base URL could not be resolved.' };
  const candidates = doc.nodes.filter(n => n.tagName === 'a' &&
    normalize(attr(n, 'aria-label') || textOf(n)) === normalize(contract.label));
  if (!candidates.some(n => resolved(attr(n, 'href'), doc.baseURL)?.href === wanted.href)) {
    return { status: 'FAIL', observed: 'No anchor matched the contracted label and destination on the identified page.' };
  }
  if (wanted.origin !== cfg.publicOrigin || ['mailto:', 'tel:'].includes(wanted.protocol)) {
    return { status: 'PASS', observed: 'The contracted outbound address and label match the source.', limitation: 'External availability and ownership were not checked.' };
  }
  if (wanted.search) return { status: 'NOT TESTED', observed: 'The href matched. The behavior of a query-dependent destination needs a rendered or manual check.' };
  const targetRoute = cfg.routes.find(r => r.path === wanted.pathname);
  if (!targetRoute) return { status: 'NOT TESTED', observed: 'The href matched. No independently identified target artifact was declared.' };
  const target = await getDoc(targetRoute);
  if (target.gap) return { status: 'NOT TESTED', observed: 'Target artifact: ' + target.gap };
  if (wanted.hash) {
    let fragment;
    try { fragment = decodeURIComponent(wanted.hash.slice(1)); } catch {
      return { status: 'NOT TESTED', observed: 'The declared fragment could not be decoded.' };
    }
    if (fragment.includes(':~:')) return { status: 'NOT TESTED', observed: 'Text-fragment navigation needs a rendered check.' };
    const ids = target.nodes.filter(n => attr(n, 'id') === fragment || (n.tagName === 'a' && attr(n, 'name') === fragment));
    if (!ids.length && fragment.toLowerCase() === 'top') return { status: 'PASS', observed: 'The matching URL uses the HTML document-top fragment.' };
    if (ids.length !== 1) return { status: 'FAIL', observed: 'The identified target had ' + ids.length + ' matching fragment elements.' };
  }
  return { status: 'PASS', observed: 'Anchor, intended destination and identified internal target matched.', limitation: 'Deployment routing and focus after navigation require separate checks.' };
}
export async function sourceChecks(cfg) {
  let parse;
  let method = 'parse5 unavailable';
  try {
    ({ parse } = await import('parse5'));
    method = 'parse5 ' + await installedVersion('parse5');
  } catch { /* Report the unmet prerequisite for each selected criterion. */ }
  const documents = new Map();
  function getDoc(route) {
    if (!documents.has(route.id)) documents.set(route.id, readArtifact(cfg, route, parse));
    return documents.get(route.id);
  }
  return async (route, id) => {
    const base = { method, environment: 'declared local build, ' + process.version };
    const row = (status, details) => result(route, id, status, { ...base, ...details });
    if (!parse) return [row('NOT TESTED', { limitation: 'Install the declared HTML parser.' })];
    const doc = await getDoc(route);
    if (doc.gap) return [row('NOT TESTED', { observed: doc.gap, limitation: 'Page-specific criteria require the intended artifact.' })];
    if (id === 'source.meta') {
      const { status, ...evidence } = metadata(doc, route.meta);
      return [row(status, evidence)];
    }
    if (id === 'source.links') {
      const rows = [];
      for (const [i, link] of route.links.entries()) {
        const { status, ...evidence } = await linkEvidence(cfg, doc, link, getDoc);
        rows.push(row(status, { sample: 'link ' + (i + 1), ...evidence }));
      }
      return rows;
    }
    const body = doc.nodes.find(n => n.tagName === 'body');
    const candidates = normalize(textOf(body));
    if (!candidates) return [row('NOT TESTED', { observed: 'The body contains no text sample.' })];
    const hits = candidates.match(/TODO|\[POTVRDITI\]|\bDEMO\b/giu) ?? [];
    return [row(hits.length ? 'WARNING' : 'PASS', {
      observed: 'Draft-marker matches: ' + hits.length + '.',
      limitation: 'Source-text signal only. Rendering, provenance and intended use require human review.'
    })];
  };
}
