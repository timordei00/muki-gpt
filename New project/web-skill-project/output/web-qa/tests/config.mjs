import path from 'node:path';
import { automatic, checks, hasText, isRecord, manualKinds, readJSON } from './contract.mjs';

const slug = /^[a-z][a-z0-9-]*$/;
function need(condition, message) {
  if (!condition) throw new Error(message);
}
function origin(raw, preview) {
  const url = new URL(raw);
  need(['http:', 'https:'].includes(url.protocol) && !url.username && !url.password &&
    url.pathname === '/' && !url.search && !url.hash, 'Use a bare HTTP(S) origin without credentials.');
  if (preview) need(['127.0.0.1', '[::1]'].includes(url.hostname), 'The preview must use a numeric loopback address.');
  return url.origin;
}
function unique(values, label) {
  need(new Set(values).size === values.length, 'Duplicate ' + label + '.');
}
function localPath(value) {
  if (!hasText(value) || !value.startsWith('/') || /[\\?#\s]/u.test(value)) return false;
  const base = 'https://artifact.invalid';
  const url = new URL(value, base);
  return url.origin === base && url.pathname === value && !value.startsWith('//');
}
function relativeFile(value) {
  return hasText(value) && !path.isAbsolute(value) && !/[:\\]/u.test(value) &&
    !value.split('/').some(segment => !segment || segment === '..' || segment === '.');
}
export async function loadConfig(file) {
  const cfg = await readJSON(file);
  need(isRecord(cfg) && hasText(cfg.buildId), 'Provide a buildId.');
  need(Array.isArray(cfg.routes) && cfg.routes.length > 0, 'Declare at least one route.');
  if (cfg.siteRoot != null) need(hasText(cfg.siteRoot), 'siteRoot must be a directory path.');
  cfg.siteRoot = cfg.siteRoot ? path.resolve(path.dirname(file), cfg.siteRoot) : null;
  cfg.publicOrigin = cfg.publicOrigin == null ? 'https://artifact.invalid' : origin(cfg.publicOrigin, false);
  cfg.baseURL = cfg.baseURL == null ? null : origin(cfg.baseURL, true);
  if (cfg.baseURL) need(cfg.disposablePreview === true, 'Confirm disposablePreview for this inert local preview.');
  cfg.viewports ??= [];
  need(Array.isArray(cfg.viewports) && cfg.viewports.every(v => isRecord(v) &&
    [v.width, v.height].every(n => Number.isSafeInteger(n) && n > 0 && n <= 16384)), 'Invalid CSS viewport dimensions.');
  unique(cfg.viewports.map(v => v.width + 'x' + v.height), 'viewport');
  cfg.integrations ??= {};
  need(isRecord(cfg.integrations), 'integrations must be an object.');
  for (const [id, target] of Object.entries(cfg.integrations)) {
    need(slug.test(id) && isRecord(target) && hasText(target.environment) && hasText(target.approvalRef) &&
      target.syntheticOnly === true, 'Integration targets need a sandbox label, approval reference and syntheticOnly.');
  }
  for (const route of cfg.routes) {
    need(isRecord(route) && typeof route.id === 'string' && slug.test(route.id) && localPath(route.path) &&
      hasText(route.heading), 'Each route needs an id, a plain root-relative path and an identifying heading.');
    if (route.file != null) need(relativeFile(route.file), 'Use a relative artifact filename with forward slashes.');
    route.optional ??= [];
    route.manual ??= {};
    need(Array.isArray(route.required) && Array.isArray(route.optional) && isRecord(route.manual), 'Invalid route check lists.');
    const selected = checks(route);
    unique(selected, 'criterion on ' + route.id);
    for (const id of selected) {
      need(typeof id === 'string' && (Object.hasOwn(automatic, id) || /^manual\.[a-z][a-z0-9-]*$/u.test(id)), 'Unknown criterion.');
      if (!id.startsWith('manual.')) continue;
      const spec = route.manual[id];
      need(isRecord(spec) && manualKinds.includes(spec.kind) && hasText(spec.state) && hasText(spec.criterion),
        'A selected manual criterion needs a kind, state and criterion.');
      if (spec.target != null) need(typeof spec.target === 'string' && Object.hasOwn(cfg.integrations, spec.target),
        'Unknown manual integration target.');
    }
    need(Object.keys(route.manual).every(id => selected.includes(id)), 'A manual criterion is missing from required/optional.');
    if (selected.some(id => id.startsWith('browser.'))) need(cfg.viewports.length, 'Provide at least one browser viewport.');
    if (selected.includes('source.meta')) {
      need(isRecord(route.meta) && hasText(route.meta.title) && hasText(route.meta.lang), 'Declare the expected title and language.');
      if (route.meta.canonical != null) {
        need(hasText(route.meta.canonical) && /^https?:\/\//iu.test(route.meta.canonical), 'Use an absolute expected canonical URL.');
        new URL(route.meta.canonical);
      }
      if (route.meta.indexing != null) need(['allow', 'noindex'].includes(route.meta.indexing), 'Unknown indexing policy.');
    }
    if (selected.includes('source.links')) {
      need(Array.isArray(route.links) && route.links.length && route.links.every(l => isRecord(l) && hasText(l.label) && hasText(l.href)), 'source.links requires at least one label and href.');
      for (const link of route.links) {
        const target = new URL(link.href, new URL(route.path, cfg.publicOrigin));
        need(['http:', 'https:', 'mailto:', 'tel:'].includes(target.protocol), 'Unsupported contracted destination scheme.');
      }
    }
  }
  unique(cfg.routes.map(r => r.id), 'route id');
  unique(cfg.routes.map(r => r.path), 'route path');
  unique(cfg.routes.map(r => r.heading.trim().replace(/\s+/gu, ' ')), 'route identity heading');
  return cfg;
}
