# trinh.design — Project Rules

## Units
- Use `vw` for all sizing (font sizes, spacing, widths, heights)
- Exception: strokes and borders use `px`
- When the user says a pixel value (e.g. "24px"), convert to vw at 1440px base: `px / 1440 * 100 = vw`

## Colors
- Everything is `#000` (pure black) — no `#1a1a1a` or near-blacks
- Background is `#fff`

## Typography
- Body font: GT Pressura Mono (variable font, weight 100)
- Accent font: ABC Favorit Light (weight 300) — used on `.nav-name`, `.row__title`, `.row__meta-label`
- Base font size: `0.97vw` (~14px @ 1440)
- Line height: 1.5

## Column Grid
- 3 columns, currently: `40vw 15vw 45vw`
- No left padding on columns 2 and 3
- Column 1 gets `padding: var(--space-page-x)` on all sides
- Columns 2 and 3 get padding on all sides except left
- Column overlay toggleable with `H` key (hidden by default)

## Spacing
- `--space-page-x: 1.67vw` (24px @ 1440) — used for all page-level padding

## CSS Variables (tokens)
- `--font-mono` — GT Pressura Mono stack
- `--text-base` — base font size
- `--color-ink` — text/stroke color (#000)
- `--color-bg` — background (#fff)
- `--space-page-x` — page padding
- `--dot-size`, `--dot-color`, `--dot-spacing` — polka dot background controls

## Naming Conventions
- Use BEM-like naming: `.row`, `.row__col`, `.row__col--image`, `.row__col--body`, `.row__col--meta`
- Nav elements: `.nav`, `.nav-grid`, `.nav-identity`, `.nav-name`, `.nav-role`, `.nav-bio`, `.nav-links`, `.nav-photo`
- CSS variables should be named scalably by category (font, color, space, etc.)

## Layout
- Nav: top section, no fixed height — driven by content + padding
- Photo: absolutely positioned top-right, bottom aligns with text (not the stroke)
- Stroke position below nav controlled by `padding-bottom` on `.nav`
- Rows: `.row` grid, columns match the nav/overlay grid exactly

## Assets
- All assets live in `/assets/` folder
- Fonts in `/assets/fonts/`
- No cross-project relative paths (e.g. no `../trinh.world/assets/...`)

## Background
- Static polka dot pattern via CSS `background-image: radial-gradient` on `body`
- `background-attachment: fixed` so it stays put while content scrolls
- No white background on nav or row sections — dots show through everywhere

## Interactions
- Nav links (Email, LinkedIn, Resume): underlined by default, no underline on hover
- Hover: flower icon (`flowerbutton.gif`) appears to the left of nav links
- Cursor glitter via `assets/sparkle.js`
- Custom cursor: `assets/White simple cursor.cur`
