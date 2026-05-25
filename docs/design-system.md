# Design system

## Colors

The site is dark-mode only. The base palette lives in `src/index.css` as HSL CSS variables:

```css
--background: 0 0% 4%;     /* near-black */
--foreground: 0 0% 98%;    /* near-white */
--card:       0 0% 7%;
--border:     0 0% 14%;
--muted-foreground: 0 0% 64%;
```

Six brand accents pulled from the logo:

```css
--uais-blue:   205 95% 55%;
--uais-green:  140 70% 50%;
--uais-yellow:  48 100% 58%;
--uais-red:    358 82% 58%;
--uais-orange:  22 95% 58%;
--uais-pink:   330 85% 70%;
```

**Rule:** never hardcode colors in components (`text-white`, `bg-[#ff0000]`, etc.).
Always go through tokens (`text-foreground`, `bg-uais-blue`, `border-border`).

## Typography

- **Display / headings:** Space Grotesk (loaded via `index.html`)
- **Body:** Inter
- **Mono:** JetBrains Mono — use the `.mono` utility class

## Card surfaces

Most cards use the `.card-surface` utility (defined in `index.css`):

```html
<div class="card-surface p-6">…</div>
```

For colored emphasis, use `<AccentCard color="blue">` — it adds a colored
left border and a matching hover glow.

## Animations

The hero backdrop uses native SVG `<animateMotion>` to move packets along
polylines (see `NeuralBackdrop.tsx`). For UI animations, prefer the Tailwind
utilities already defined in `tailwind.config.ts` (`animate-fade-up`,
`animate-pulse-line`, `animate-float-slow`, etc.).
