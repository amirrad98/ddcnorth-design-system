# ddcnorth design system

Tokens, components, logos and templates for **ddcnorth**. Read [`BRAND.md`](BRAND.md) first — it is the brand book: voice, colour, type, logo rules, layout and iconography.

## What's here

| Path | Contents |
| --- | --- |
| `BRAND.md` | The brand book (usage rules that name the tokens below). |
| `tokens/tokens.json` | Source of truth: colours (Off-white + Midnight themes), type scale, spacing, radius, stroke, sizes — each with a usage note. |
| `tokens/tokens.css` | The same tokens as CSS custom properties. |
| `tokens/brand-geometry.json` | Logo and symbol construction (paths, offsets, lockup metrics). |
| `components/` | `bundle.js` (React 18, exposes `window.DdcNorth`), `bundle.css`, `index.d.ts`, and per-component guidelines + live previews: Logo, Button, Label, Card, Note, Icon. `Cover/` is the system's cover art. |
| `assets/Logos/` | Outlined SVG logos — ddcnorth and parent ddc, horizontal / stacked / wordmark, in black, midnight, white and currentColor. |
| `assets/Logo-PNGs/` | Transparent PNG exports. |
| `assets/Symbol/` | The 12-blade symbol, SVG + PNG at 256/512/1024. |
| `assets/Icons/` | Five supporting icons (clarity, cycle, direction, network, signal). |
| `assets/Patterns/` | Symbol-crop background patterns. |
| `assets/Templates/` | Editable SVG business cards, letterhead, presentation cover, social post and banner. |
| `assets/App-icons/` | App icon, apple-touch icon, favicon. |
| `assets/Guidelines/` | Brand guide PDF and vector logo sheets. |

## Quick start (web)

```html
<link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Space+Mono&display=swap">
<link rel="stylesheet" href="tokens/tokens.css">
<link rel="stylesheet" href="components/bundle.css">

<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/react-dom@18/umd/react-dom.production.min.js"></script>
<script src="components/bundle.js"></script>
<script>
  const { Logo, Button } = window.DdcNorth, h = React.createElement;
  ReactDOM.createRoot(document.getElementById('root')).render(
    h('div', null, h(Logo, { width: 240 }), h(Button, { variant: 'primary' }, 'Start a conversation'))
  );
</script>
```

Switch to the reversed identity with `<html data-theme="midnight">`.

## Notes

- The logo is a reference-based reconstruction (v1.0) and still needs final approval before external use.
- Colours are normalized sRGB; no Pantone/CMYK match is certified — proof print work.
- Inter and Space Mono are SIL OFL fonts and are not bundled.
- Brand assets are proprietary to ddcnorth; no open-source licence is granted.
