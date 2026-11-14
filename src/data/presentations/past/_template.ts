// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a presentation for the archive
// ═══════════════════════════════════════════════════════════════════════════
//  Same shape as `../new/_template.ts` — the only difference is this file
//  lives in `past/`, so it appears in the "Past Presentations" section.
//  When a season wraps up, move its talk files from `new/` into this folder.
//
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { PresentationContent } from "@/data/_types";

export default {
  title: "Talk Title",
  // presenter: "Name(s)",                 (optional)
  date: "Oct 23, 2025",                    // display string — write it how you want it shown
  description: "One or two sentences about the talk.",
  tag: "Workshop",                         // Talk | Workshop | Collab | AGM | Kickoff | Panel …   (optional)
  // slides: "https://docs.google.com/…",   (optional → "Slides" button)
  // recording: "https://…",                (optional → "Recording" button)
} satisfies PresentationContent;
