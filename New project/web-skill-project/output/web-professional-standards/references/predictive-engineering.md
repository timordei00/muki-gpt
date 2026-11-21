# Reason about dependencies

Use this before implementation when people, components or services can disagree about the same promise. Work from the brief, code and contracts available in the project. Keep any catalog or worked example closed until the initial record is saved.

1. **Define the promise.** Write one sentence in the affected person’s terms. What constitutes completion? What must remain true even if only part of the work finishes? Mark which assumptions come from documentation, existing behavior or inference.
2. **Trace the authority.** Draw the shortest path from intent to visible consequence. For each consequential transition note the actor, input, precondition, decision maker, authoritative state, feedback and who can recover. For existing code include other readers and writers of that state. An uninspected boundary is a gap.
3. **Change one assumption.** Choose a plausible change in the project’s own content, capacity, timing or ownership. Couple it with another change only if you can name a shared dependency. For order-sensitive flows, compare two possible event orders from the same initial state. For physical layouts, follow which object constrains the space.
4. **Try to disprove the design.** Trace the strongest counterexample until the promise holds or a cause appears. Name the observation or artifact that would decide between the competing explanations. A second opinion based on the same information supplies a hypothesis.
5. **Act and stop.** Prefer removing the dependency where feasible. Otherwise change the design, specify a discriminating check, or record the unresolved risk, owner and scope of release. Stop when another pass would repeat the same decision.

A compact entry can use `promise → dependency → changed condition → consequence → prevention → witness`. Mark origin in the core workflow. Keep the first prediction and additions distinguishable. Independent evaluation can preserve separate, time-ordered snapshots before catalog access and before implementation.
