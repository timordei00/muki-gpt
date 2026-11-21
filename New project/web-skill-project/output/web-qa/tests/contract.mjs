import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

export const automatic = {
  'source.meta': 'The identified artifact has the declared document metadata.',
  'source.links': 'Each contracted link exists with its intended destination. Declared internal targets resolve in the build.',
  'source.copy': 'Visible-text candidates in the HTML source contain no configured draft markers.',
  'browser.layout': 'The identified page has at most one CSS pixel of document-level horizontal overflow.',
  'browser.runtime': 'The observed initial load has no uncaught errors, error-level console messages or failing resource requests.',
  'browser.axe': 'The selected automated accessibility rules have applicable passes and no violations or unresolved items.'
};
export const manualKinds = ['access', 'design', 'performance', 'search', 'form-ui', 'integration', 'security', 'operations'];
export const outcomes = ['PASS', 'FAIL', 'WARNING', 'NOT TESTED', 'N/A'];
export const hasText = value => typeof value === 'string' && value.trim().length > 0;
export const isRecord = value => value !== null && typeof value === 'object' && !Array.isArray(value);
export const normalize = value => String(value ?? '').replace(/\s+/gu, ' ').trim();
export const checks = route => [...route.required, ...route.optional];

export function result(route, id, status, fields = {}) {
  const spec = route.manual?.[id];
  return {
    test_id: id, route: route.path, route_id: route.id,
    state: spec?.state ?? 'initial', required: route.required.includes(id),
    criterion: spec?.criterion ?? automatic[id], method: 'not executed', environment: 'unavailable',
    observed: '', limitation: '', status, ...fields
  };
}

export function problem(message) {
  return {
    test_id: 'run.input', route: null, route_id: null, state: 'setup', required: true,
    criterion: 'The run inputs are valid and readable.', method: 'input validation', environment: process.version,
    observed: message, limitation: 'Dependent observations are unavailable.', status: 'NOT TESTED'
  };
}

export function exitFor(rows) {
  if (rows.some(r => r.required && r.status === 'FAIL')) return 1;
  const applicable = rows.filter(r => r.required && r.status !== 'N/A');
  if (!applicable.length || applicable.some(r => ['NOT TESTED', 'WARNING'].includes(r.status))) return 2;
  if (rows.some(r => ['WARNING', 'NOT TESTED', 'FAIL'].includes(r.status))) return 3;
  return 0;
}

export async function readJSON(file) {
  return JSON.parse((await readFile(file, 'utf8')).replace(/^\uFEFF/u, ''));
}

export async function installedVersion(name) {
  let directory = path.dirname(fileURLToPath(import.meta.resolve(name)));
  for (;;) {
    try {
      const manifest = await readJSON(path.join(directory, 'package.json'));
      if (manifest.name === name && hasText(manifest.version)) return manifest.version;
    } catch { /* The entry point may sit below the package directory. */ }
    const parent = path.dirname(directory);
    if (parent === directory) return 'version unknown';
    directory = parent;
  }
}
