// Hackathons — auto-collected from every file in this folder tree.
//
// ▸ Add a hackathon: create a file in the event's year folder
//   (e.g. `2027/01-my-hackathon.ts`) with
//   `export default { … } satisfies Hackathon`.
//   It appears on /hackathons, the navbar dropdown, and gets its own
//   /hackathons/:slug page automatically.
// ▸ Shared defaults (`baseHowItWorks`, `baseLogistics`) live in `_shared.ts` —
//   import them and override only what differs (see 2026/01-sillycon-valley.ts).
//
// Ordering: newest year folder first, then by filename prefix (01-, 02- …).
// Files named `index.ts` or starting with `_` are infrastructure and ignored.

import type { Hackathon } from "../_types";

const modules = import.meta.glob<{ default: Hackathon }>(
  ["./**/*.ts", "!./**/index.ts", "!./**/_*.ts"],
  { eager: true },
);

const folderOf = (p: string) => p.split("/")[1] ?? "";
const fileOf = (p: string) => p.split("/").pop() ?? "";

export const hackathons: Hackathon[] = Object.entries(modules)
  .sort(([a], [b]) => {
    if (folderOf(a) !== folderOf(b)) return folderOf(b).localeCompare(folderOf(a)); // newest year first
    return fileOf(a).localeCompare(fileOf(b)); // 01- before 02-
  })
  .map(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/hackathons] ${path} is missing a default export.`);
    return mod.default;
  });
