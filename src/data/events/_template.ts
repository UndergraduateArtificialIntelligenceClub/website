// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a new semester of calendar events
// ═══════════════════════════════════════════════════════════════════════════
//  1. Copy this file and rename it to the semester, lowercase-kebab:
//     `fall-2026.ts`, `winter-2027.ts` …
//  2. One file per semester — every event in the file appears on the homepage
//     calendar automatically. No list to update anywhere.
//  3. `date` MUST be a real Date object: new Date(year, monthIndex, day) —
//     monthIndex is 0-based (0 = January, 9 = October, 11 = December).
//  4. Fill in and delete this header (down to the dashes).
//
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { UaisEvent } from "@/data/_types";

export default [
  {
    id: "example-event",                 // unique kebab-case id (used as a React key)
    title: "Example Event Title",
    date: new Date(2026, 9, 15),         // year, monthIndex (0-BASED!), day
    dateLabel: "Oct 15",                 // short label shown in the sidebar cards
    time: "5:00 PM - 6:30 PM",           // set to "" if TBA
    location: "SIC",                     // set to "" if TBA
    semester: "Fall 2026",               // "Fall 2026" | "Winter 2027" — must match this file's semester
    type: "Talk",                        // Talk | Workshop | Social | Hackathon | Other → calendar dot color
    description: "Short blurb for the event list.",
    // link: "https://…",                 (optional → "Register" button)
  },
  // …one object per event, roughly in date order…
] satisfies UaisEvent[];
