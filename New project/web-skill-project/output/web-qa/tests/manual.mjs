import { hasText, isRecord, outcomes, readJSON, result } from './contract.mjs';

export async function observations(file, cfg) {
  const records = new Map();
  if (!file) return { records };
  let data;
  try { data = await readJSON(file); } catch { return { records, issue: 'The supplied observations file is unreadable or invalid JSON.' }; }
  if (!isRecord(data) || data.buildId !== cfg.buildId || !Array.isArray(data.observations)) {
    return { records, issue: 'Observation inputs need the selected buildId and an observations array.' };
  }
  let issue;
  for (const item of data.observations) {
    const route = cfg.routes.find(r => r.id === item?.route_id);
    if (!route || !isRecord(item) || !Object.hasOwn(route.manual, item.test_id)) {
      issue = 'An observation refers to an undeclared manual criterion or route.';
      continue;
    }
    const key = route.id + '/' + item.test_id;
    if (records.has(key)) {
      records.set(key, null);
      issue = 'Duplicate observations exist for one route and criterion. Supply one reviewed outcome.';
    } else records.set(key, item);
  }
  return { records, issue };
}

export function manualCheck(cfg, route, id, records) {
  const spec = route.manual[id];
  const item = records.get(route.id + '/' + id);
  const pending = limitation => result(route, id, 'NOT TESTED', { method: 'manual evidence', limitation });
  if (!item) return pending('Supply one reviewed observation for this build, route and criterion.');
  if (item.state !== spec.state || item.criterion !== spec.criterion || !outcomes.includes(item.status)) {
    return pending('Observation state, criterion or outcome does not match the declared manual contract.');
  }
  if (![item.observed, item.method, item.environment, item.evidenceRef, item.observedAt].every(hasText) ||
      !/^\d{4}-\d{2}-\d{2}T.*(?:Z|[+-]\d{2}:\d{2})$/u.test(item.observedAt) ||
      !Number.isFinite(Date.parse(item.observedAt))) {
    return pending('Provide an observation, method/version, environment, dated evidence and a non-sensitive reference.');
  }
  if (['N/A', 'NOT TESTED', 'WARNING'].includes(item.status) && !hasText(item.limitation)) {
    return pending('Explain non-applicability, missing evidence or the item needing judgment.');
  }
  if (spec.kind === 'integration' && !['NOT TESTED', 'N/A'].includes(item.status)) {
    const target = cfg.integrations[spec.target];
    if (!target || item.target !== spec.target || item.environment !== target.environment) {
      return pending('Integration evidence requires the declared synthetic target and matching observed environment.');
    }
  }
  return result(route, id, item.status, {
    method: 'operator evidence: ' + item.method, observed: item.observed, environment: item.environment,
    observedAt: item.observedAt, evidenceRef: item.evidenceRef, limitation: item.limitation ?? ''
  });
}
