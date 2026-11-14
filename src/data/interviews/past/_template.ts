// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — an interview for the archive
// ═══════════════════════════════════════════════════════════════════════════
//  Same shape as `../latest/_template.ts` — the only difference is this file
//  lives in `past/`, so it appears in the "Past Interviews" section.
//  When an interview leaves the current series, move its file from
//  `latest/` into this folder. Nothing else to change.
//
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

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
