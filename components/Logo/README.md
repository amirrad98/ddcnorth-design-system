# Logo

The ddcnorth logo drawn inline from the outlined master, so it inherits CSS `color`; use it wherever the logo appears in UI.

- **Provide:** `variant` (`horizontal` — the primary — `stacked`, `wordmark` or `symbol`), a `width`, and optionally `tone`.
- **Ink:** by default it takes `logo-ink` (black on light grounds, white in the midnight theme). Pass `tone="midnight"` for a midnight logo on off-white, white or ice; `tone="white"` on any dark field. In the midnight theme a midnight-toned logo switches to white automatically. Never recolour it to graphite or ice, and never put a black logo on midnight.
- **Size:** full lockup at least `logo-min-width` (160px) wide; the symbol alone at least `symbol-min-width` (24px).
- **Clearspace:** keep one symbol width clear around the visible lockup. The small padding built into the SVG is not the clearspace.
- **Don't:** stretch, rotate, add effects or gradients, re-typeset "north", or swap in the live-text logo files where the outline is expected.
- For `<img>` use, take the coloured files in the **Logos** asset group — an `<img>` cannot inherit `currentColor`.
