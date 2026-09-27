ddcnorth is a data, design and systems company — "built for what's next." The identity is deliberately reduced: one geometric symbol, one custom wordmark, a flat five-colour palette, square corners, no gradients and no photography. Everything should feel precise, calm and engineered.

## Content fundamentals

- **The name is always lowercase, one word:** ddcnorth. Never "DDC North", "DDCNorth" or "ddc north". The parent mark is **ddc**.
- **Voice:** short, declarative, confident — often two beats with a full stop. Real lines from the kit: "Intelligence in motion." · "Built for what's next." · "From insight to impact." · "From data to a brighter tomorrow." · "One master. Every application." · "Flat colour. Clear hierarchy."
- Headlines in sentence case with a closing full stop. Labels in UPPERCASE Space Mono with `/` or `·` separators: "DATA · DESIGN · SYSTEMS · NORTH", "CORE IDENTITY / V1.0".
- No exclamation marks, hype words or emoji — the kit's copy uses none.
- Canadian/British spelling in brand copy ("colour").
- Never publish bracketed template placeholders ("[Name]", "[Email]") or unverified contact details.

## Colour

- Six brand colours: `black`, `off-white`, `graphite`, `midnight`, `ice`, `white`. Build with the semantic tokens, not the raw ones.
- Default ground is `surface` (off-white); panels are `surface-raised` (white). Text is `ink`; secondary text and labels are `ink-muted` (graphite).
- `midnight` is the only brand hue: use it for the primary action (`action` / `on-action`), for reversed fields, and as an alternative logo ink.
- `ice` is a supporting field (`surface-field`, text in `ink-on-field`) — never fine lettering on white.
- The **Midnight** theme is the reversed identity: midnight ground, white ink, ice for secondary text and actions.
- Flat colour only: no gradients, tints, transparency effects or shadows (the midnight theme's two translucent ice values are the one exception, for panels and rules).
- Colour values are normalized sRGB; no Pantone or CMYK match is certified. Proof print work with the supplier.

## Typography

- `display`, `h1`, `h2` — Inter Display Medium 500, tight tracking (−0.04em; −0.025em at `h2`). One `display` line per page.
- `body`, `caption` — Inter Regular 400.
- `label` — Space Mono 400, UPPERCASE, +0.12em. Only for labels and metadata — never for the wordmark or running text.
- Inter and Space Mono are SIL OFL: Inter from rsms.me/inter, Space Mono from Google Fonts. No font files ship with this system; where Inter Display isn't installed, Inter at optical size 32 stands in.

## Logo

- Primary: the **horizontal** lockup (symbol + ddcnorth). Also **stacked**, **wordmark** and **symbol** alone; the parent **ddc** has the same three lockups.
- Use black or midnight on light grounds; reverse to white on midnight or any dark field. Midnight on ice is fine.
- Clearspace: one symbol width around the visible lockup. Minimum: full lockup `logo-min-width` (160px), symbol `symbol-min-width` (24px).
- Use the outlined SVGs (group **Logos**) for hand-off; the live-text files (`ddcnorth-hybrid.svg`, `ddcnorth-text.svg`) only when the text must change. In UI, use the `Logo` component — it draws the outline inline and inherits colour.
- Don't redraw, re-typeset, stretch, rotate, outline, shadow or recolour the mark (no graphite, no ice lettering on white).

## Layout, shape and surfaces

- Square corners everywhere (`radius-none`). No shadows; hierarchy comes from surface changes and `line` hairlines.
- 4px spacing base (`space-1` … `space-24`). Page content max `content-max` (1260px), `space-12` side padding on desktop, `space-6` on mobile.
- Generous whitespace, left-aligned text, large headlines, three-column card grids that collapse to one under 700px.
- Focus: a solid `focus-ring` outline, `focus-width` 3px at `focus-offset` 4px.

## Iconography and pattern

- Five supporting icons (group **Icons**, or the `Icon` component): clarity, cycle, direction, network, signal — 64-unit grid, 2px strokes, radial / angular. That is the full set; extend it only on the same grid and stroke.
- The pattern is the symbol itself, cropped large (group **Patterns**): black on off-white, off-white on ice, or midnight repeats on ice. One pattern per layout, never behind body text.
- No photography, illustrations, mock-ups or emoji.

## Templates

Editable SVG templates live in group **Templates**: business card (90 × 50 mm trim + 3 mm bleed), A4 letterhead, 16:9 presentation cover, 1080² social post and 1584 × 396 banner. Logos are outlined; text is live Inter / Space Mono — install the fonts before editing, and outline text before sending to print.
