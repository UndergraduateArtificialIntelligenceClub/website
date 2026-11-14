// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a new executive team year
// ═══════════════════════════════════════════════════════════════════════════
//  The file with the NEWEST year name in this folder is what /team shows.
//
//  Year rollover (e.g. 2026-27 → 2027-28):
//  1. Copy this file as `2027-28.ts` and fill in the new execs.
//  2. Move the old year's file (e.g. `2026-27.ts`) into `past/` and reshape
//     it to the archive format — see `past/_template.ts`.
//
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { TeamMember } from "@/data/_types";

export default [
  {
    slug: "example-name",                // lowercase-kebab-case, unique
    name: "Example Name",
    role: "President",                   // President | Co-Vice President | VP External | VP Internal | VP Marketing | VP Technology | VP Admin | Treasurer | Advisor
    bio: "Two to four friendly sentences: who they are, what they study, what they do in the club.",
    image: "/images/headshots/example.jpg",   // file inside public/images/headshots/
    // linkedin: "https://www.linkedin.com/in/…",   (optional)
    // github: "https://github.com/…",              (optional)
    // discord: "username",                         (optional)
    // site: "https://…",                           (optional)
  },
  // …one object per exec, roughly in role order…
] satisfies TeamMember[];
