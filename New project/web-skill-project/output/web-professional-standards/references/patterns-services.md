# Services, data and ownership · known failure mechanisms

Read after the project-derived risk note. Select a matching trigger. Append newly identified mechanisms as CATALOG and retain the origin of earlier findings. Severity follows the impact on this project.

## SV-REPLAY

A durable operation can finish before the client receives its reply. Retrying under a new identity can apply it twice (R0 for payment or scarce stock). Resolve the existing outcome or reuse a supported operation identity with the same intent. A read-only request has different semantics. In a sandbox, compare the authoritative record and user message after the retry.

## SV-CONTENTION

Different valid requests depend on the same prior availability or revision. Both can pass a client precheck (R0 for a conflicting commitment). Put the business condition at the write boundary, handle loss of the race and refresh the losing view. Independent resources need no shared lock. Observe both outcomes and the final state.

## SV-SIGNAL

A late, repeated or missing provider event drives a terminal state or the UI declares delivery on acceptance (R0/R1 by consequence). Authenticate provider events as required, reconcile state by identity and advance only on the contracted evidence. Simple receipt-only forms can say ‘received’. Check provider, business record and final delivery separately.

## SV-AUDIENCE

An authenticated identity is treated as entitled to every matching object, or a private response is reused by a shared cache (potential R0 exposure). Enforce resource authorization and limit reuse to the correct audience at each serving layer. Public material may be cacheable. Review rules and compare authorized test identities on isolated records.

## SV-INPUT

Editor content, uploads or form values cross into a new output or storage context (R0/R1 by reachable impact). Validate the business shape and permissions on the server. Use context-safe rendering, parameterized database access and bounded file handling where present. Plain text needs less machinery than rich HTML. Inspect each actual consumer and approved sample.

## SV-RELEASE

Old readers or open tabs continue using a previous asset or data contract after deployment (R1/R0 if records are lost). Keep overlapping versions compatible through cutover and define when old assets or columns may retire. A disposable preview has a simpler recovery path. Check old/new reads, new writes and the recovery plan.

## SV-OWNER

A managed form, DNS record, map, language feed or domain can outlive the account that maintains it (R1/R0 on a sole contact channel). Name an owner, observable failure and workable fallback. A decorative embed need not acquire a heavy monitor. Follow a synthetic request to its authorized destination and verify who can recover the service.
