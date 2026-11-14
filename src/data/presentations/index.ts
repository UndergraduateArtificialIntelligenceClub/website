// Presentations / weekly talks — auto-collected from every file in this tree.
//
// ▸ Add a talk: create a file in `new/` (current seasons) or `past/` (archive)
//   with `export default { … } satisfies PresentationContent`.
//   The subfolder it sits in becomes its era on the Presentations page.
//
// Ordering: within each section, by filename prefix (01-, 02- …).
// Files named `index.ts` or starting with `_` are infrastructure and ignored.

import type { Presentation, PresentationContent } from "../_types";

const modules = import.meta.glob<{ default: PresentationContent }>(
  ["./**/*.ts", "!./**/index.ts", "!./**/_*.ts"],
  { eager: true },
);

const rank = (p: string) => (p.split("/")[1] === "new" ? 0 : 1);
const fileOf = (p: string) => p.split("/").pop() ?? "";

export const presentations: Presentation[] = Object.entries(modules)
  .sort(([a], [b]) => rank(a) - rank(b) || fileOf(a).localeCompare(fileOf(b)))
  .map(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/presentations] ${path} is missing a default export.`);
    return { ...mod.default, era: path.split("/")[1] as Presentation["era"] };
  });
