// SillyCon Valley 2026 — hackathon data.
// Auto-collected by src/data/hackathons/index.ts. Reuses the shared defaults
// from ../_shared and overrides only what differs.

import type { Hackathon } from "../../_types";
import { baseHowItWorks, baseLogistics } from "../_shared";

export default {
  slug: "sillycon-valley-2026",
  name: "SillyCon Valley 2026",
  date: "Feb 13–14, 2026",
  location: "DICE 8th Floor, U of A",
  status: "Past",
  tagline: "Build the silliest, most creative thing you can with AI.",
  description:
    "Our flagship hackathon. SillyCon Valley invites teams to build genuinely useful AI projects with the most ridiculous framing possible. No startup grind, just experimenting and fun. Past winners include an LLM-powered toaster manifesto generator and a CV system that judges your posture as a Victorian aristocrat would.",
  howItWorks: baseHowItWorks,
  logistics: [
    ...baseLogistics,
    { label: "Cost", detail: "$10 per person — includes all meals and swag." }
  ],
  schedule: [
    { time: "Fri 5pm", item: "Opening ceremony & team formation" },
    { time: "Fri 7pm", item: "Hacking begins" },
    { time: "Sat 6pm", item: "Hacking ends" },
    { time: "Sat 7pm", item: "Demos & judging" },
    { time: "Sat 9pm", item: "Awards ceremony" },
  ],
  prizes: [
    { place: "1st place", reward: "Gold Trophy" },
    { place: "2nd place", reward: "Silver Trophy" },
    { place: "3rd place", reward: "Bronze Trophy" },
  ],
  organizers: ["Aarush Bhat", "Hamidat Bello", "Arnav Sachdeva"],
  sponsors: ["AltaML", "Amii", "Artificial Agency", "Dura Digital"],
  devpost: "https://sillycon-valley.devpost.com/",
  banner: "/images/hackathons/sillycon-valley/banner.webp",
} satisfies Hackathon;
