// Interviews — auto-collected from every file in this folder tree.
//
// ▸ Add an interview: create a file in `latest/` or `past/` with
//   `export default { … } satisfies InterviewContent`.
//   The subfolder it sits in becomes its category on the Interviews page
//   ("latest" → Latest Interviews section, anything else → Past).
//
// Ordering: within each section, by filename prefix (01-, 02- …).
// Files named `index.ts` or starting with `_` are infrastructure and ignored.

import type { Interview, InterviewContent } from "../_types";

const modules = import.meta.glob<{ default: InterviewContent }>(
  ["./**/*.ts", "!./**/index.ts", "!./**/_*.ts"],
  { eager: true },
);

const rank = (p: string) => (p.split("/")[1] === "latest" ? 0 : 1);
const fileOf = (p: string) => p.split("/").pop() ?? "";

export const interviews: Interview[] = Object.entries(modules)
  .sort(([a], [b]) => rank(a) - rank(b) || fileOf(a).localeCompare(fileOf(b)))
  .map(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/interviews] ${path} is missing a default export.`);
    return { ...mod.default, category: path.split("/")[1] === "latest" ? "latest" : "past" } as Interview;
  });
