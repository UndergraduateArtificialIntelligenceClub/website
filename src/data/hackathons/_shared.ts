// Shared defaults for hackathon pages. Individual hackathon files import
// these and override only what's different (see 2026/01-sillycon-valley.ts).
// Files starting with `_` are infrastructure — the auto-collector ignores them.

export const baseHowItWorks = [
  { step: "Register", detail: "Sign up solo or with a team of up to 4. Walk-ins welcome while space lasts." },
  { step: "Form a team", detail: "Use our team-matching board on Discord — we pair newcomers with experienced members." },
  { step: "Build", detail: "Hack within the theme. Mentors from UAIS and sponsors are on the floor the whole time." },
  { step: "Demo", detail: "Each team gets 3 minutes to pitch + 2 minutes Q&A in front of judges." },
  { step: "Win", detail: "Prizes awarded across multiple categories — and yes, everyone leaves with swag." },
];

export const baseLogistics = [
  { label: "Food", detail: "All meals included — breakfast, lunch, dinner, plus a midnight snack run. Vegetarian, vegan, halal, and gluten-free options." },
  { label: "Drinks & snacks", detail: "Unlimited coffee, energy drinks, and a fully stocked snack table for the entire event." },
  { label: "Workspace", detail: "24/7 access to the venue with quiet rooms, whiteboards, monitors, and reliable Wi-Fi." },
  { label: "Sleep", detail: "Designated rest area with cots and blankets. Showers available in the nearby PAW Centre." },
  { label: "What to bring", detail: "Laptop, charger, student ID, headphones, and a change of clothes. We supply the rest." },
  { label: "Cost", detail: "Free for all UAlberta students. Travel reimbursements available for out-of-town teams." },
];
