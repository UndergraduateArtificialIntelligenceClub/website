// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — archiving a past exec year
// ═══════════════════════════════════════════════════════════════════════════
//  When the team rolls over, move the old year's file from `../` into this
//  `past/` folder and reshape it: the members array gets wrapped in an object
//  with a `year` field (that string is the archive heading on /team).
//  Keep the filename as the year, e.g. `2026-27.ts`.
//
//  Past members only need name/role + optional links — no slug or bio.
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { PastExecYear } from "@/data/_types";

export default {
  year: "2025-26",                     // display heading — keep the same format as the filename
  members: [
    {
      name: "Example Name",
      role: "President",
      image: "/images/headshots/example.jpg",   // optional — keep old headshots
      // discord: "username",                  (optional)
      // linkedin: "https://…",                (optional)
      // github: "https://…",                  (optional)
    },
    // …one object per exec of that year…
  ],
} satisfies PastExecYear;
