# Forms, server state and data

Start with the user’s intent, who may act on which object, and the system that owns the final state. Name what the UI may claim on local validation, server receipt, committed work and final delivery. For an unknown outcome, keep safe input and show a recovery or status path. Protect sensitive fields when preserving or redisplaying them.

| Boundary | Design decision | Evidence to seek |
|---|---|---|
| Input and access | Validate the business shape at the server, authorize the action on the individual resource, and keep keys off the client. Use parameterized queries and output handling for the rendering context. Use CSRF protection where credentials are attached automatically. Bound upload size/types, storage and serving permissions when uploads exist. | Inspect the actual handler, storage and serving policies. Compare permitted synthetic roles and objects within the agreed test environment. |
| Repeated intent | Specify identity, scope, duration and what happens when the same identity has different parameters. Reconcile unknown outcomes with the authoritative record. If a provider is involved, check its documented retry contract. | Repeat one authorized synthetic intent. Compare the record count, its terminal state and the message presented to the user. |
| Different valid intents | Enforce a shared limit, availability or version at the write boundary. Return a recoverable result to a losing request. | Observe both outcomes and the final business invariant on isolated data. |
| Asynchronous work | Verify provider events as documented, correlate them to an operation, tolerate redelivery and order changes, and define reconciliation and ownership of undelivered work. | Compare local receipt, provider state, persistent record and delivery separately. |

Collect only necessary data. Define purpose, retention/deletion, authorized readers and minimal redacted logs, including backups and third-party handling. Ensure private responses are not reusable by another audience through a cache. Review actual contracts and applicable jurisdiction with the owner for regulated or sensitive work. Record evidence without customer input, credentials or contact details.
