// Shared data types for everything under src/data/.
// Content files live in folder trees next to a small index.ts that
// auto-collects them (see the per-folder index and README.md in this folder).

import type { Color } from "./colors";

// ── Projects ──────────────────────────────────────────────────────────────────
// Folder: src/data/projects/<year>/<order>-<slug>.ts

export type ProjectLead = { name: string; role: string; linkedin?: string; github?: string };

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  tag: string;
  color: Color;
  stack: string[];
  details: string;
  difficulty?: string;
  termLength?: string;
  source?: string;
  demo?: string;
  lead: ProjectLead | ProjectLead[];
  members: string[];
  milestones?: { date: string; item: string }[];
  content?: {
    type: "readme" | "sections";
    body?: string;
    items?: { title: string; body: string }[];
  };
  gallery?: string[];
  documents?: { title: string; url: string }[];
  isPast?: boolean;
  year?: string;
};

// Auto-grouped by projects/index.ts from projects with `isPast: true`.
export type PastProjectGroup = {
  year: string;
  items: { slug: string; name: string; tagline: string; source?: string }[];
};

// ── Team ──────────────────────────────────────────────────────────────────────
// Current: src/data/team/<year>.ts · Past: src/data/team/past/<year>.ts

export type TeamMember = {
  slug: string;
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  github?: string;
  discord?: string;
  site?: string;
};

export type PastExecMember = {
  name: string;
  role: string;
  image?: string;
  discord?: string;
  linkedin?: string;
  github?: string;
};

export type PastExecYear = {
  year: string;
  members: PastExecMember[];
};

// ── Hackathons ────────────────────────────────────────────────────────────────
// Folder: src/data/hackathons/<year>/<order>-<slug>.ts

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

// ── Interviews ────────────────────────────────────────────────────────────────
// Folder: src/data/interviews/<latest|past>/<order>-<slug>.ts
// The subfolder a file sits in becomes its `category` on the site.

export type Interview = {
  slug: string;
  name: string;
  title: string;
  teaser: string;
  bio: string;
  fullContent: string;
  color: Color;
  pdf?: string;
  category?: "latest" | "past";
};

export type InterviewContent = Omit<Interview, "category">;

// ── Presentations ─────────────────────────────────────────────────────────────
// Folder: src/data/presentations/<new|past>/<order>-<slug>.ts
// The subfolder a file sits in becomes its `era` on the site.

export type Presentation = {
  title: string;
  presenter?: string;
  date: string;
  description: string;
  tag?: string;
  recording?: string;
  slides?: string;
  era: "new" | "past";
};

export type PresentationContent = Omit<Presentation, "era">;

// ── Events (homepage calendar) ────────────────────────────────────────────────
// One file per semester: src/data/events/<semester>.ts

export type UaisEvent = {
  id: string;
  title: string;
  date: Date;
  dateLabel: string;
  time: string;
  location: string;
  semester: "Fall 2026" | "Winter 2027";
  type: "Talk" | "Workshop" | "Social" | "Hackathon" | "Other";
  description: string;
  link?: string;
};
