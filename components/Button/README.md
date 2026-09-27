# Button

Square, flat buttons: a midnight **primary** for the one thing the page is for, and a hairline **secondary** for everything else.

- **Provide:** `children` (the label), `variant` (`primary` | `secondary`, default `secondary`), and `onClick` — or `href` to render a link.
- **Primary** fills with `action` and labels in `on-action`; use it at most once per view ("Start a conversation").
- **Secondary** is transparent with a `line-strong` hairline and `ink` label. Its light-theme border is 2.1:1 on white, as supplied by the kit, so the label must carry the meaning.
- Sentence case, verb first, no trailing punctuation. No icons unless the icon is one of the brand's own.
- Focus shows a solid `focus-ring` outline, `focus-width` thick at `focus-offset`. Corners are always `radius-none`.
