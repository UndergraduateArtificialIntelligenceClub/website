// ═══════════════════════════════════════════════════════════════════════════
//  TEMPLATE — a new hackathon
// ═══════════════════════════════════════════════════════════════════════════
//  1. Create a folder for the event's year if it doesn't exist (e.g. `2027/`).
//  2. Copy this file into it as `01-slug.ts` (the number prefix sets the order).
//  3. Fill everything in, then delete this header (down to the dashes).
//
//  It appears on /hackathons, the navbar dropdown, and gets its own
//  /hackathons/:slug page automatically.
//  Files starting with `_` are ignored by the site. Full docs: src/data/README.md

import type { Hackathon } from "@/data/_types";
import { baseHowItWorks, baseLogistics } from "@/data/hackathons/_shared";

export default {
  slug: "sillycon-valley-2027",        // becomes /hackathons/sillycon-valley-2027 — lowercase-kebab-case
  name: "SillyCon Valley 2027",
  date: "March 13–15, 2027",           // display string — write it how you want it shown
  location: "ETLC Atrium, U of A",
  status: "Upcoming",                  // "Upcoming" | "Past" — drives the page sections
  tagline: "Short punchy line for the card.",
  description: "Longer paragraph about the event, the theme, and the vibe.",
  howItWorks: baseHowItWorks,          // shared default steps — or write your own [{ step, detail }]
  logistics: baseLogistics,            // shared defaults (food / sleep / cost / what to bring)
  // logistics: [                       ← to customize, spread the base and add/override entries:
  //   ...baseLogistics,
  //   { label: "Cost", detail: "$10 per person — includes all meals and swag." },
  // ],
  schedule: [
    { time: "Fri 6pm", item: "Opening ceremony & team formation" },
    { time: "Fri 7pm", item: "Hacking begins" },
    { time: "Sat 6pm", item: "Hacking ends" },
    { time: "Sat 7pm", item: "Demos & judging" },
    { time: "Sat 9pm", item: "Awards ceremony" },
  ],
  prizes: [
    { place: "Grand Prize", reward: "$3,000" },
    { place: "2nd place", reward: "Swag bundle" },
    { place: "3rd place", reward: "Bronze trophy" },
  ],
  organizers: ["Name One", "Name Two"],
  sponsors: ["Sponsor A", "Sponsor B"],
  // devpost: "https://sillycon-valley-2027.devpost.com/",     (optional)
  // banner: "/images/hackathons/<slug>/banner.webp",           (optional — card background image)
} satisfies Hackathon;
