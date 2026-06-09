# Shared site components

These are the building blocks pages compose from. Edit only when you want a
*global* visual change — most content changes belong in `src/data/`.

| Component          | Purpose                                                                 |
| ------------------ | ----------------------------------------------------------------------- |
| `SiteLayout`       | Wraps every page with the Navbar + Footer.                              |
| `Navbar`           | Top nav. Hackathon/Project/Interview dropdowns auto-populate from data. |
| `Footer`           | Logo, copyright, socials, quick links.                                  |
| `NeuralBackdrop`   | Animated SVG hero — colored circuit lines with traveling data packets.  |
| `AccentCard`       | Card with a colored left border + matching hover glow.                  |
| `Avatar`           | Circular avatar with a colored ring (uses initials when no photo).      |
| `PosterTile`       | Decorative poster background for hackathon cards.                       |
| `PageHeader` / `SimplePage` | Standard page header layout used by simple content pages.      |

## NeuralBackdrop — tweaking the hero animation

Open `NeuralBackdrop.tsx`. Each entry in the `tracks` array is one circuit line:

```ts
{ color: "blue", d: "M40,120 L200,120 …", dur: 6.5, delay: 0 }
```

- `color` — must be a brand color (`blue | green | yellow | red | orange | pink`).
- `d`     — SVG path for the line. Use `M x,y L x,y L x,y` for metro-style angles.
- `dur`   — seconds for one packet to traverse the line. Lower = faster.
- `delay` — staggers the start so packets don't all fire at once.

Packets are SVG `<animateMotion>` elements that follow the path — no JS, no libraries.
