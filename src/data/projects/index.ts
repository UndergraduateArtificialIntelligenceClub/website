// Projects — auto-collected from every file in this folder tree.
//
// ▸ Add a project: create a new file (e.g. `2026-27/03-my-project.ts`) with
//   `export default { … } satisfies Project`. It appears on /projects, the
//   navbar dropdown, and gets its own /projects/:slug page automatically.
// ▸ Delete a project: delete its file.
// ▸ Archive a project: move its file into the matching past-year folder and
//   set `isPast: true` + `year` — the /projects archive groups them below.
//
// Ordering: newest year folder first, then by filename prefix (01-, 02- …).
// Files named `index.ts` or starting with `_` are infrastructure and ignored.

import type { PastProjectGroup, Project } from "../_types";

const modules = import.meta.glob<{ default: Project }>(
  ["./**/*.ts", "!./**/index.ts", "!./**/_*.ts"],
  { eager: true },
);

const folderOf = (p: string) => p.split("/")[1] ?? "";
const fileOf = (p: string) => p.split("/").pop() ?? "";

export const projects: Project[] = Object.entries(modules)
  .sort(([a], [b]) => {
    if (folderOf(a) !== folderOf(b)) return folderOf(b).localeCompare(folderOf(a)); // newest year first
    return fileOf(a).localeCompare(fileOf(b)); // 01- before 02-
  })
  .map(([path, mod]) => {
    if (!mod.default) throw new Error(`[data/projects] ${path} is missing a default export.`);
    return mod.default;
  });

// Auto-grouped from `projects`: any project with `isPast: true` is bucketed
// by its `year` (e.g. "2025–26") for the archive section on /projects.
export const pastProjects: PastProjectGroup[] = (() => {
  const groups = new Map<string, PastProjectGroup["items"]>();
  for (const p of projects) {
    if (!p.isPast) continue;
    const y = p.year ?? "Archive";
    if (!groups.has(y)) groups.set(y, []);
    groups.get(y)!.push({ slug: p.slug, name: p.name, tagline: p.tagline, source: p.source });
  }
  return [...groups.entries()]
    .sort((a, b) => parseInt(b[0], 10) - parseInt(a[0], 10))
    .map(([year, items]) => ({ year, items }));
})();
