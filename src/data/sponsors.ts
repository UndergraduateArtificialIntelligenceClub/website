import type { Color } from "./colors";

export type SponsorTier = {
  name: string;
  color: Color;
  sponsors: {
    name: string;
    description?: string;
    website?: string;
    linkedin?: string;
    logo?: string;
  }[];
};

export const sponsorTiers: SponsorTier[] = [
  {
    name: "Gold Sponsors",
    color: "yellow",
    sponsors: [
      {
        name: "Artificial Agency",
        logo: "/images/sponsors/artificialagency_logo.jpg",
        description: "Artificial Agency is an Edmonton-based AI startup creating a generative behavior engine that brings digital worlds to life. Their technology enables non-player characters (NPCs) and virtual agents to make real-time decisions and adapt dynamically to player actions, transforming how games feel and respond.",
        website: "https://www.artificial.agency/",
        linkedin: "https://www.linkedin.com/company/artificialagency/"
      },
      {
        name: "Dura Digital",
        logo: "/images/sponsors/dura_digital_logo.jpg",
        description: "Dura Digital is a technology services firm that supports organizations through digital transformation — offering solutions across AI, data, human-centered design, product engineering, and systems strategy. Their approach uses a \"studio + dual-shore\" model to blend local and remote capabilities.",
        website: "https://www.duradigital.com/",
        linkedin: "https://www.linkedin.com/company/dura-digital"
      }
    ],
  },
];
