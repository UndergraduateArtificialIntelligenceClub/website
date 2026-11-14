// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — how to add a project
// ═══════════════════════════════════════════════════════════════════════════
//  1. Copy this file into the project's year folder (e.g. `2026-27/`).
//  2. Rename it `NN-slug.ts` — NN is the next free number (01-, 02- …) and
//     controls where the card appears; slug should match the `slug` field.
//  3. Replace every example value with the real project's info, then delete
//     this header (down to the line of dashes).
//
//  Files starting with `_` are ignored by the auto-collector, so this template
//  never shows up on the site. Fields marked (optional) can be deleted.
//  Full docs: src/data/README.md

import type { Project } from "@/data/_types";

export default {
  // ── Required ─────────────────────────────────────────────────────────────
  slug: "example-project",            // becomes /projects/example-project — lowercase-kebab-case, NEVER change after publishing
  name: "Example Project",            // heading on the card + detail page
  tagline: "One punchy line for the card.",
  description: "Short paragraph shown on the card, two or three sentences.",
  tag: "LLMs",                        // small category label — freeform: "Agentic AI", "RL", "CV", "Data Science", "Healthcare", "Research", …
  color: "blue",                      // card accent: "blue" | "green" | "yellow" | "red" | "orange" | "pink"
  stack: ["Python", "FastAPI"],       // tech badge list on the card
  details: "Longer description shown at the top of the detail page.",
  lead: {                             // one object, or an array of them for co-leads
    name: "Lead Name",
    role: "Project Lead",
    // linkedin: "https://www.linkedin.com/in/…",   (optional)
    // github: "https://github.com/…",              (optional)
  },
  members: ["Teammate One", "Teammate Two"],   // names only, [] if none yet

  // ── Detail page body — pick ONE of the two shapes ────────────────────────
  content: {
    // Shape A — titled sections (most common):
    type: "sections",
    items: [
      { title: "Description", body: "What the project is and why it matters." },
      { title: "Skills Gained", body: "- Bullet one\n- Bullet two\n- Bullet three" },   // "\n" = line break
      { title: "Technical Details", body: "Stack, architecture, and how it's built." },
    ],
    // Shape B — one big markdown block (README style):
    // type: "readme",
    // body: "## Heading\n\nMarkdown paragraphs, lists, **bold**, [links](https://…).",
  },

  // ── Optional extras — delete any you don't need ──────────────────────────
  // difficulty: "Beginner-Intermediate",
  // termLength: "One semester (Fall 2026)",
  // source: "https://github.com/UndergraduateArtificialIntelligenceClub/…",   → "View Code" button
  // demo: "https://…",                                                       → "Live Demo" button
  // milestones: [{ date: "Oct 2026", item: "MVP shipped" }],
  // gallery: ["/images/example-project/pic1.webp", "/images/example-project/pic2.webp"],   → image gallery
  // documents: [{ title: "Project spec", url: "https://…" }],

  // ── Archiving (past years only) ──────────────────────────────────────────
  // isPast: true,      → moves the card out of the active grid
  // year: "2025–26",   → archive heading; also move this file into that year's folder
} satisfies Project;
