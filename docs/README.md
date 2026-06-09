# UAIS Website — Maintainer Guide

Welcome, future executive! This site is built with **React + Vite + TypeScript + Tailwind**.
Almost everything you'll want to update lives in **`src/data/`** — you don't need to touch
React components for normal content changes.

## TL;DR — common updates

| What you want to change            | File to edit                       |
| ---------------------------------- | ---------------------------------- |
| Current execs / past execs         | `src/data/team.ts`                 |
| Weekly presentations               | `src/data/presentations.ts`        |
| Hackathons (incl. prizes, food…)   | `src/data/hackathons.ts`           |
| Projects                           | `src/data/projects.ts`             |
| Interviews + Q&A transcripts       | `src/data/interviews.ts`           |
| Constitution / club rubric         | `src/data/constitution.ts`         |
| Brand accent colors                | `src/data/colors.ts` + `src/index.css` |

After saving, the preview reloads automatically. No build step needed for content edits.

## Project map

```
src/
├── assets/              static images (logo, etc.)
├── components/site/     reusable site components (Navbar, Footer, NeuralBackdrop, AccentCard, …)
├── components/ui/       shadcn primitives — don't edit unless you know what you're doing
├── data/                ALL site content lives here (see table above)
├── pages/               one file per route — they import from src/data
└── index.css            global styles + brand color tokens (--uais-blue, --uais-yellow, …)
```

Routing is configured in `src/App.tsx`. Detail pages (`/projects/:slug`, `/hackathons/:slug`,
`/interviews/:slug`) auto-render whatever you add to the data files — slugs become URLs.

## How the navbar dropdowns work

`src/components/site/Navbar.tsx` reads `hackathons`, `projects`, and `interviews` from
`src/data` and lists them under their dropdowns. Add an entry to a data file → it
shows up in the dropdown automatically and links to its own detail page.

## Brand colors

The six brand accents come from the logo: blue, green, yellow, red, orange, pink.
Each is defined as an HSL CSS variable in `src/index.css`:

```css
--uais-blue: 205 95% 55%;
```

Use them in components via Tailwind classes like `text-uais-blue`, `bg-uais-yellow`,
or via `hsl(var(--uais-blue))` in custom CSS. Don't hardcode hex colors.

## Adding a new page

1. Create `src/pages/MyPage.tsx`
2. Register the route in `src/App.tsx`
3. Add a link in `src/components/site/Navbar.tsx`
4. If the page has data, put it in `src/data/my-page.ts`

## Deeper dives

See the per-folder READMEs:
- [`src/data/README.md`](../src/data/README.md) — every data file explained
- [`src/components/site/README.md`](../src/components/site/README.md) — shared components
- [`docs/design-system.md`](./design-system.md) — colors, typography, animations
