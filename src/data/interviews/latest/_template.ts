// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a new interview (current series)
// ═══════════════════════════════════════════════════════════════════════════
//  1. Copy this file into `latest/` (or `past/` for the archive) and rename it
//     `NN-slug.ts` — NN is the next free number, it sets the card order.
//  2. The subfolder decides which section of /interviews it appears in —
//     there is no category field to set.
//  3. Fill in and delete this header (down to the dashes).
//
//  `fullContent` is markdown: `###` for each question, `> Name:` blockquote
//  for each reply. Files starting with `_` are ignored by the site.
//  Full docs: src/data/README.md

import type { InterviewContent } from "@/data/_types";

export default {
  slug: "example-name",                // becomes /interviews/example-name — lowercase-kebab-case
  name: "Example Name",
  title: "Role @ Company",             // small colored line under the name
  teaser: "One-liner hook shown on the card.",
  bio: "One or two sentences about who they are.",
  color: "blue",                       // "blue" | "green" | "yellow" | "red" | "orange" | "pink"
  // pdf: "/documents/interviews/<series>/example.pdf",   (optional — link to the PDF)
  fullContent: `
### First question here?

> Example Name: Their answer in a blockquote. Use a \`>\` + name line for every reply.

### Next question?

> Example Name: More answer text. Markdown works: **bold**, [links](https://…), lists, \`code\`.
`,
} satisfies InterviewContent;
