---
name: web-professional-standards
description: Build, redesign or change a specific professional website, web page or user flow. Use for requests such as “build our site” or “doradi našu web stranicu”, including design, responsive UI and connected services. Skip general web theory or syntax questions.
---

# Web professional standards

Read the brief, actual content and affected code. Identify the visitor or editor, their primary task and observable success. For an edit, trace shared components and existing callers. Ask together only for missing facts that change a decision. State reversible assumptions and continue. Resolve authority, sensitive data and irreversible choices with their owner.

**Choose depth by consequence.** LIGHT for a local, reversible change. One relevant risk and check can fit in a sentence. STANDARD for a new page or bounded flow. Keep a brief, design rationale and targeted checks. FULL for the part where serious harm, shared mutable state or uncertain ownership warrants a state model and recovery plan.

**Predict before code or examples.**

1. State what must remain true for whom. Trace it to the component, person or service that can actually establish it.
2. Vary a project-specific condition at that boundary. Combine conditions when they share data, space, a resource or timing. What cause would break the promise?
3. Record the trigger, consequence, preventive choice and observation that would distinguish the outcomes. In FULL, try to falsify the most important assumption. Simplify the design when that removes the cause.
4. Save material findings as `PROJECT` before opening a catalog or worked examples. A short working note suffices. Append first additions from the catalog as `CATALOG` and later discoveries as `LATER`. Preserve earlier entries. Mark `PRIOR EXPOSURE` or `ORDER UNKNOWN` when applicable. Stop when significant flows have a decision, a check or an explicit gap.

**Build and deliver.** Connect a visible decision to the actual brand and task. Preserve existing conventions on small edits. Prefer semantic elements, one owner per shared fact and the simplest supported stack. Check touched content, focus and primary action with a keyboard and under relevant reflow. Confirm real destinations, claims and rights. Clearly label demo actions in previews. Enforce permissions on the server. For writes, define receipt, final outcome and safe recovery. Report the change, evidence, environment, remaining risk and owner in the user’s language. An inaccessible primary action, serious exposure or possible loss of a critical record blocks production release.

**Open a reference only when it changes a decision.** LIGHT can finish here.

| Trigger | Read |
|---|---|
| Coupled states or unclear authority, including before examples | [Reason about dependencies](references/predictive-engineering.md) |
| New visual direction, content hierarchy or motion | [Design and UX](references/design.md) |
| Layout, fluid sizing or a crop fails under change | [Fluid layout](references/fluid-layout.md) |
| Access depends on modality, media, focus or text scaling | [Accessibility](references/accessibility.md) |
| Slow load, shifts or sluggish input | [Performance](references/performance.md) |
| Public routes, locales or migration | [Search and navigation](references/search.md) |
| Forms, private data, persistence or integration | [Server state](references/server-state.md) |
| Stack, hosting, local operations or handoff | [Delivery](references/delivery.md) |
| A project prediction is recorded and a known mechanism could add a decision | [Interface patterns](references/patterns-interface.md) or [service patterns](references/patterns-services.md) |
| Unclear how to observe a result | [Testing](references/testing.md) |
| Release or an unresolved material risk | [Quality gates](references/quality-gates.md) |
| Confirmed defect, regression, concrete feedback or explicit learning request | [Improvement loop](references/improvement-loop.md) |
