# Site data

All content shown on the site lives here as a **folder tree — one small file
per item** — collected automatically. You never edit a list or an index; you
create, edit, or delete a file and the site updates.

```
src/data/
  _types.ts            ← all shared TypeScript types (don't put content here)
  colors.ts            ← the 6 brand accent colors
  uais.ts              ← barrel that keeps `@/data/uais` imports working
  README.md

  projects/<year>/01-<slug>.ts        ← one file per project
  interviews/<latest|past>/01-…ts     ← one file per interview
  team/<year>.ts  team/past/<year>.ts ← one file per exec year
  hackathons/<year>/01-<slug>.ts      ← one file per hackathon
  presentations/<new|past>/01-…ts     ← one file per talk
  events/<semester>.ts                ← one file per semester

  resources.ts  sponsors.ts  roadmap.ts  roadmapPaths.ts  marqueePhotos.ts
                       ↑ small single-topic files, edit them directly
```

Each folder has a tiny `index.ts` that auto-collects every `.ts` file below it
(Vite's `import.meta.glob`). **Files named `index.ts` or starting with `_` are
infrastructure — never put content in them.**

A content file always looks like this:

```ts
import type { Project } from "@/data/_types";

export default {
  slug: "my-project",                            // becomes the URL
  // …all the fields for this one item…
} satisfies Project;
```

## Conventions

- **Filenames start with an order prefix** (`01-`, `02-` …). Folders are
  sorted newest-first, then by filename — the prefix is your display order.
  Presentations/team/events don't need prefixes unless order matters.
- **Slugs become URLs.** Use `lowercase-kebab-case` and never change a slug
  after publishing — that breaks links. If you must rename, add a redirect in
  `App.tsx`. (Detail pages: `/projects/:slug`, `/interviews/:slug`,
  `/hackathons/:slug`.)
- **Colors** must be one of: `blue | green | yellow | red | orange | pink`.
- **Dates** on cards are plain strings — write them how you want them displayed.
  Calendar events are the exception: real `Date` objects,
  `new Date(year, monthIndex, day)` (0-based month).
- **Optional links** (`source`, `demo`, `recording`, `slides`, `linkedin`,
  `github`, `link`) can be omitted; the UI hides the button when missing.
- A file with a missing `export default` fails the build with an error naming
  the file — if the build breaks, read the message.

## Projects — `src/data/projects/`

One file per project, inside a folder per academic year
(`2026-27/`, `2025-26/` …).

```ts
// src/data/projects/2026-27/03-my-project.ts
import type { Project } from "../../_types";

export default {
  slug: "my-project",
  name: "My Project",
  tagline: "One-liner for the card.",
  description: "Short paragraph for the card.",
  tag: "LLMs",                                   // small label on the card
  color: "blue",
  stack: ["Python", "FastAPI"],
  details: "Longer description for the detail page.",
  difficulty: "Beginner-Intermediate",
  termLength: "One semester (Fall 2026)",
  lead: { name: "Name", role: "Project Lead", github: "https://…" },
  members: ["Name 2", "Name 3"],
  content: {                                     // detail page body
    type: "sections",
    items: [{ title: "Description", body: "…" }],
  },
  // source?: "https://github.com/…"   → "View Code" button
  // demo?:   "https://…"              → "Live Demo" button
  // gallery?: ["/images/…"]           → image gallery on the detail page
  // isPast?: true, year: "2025–26"    → see "Archiving a project" below
} satisfies Project;
```

**Archive a project:** move its file from `2026-27/` into the matching past
year folder and set `isPast: true` plus `year: "2025–26"` (en-dash). The
`/projects` archive groups past projects by that `year` automatically.

## Team — `src/data/team/`

- Current execs: `2026-27.ts` — an array of `TeamMember`s. The file with the
  **newest year name** is what /team shows.
- Past execs: `past/2025-26.ts` — `{ year: "2025-26", members: […] }` (keep the
  `year` field; it's the archive heading).
- **Year rollover:** copy the current year file, rename it to the new year,
  edit the members, then move the old year's file into `past/`.

## Hackathons — `src/data/hackathons/`

One file per hackathon inside a folder per year (`2026/`, `2027/` …).
Shared defaults live in `_shared.ts`:

```ts
// src/data/hackathons/2027/01-sillycon-valley-2027.ts
import type { Hackathon } from "../../_types";
import { baseHowItWorks, baseLogistics } from "../_shared";

export default {
  slug: "sillycon-valley-2027",        // becomes /hackathons/sillycon-valley-2027
  name: "SillyCon Valley 2027",
  date: "March 13–15, 2027",
  location: "ETLC Atrium, U of A",
  status: "Upcoming",                  // "Upcoming" | "Past"
  tagline: "Short punchy line.",
  description: "Long paragraph…",
  howItWorks: baseHowItWorks,          // reuse defaults, or write custom steps
  logistics:  baseLogistics,           // food / sleep / cost / etc.
  schedule:   [{ time: "Fri 6pm", item: "Opening" }],
  prizes:     [{ place: "Grand Prize", reward: "$3,000" }],
  organizers: ["Name 1", "Name 2"],
  sponsors:   ["Cohere", "AltaML"],
  devpost:    "https://…",             // optional
} satisfies Hackathon;
```

## Interviews — `src/data/interviews/`

One file per interview in `latest/` (current series) or `past/` (archive).
The subfolder decides which section of the page it appears in — there is no
`category` field to set. `fullContent` is markdown (use `###` for questions,
`> Name:` blockquotes for answers).

## Presentations — `src/data/presentations/`

One file per talk in `new/` (current seasons) or `past/` (archive). The
subfolder decides the era — there is no `era` field to set.

## Events (homepage calendar) — `src/data/events/`

One file per semester: `fall-2026.ts`, `winter-2027.ts`. Each exports an array:

```ts
import type { UaisEvent } from "../_types";

export default [
  {
    id: "my-event",                          // unique kebab-case id
    title: "My Event Title",
    date: new Date(2026, 9, 15),            // year, monthIndex (0-based), day
    dateLabel: "Oct 15",                     // short display string
    time: "5:00 PM – 6:00 PM",              // set to "" if TBA
    location: "DICE 8-100",                  // set to "" if TBA
    semester: "Fall 2026",                   // "Fall 2026" | "Winter 2027"
    type: "Talk",                            // Talk | Workshop | Social | Hackathon | Other
    description: "A short blurb about the event.",
    link: "https://…",                       // optional — shown as "Register"
  },
] satisfies UaisEvent[];
```

- `semester` must match the type's allowed values — the toggle buttons and
  file naming depend on it.
- Event type → color on the calendar: Talk=blue, Workshop=green, Social=pink,
  Hackathon=orange, Other=yellow (map lives in `events/index.ts`).

## Marquee photos (home page banner)

The scrolling photo banner reads from `marqueePhotos.ts`.
**Always use the optimized copies** in `public/images/marquee/optimized/` —
the full-res originals can be 5+ MB each and would kill page performance.

1. Drop the image into `public/images/` (any folder)
2. Add its original path (e.g. `/images/my-photo.jpg`) to `marqueePhotos.ts`
3. `npm install -D sharp && node scripts/optimize-marquee-images.mjs`
4. Point the entry at the generated WebP copy
   (e.g. `/images/marquee/optimized/marquee-00.webp`)

## Constitution as an external PDF

`constitution.ts` — set `externalUrl` to a full URL (Google Drive, Notion…).
The homepage callout and footer link will point there instead of the in-site
`/rubric` page. (Create this file if it doesn't exist yet.)
