// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a presentation / weekly talk (current seasons)
// ═══════════════════════════════════════════════════════════════════════════
//  1. Copy this file into `new/` (current seasons) or `past/` (archive) and
//     rename it `NN-short-name.ts` — NN is the next free number in that
//     folder and sets the card order within the section.
//  2. The subfolder decides which section of /presentations it shows in —
//     there is no era field to set.
//  3. Fill in and delete this header (down to the dashes).
//
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { PresentationContent } from "@/data/_types";

export default {
  title: "Talk Title",
  // presenter: "Name(s)",                 (optional)
  date: "Oct 23, 2026",                    // display string — write it how you want it shown
  description: "One or two sentences about the talk.",
  tag: "Workshop",                         // Talk | Workshop | Collab | AGM | Kickoff | Panel …   (optional)
  // slides: "https://docs.google.com/…",   (optional → "Slides" button)
  // recording: "https://…",                (optional → "Recording" button)
} satisfies PresentationContent;
