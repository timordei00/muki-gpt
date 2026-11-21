# Performance

Name the user-visible delay first. Identify the route, load state, device class, network, important interaction and the content that must appear. Compare like builds and conditions.

| User experience | Investigate | Observe |
|---|---|---|
| Waiting for the principal visible content | Response time, discovery of the actual LCP candidate, appropriate image size, font fallback and render-blocking work. Reserve dimensions. Expose a critical resource early where justified. | Inspect element identity, request timing, decode and paint in a trace. A missing dimension is a clue. |
| Waiting after input | Long handlers, synchronous work, layout and repaint. Measure a representative real interaction, then reduce or defer the blocking work. | Check the same task and data volume with a matching device profile. |
| Unexpected movement | Space for media, embeds and late content, font metric changes and post-load UI. | Inspect which visible elements move, when, and whether user input excludes that shift from CLS. |

Current Core Web Vitals “good” thresholds apply at the 75th percentile of visits: LCP ≤ 2.5 s, INP ≤ 200 ms and CLS ≤ 0.1. State the source, time window, page or origin, form factor and availability of field data. Report missing metrics explicitly. A Lighthouse load run and total blocking time do not measure field INP. A laboratory trace can still identify a likely cause.

Follow the specific bottleneck. Apply lazy loading to offscreen resources when beneficial. Load only essential third parties early. Set project budgets from the baseline and business requirement, then compare the same workflow again. [Core Web Vitals](https://web.dev/articles/vitals)
