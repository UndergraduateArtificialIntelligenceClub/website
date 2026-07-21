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
| `events.ts`         | homepage events calendar                                |
| `constitution.ts`   | `/rubric` and the homepage constitution callout        |
| `uais.ts`           | barrel re-export — keeps old `@/data/uais` imports working |

## Conventions

- **Slugs** become URLs. Use `lowercase-kebab-case` and never change a slug after
  publishing — that breaks links. If you must rename, add a redirect in `App.tsx`.
- **Colors** must be one of: `blue | green | yellow | red | orange | pink`.
- **Dates** are plain strings — write them how you want them displayed.
- **Optional links** (`source`, `demo`, `recording`, `slides`, `linkedin`, `github`,
  `link`) can be omitted; the UI hides the button when missing.
- **Events use `Date` objects** (not strings) so the calendar grid can compute
  months and day positions — always use `new Date(year, monthIndex, day)` where
  `monthIndex` is 0-based (0 = January).

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

## Adding an event (homepage calendar)

The homepage events calendar reads from `src/data/events.ts`. Each event has
a `type` that determines which brand accent color it uses on the calendar grid
(dots) and in the event list sidebar:

| Type        | Color    |
| ----------- | -------- |
| `Talk`      | blue     |
| `Workshop`  | green    |
| `Social`    | pink     |
| `Hackathon` | orange   |
| `Other`     | yellow   |

### Adding a new event

Append an entry to the `events` array:

```ts
// src/data/events.ts
{
  id: "my-event",                          // unique kebab-case id
  title: "My Event Title",
  date: new Date(2026, 9, 15),            // year, monthIndex (0-based), day
  dateLabel: "Oct 15",                     // short display string
  time: "5:00 PM – 6:00 PM",              // optional — set to "" if TBA
  location: "DICE 8-100",                  // optional — set to "" if TBA
  semester: "Fall 2026",                   // "Fall 2026" | "Winter 2027"
  type: "Talk",                            // Talk | Workshop | Social | Hackathon | Other
  description: "A short blurb about the event.",
  link: "https://eventbrite.com/...",      // optional — shown as "Register"
}
```

- `id` must be unique and will be used as a React key.
- `date` is a real `Date` object (not a string) — the calendar needs numeric
  month/day for position calculations.
- `dateLabel` is what gets displayed in the sidebar cards (e.g. `"Feb 26–27"`).
- `semester` must be exactly `"Fall 2026"` or `"Winter 2027"` — the semester
  toggle buttons depend on this value.
- The event appears in the sidebar for its month. Clicking the day on the
  calendar grid filters to that day's events.

## Marquee photos (home page banner)

The scrolling photo banner on the home page reads from `marqueePhotos.ts`.
**Always use the optimized copies** in `public/images/marquee/optimized/` —
the full-res originals can be 5+ MB each and would kill page performance.

### Adding a new marquee photo

1. Drop the image file into `public/images/` (any folder)
2. Add its path to the `marqueePhotos` array in `src/data/marqueePhotos.ts`
   (use the original path, e.g. `/images/my-photo.jpg` — the script will
   generate the optimized WebP copy).
3. Install `sharp` (required by the optimization script) and regenerate:
   ```sh
   npm install -D sharp
   node scripts/optimize-marquee-images.mjs
   ```
4. The script resizes every image referenced in `marqueePhotos.ts` to 800px
   wide, converts to WebP, and writes to `public/images/marquee/optimized/`.
5. Update the entry in `marqueePhotos.ts` to point at the optimized copy
   (e.g. `/images/marquee/optimized/marquee-00.webp`).

> **Why separate optimized copies?** The originals are kept for other uses
> (project galleries, posters). The marquee only needs small WebP tiles, so
> we generate dedicated versions rather than loading full-resolution images.

## Adding the constitution as an external PDF

In `constitution.ts`, set `externalUrl` to a full URL (Google Drive, Notion, etc.).
The homepage callout and footer link will point there instead of the in-site `/rubric` page.
