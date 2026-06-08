# Site data

All content shown on the site lives here. Each file is a plain TypeScript module
that exports typed arrays — edit them like a spreadsheet.

| File                | Used by pages                                          |
| ------------------- | ------------------------------------------------------ |
| `colors.ts`         | everywhere — defines the 6 brand accent colors         |
| `team.ts`           | `/team`                                                |
| `presentations.ts`  | `/presentations`                                       |
| `hackathons.ts`     | `/hackathons` and `/hackathons/:slug`                  |
| `projects.ts`       | `/projects` and `/projects/:slug`                      |
| `interviews.ts`     | `/interviews` and `/interviews/:slug`                  |
| `constitution.ts`   | `/rubric` and the homepage constitution callout        |
| `uais.ts`           | barrel re-export — keeps old `@/data/uais` imports working |

## Conventions

- **Slugs** become URLs. Use `lowercase-kebab-case` and never change a slug after
  publishing — that breaks links. If you must rename, add a redirect in `App.tsx`.
- **Colors** must be one of: `blue | green | yellow | red | orange | pink`.
- **Dates** are plain strings — write them how you want them displayed.
- **Optional links** (`source`, `demo`, `recording`, `slides`, `linkedin`, `github`)
  can be omitted; the UI hides the button when missing.

## Adding a hackathon (example)

```ts
// src/data/hackathons.ts
{
  slug: "sillycon-valley-2027",          // becomes /hackathons/sillycon-valley-2027
  name: "SillyCon Valley 2027",
  date: "March 13–15, 2027",
  location: "ETLC Atrium, U of A",
  status: "Upcoming",                    // "Upcoming" | "Past"
  tagline: "Short punchy line.",
  description: "Long paragraph…",
  howItWorks: baseHowItWorks,            // reuse defaults, or write custom steps
  logistics:  baseLogistics,             // food / sleep / cost / etc.
  schedule:   [{ time: "Fri 6pm", item: "Opening" }],
  prizes:     [{ place: "Grand Prize", reward: "$3,000" }],
  organizers: ["Name 1", "Name 2"],
  sponsors:   ["Cohere", "AltaML"],
  devpost:    "https://…",               // optional
}
```

That's it — the new card appears on `/hackathons`, the navbar dropdown, and a
detail page is generated at the slug URL automatically.

## Marquee photos (home page banner)

The scrolling photo banner on the home page reads from `marqueePhotos.ts`.
**Always use the optimized copies** in `public/images/marquee/optimized/` —
the full-res originals can be 5+ MB each and would kill page performance.

### Adding a new marquee photo

1. Drop the image file into `public/images/` (any folder)
2. Regenerate the optimized WebP copies:
   ```sh
   node scripts/optimize-marquee-images.mjs
   ```
3. The script resizes every image in `marqueePhotos.ts` to 800px wide,
   converts to WebP, and writes to `public/images/marquee/optimized/`.
4. The paths in `marqueePhotos.ts` already point at the optimized folder —
   just confirm the new file was generated (e.g. `marquee-19.webp`).

> **Why separate optimized copies?** The originals are kept for other uses
> (project galleries, posters). The marquee only needs small WebP tiles, so
> we generate dedicated versions rather than loading full-resolution images.

## Adding the constitution as an external PDF

In `constitution.ts`, set `externalUrl` to a full URL (Google Drive, Notion, etc.).
The homepage callout and footer link will point there instead of the in-site `/rubric` page.
