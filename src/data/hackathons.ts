// Hackathons data. Read by src/pages/Hackathons.tsx and HackathonDetail.tsx.
// To add a hackathon: append a new entry to `hackathons`. The `slug` becomes the URL.
// Most events can reuse `baseHowItWorks` and `baseLogistics` — only override when the event is different.

export type Hackathon = {
  slug: string;
  name: string;
  date: string;
  location: string;
  status: "Upcoming" | "Past";
  tagline: string;
  description: string;
  howItWorks: { step: string; detail: string }[];
  logistics: { label: string; detail: string }[];
  schedule: { time: string; item: string }[];
  prizes: { place: string; reward: string }[];
  organizers: string[];
  sponsors: string[];
  devpost?: string;
  banner?: string;
};

const baseHowItWorks = [
  { step: "Register", detail: "Sign up solo or with a team of up to 4. Walk-ins welcome while space lasts." },
  { step: "Form a team", detail: "Use our team-matching board on Discord — we pair newcomers with experienced members." },
  { step: "Build", detail: "Hack within the theme. Mentors from UAIS and sponsors are on the floor the whole time." },
  { step: "Demo", detail: "Each team gets 3 minutes to pitch + 2 minutes Q&A in front of judges." },
  { step: "Win", detail: "Prizes awarded across multiple categories — and yes, everyone leaves with swag." },
];

const baseLogistics = [
  { label: "Food", detail: "All meals included — breakfast, lunch, dinner, plus a midnight snack run. Vegetarian, vegan, halal, and gluten-free options." },
  { label: "Drinks & snacks", detail: "Unlimited coffee, energy drinks, and a fully stocked snack table for the entire event." },
  { label: "Workspace", detail: "24/7 access to the venue with quiet rooms, whiteboards, monitors, and reliable Wi-Fi." },
  { label: "Sleep", detail: "Designated rest area with cots and blankets. Showers available in the nearby PAW Centre." },
  { label: "What to bring", detail: "Laptop, charger, student ID, headphones, and a change of clothes. We supply the rest." },
  { label: "Cost", detail: "Free for all UAlberta students. Travel reimbursements available for out-of-town teams." },
];

export const hackathons: Hackathon[] = [
  {
    slug: "sillycon-valley-2026",
    name: "SillyCon Valley 2026",
    date: "Feb 13–14, 2026",
    location: "DICE 8th Floor, U of A",
    status: "Upcoming",
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
  },
];
