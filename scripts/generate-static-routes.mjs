import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const indexHtml = await readFile(path.join(dist, "index.html"), "utf8");

const staticRoutes = [
  "team",
  "presentations",
  "hackathons",
  "projects",
  "interviews",
  "sponsors",
  "getting-started",
  "socials",
  "attendance",
];

const dataFiles = [
  { file: "src/data/projects.ts", prefix: "projects" },
  { file: "src/data/hackathons.ts", prefix: "hackathons" },
  { file: "src/data/interviews.ts", prefix: "interviews" },
];

const redirectRoutes = {
  discord: "https://discord.gg/KapmJxs",
  github: "https://github.com/UndergraduateArtificialIntelligenceClub/",
  instagram: "https://www.instagram.com/uais.ualberta/",
  linkedin: "https://www.linkedin.com/company/undergraduate-artificial-intelligence-society/",
  eventbrite: "https://uais.eventbrite.com/",
  rubric: "https://campus.hellorubric.com/?s=11851",
  redirect: "https://www.eventbrite.ca/e/weights-biases-webinar-competition-tickets-510165477677",
};

const writeRouteIndex = async (route, html) => {
  const dir = path.join(dist, ...route.split("/"));
  await mkdir(dir, { recursive: true });
  await writeFile(path.join(dir, "index.html"), html);
};

for (const route of staticRoutes) {
  await writeRouteIndex(route, indexHtml);
}

for (const { file, prefix } of dataFiles) {
  const source = await readFile(path.join(root, file), "utf8");
  const slugs = source.matchAll(/slug:\s*["']([^"']+)["']/g);
  for (const [, slug] of slugs) {
    await writeRouteIndex(`${prefix}/${slug}`, indexHtml);
  }
}

for (const [route, target] of Object.entries(redirectRoutes)) {
  const escapedTarget = target.replace(/"/g, "&quot;");
  await writeRouteIndex(route, `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="refresh" content="0; url=${escapedTarget}">
    <title>Redirecting...</title>
    <script>window.location.replace(${JSON.stringify(target)});</script>
  </head>
  <body>
    <p>Redirecting... <a href="${escapedTarget}">Continue</a></p>
  </body>
</html>
`);
}
