# Fluid layout

Start with the actual broken task. Locate the dimension and first state where reading, association, focus or activation fails. Compare the viewport, component’s available space, layout track and child’s intrinsic size. Long words, translated labels, aspect ratios and form controls can constrain different ancestors.

- Let content establish the breakpoint. Choose a wrapping flex row, grid or simple block flow according to the relationship. Use a container query when the component can be narrow inside a wide page. Give prose a readable measure and allow headings, labels and controls to grow with text.
- Where the cause is an intrinsic minimum, consider `min-inline-size: 0` on the responsible item or `minmax(0, 1fr)` on the responsible track. Add wrapping or constrain the medium where appropriate. Keep significant numbers, label–value pairs and reading order understandable. Diagnose the element before clipping any overflow.
- Reserve image dimensions or an aspect ratio. Supply appropriate `srcset` and `sizes` for the actual slot. Choose art direction when a new crop changes the meaning. For a cover or sticky region, account for browser chrome, the virtual keyboard, safe areas and short viewports.
- Preserve useful local scrolling for intrinsically two-dimensional information. Give it an accessible way to navigate. Check that document scrolling and focus still work and controls are reachable at its boundaries.

Inspect below, at and above the content-driven transition, with long real content, an opened control, increased text and a short viewport. For a changed form, use the target mobile browser to check focus, keyboard and zoom. Keep pinch zoom available. A width-only sweep cannot establish these behaviors.
