import { type Color } from "./colors";

/** Set to `true` when events are confirmed and the calendar is ready to show publicly. */
export const eventsEnabled = true;

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

export const eventTypeColor: Record<UaisEvent["type"], Color> = {
  Talk: "blue",
  Workshop: "green",
  Social: "pink",
  Hackathon: "orange",
  Other: "yellow",
};

export const events: UaisEvent[] = [
  // ── Fall 2026 ──────────────────────────────────────────
  {
    id: "fall-agm",
    title: "Fall Annual General Meeting (Fall AGM)",
    date: new Date(2026, 8, 4),
    dateLabel: "Sep 4",
    time: "5:00 PM - 6:30 PM",
    location: "ETLC E1-017",
    semester: "Fall 2026",
    type: "Other",
    description: "Fall AGM with Michael Bowling",
    link: "https://campus.hellorubric.com/?eid=71269",
  },
  {
    id: "intro-python-aiml",
    title: "Workshop - Intro to Python for AI/ML",
    date: new Date(2026, 8, 11),
    dateLabel: "Sep 11",
    time: "5:00 PM - 6:30 PM",
    location: "SIC",
    semester: "Fall 2026",
    type: "Workshop",
    description: "Intro to Python for AI/ML with Connor + Kashish",
    link: "https://campus.hellorubric.com/?eid=71269",
  },
  {
    id: "fall-project-kickoff",
    title: "Fall Project Kick-Off",
    date: new Date(2026, 8, 25),
    dateLabel: "Sep 25",
    time: "5:00 PM - 6:30 PM",
    location: "CCIS 1-140",
    semester: "Fall 2026",
    type: "Other",
    description: "Fall Project Kick-Off",
    link: "https://campus.hellorubric.com/?eid=73627",
  },
  // {
  //   id: "club-collab-usig",
  //   title: "Club Collab - Presentation USig",
  //   date: new Date(2026, 9, 2),
  //   dateLabel: "Oct 2",
  //   time: "5:00 PM - 6:30 PM",
  //   location: "SIC",
  //   semester: "Fall 2026",
  //   type: "Talk",
  //   description: "Club Collab Presentation with USig",
  //   link: "Club Collab Planning Doc",
  // },
  {
    id: "panel-ai-industry",
    title: 'Panel: "AI: Industry"',
    date: new Date(2026, 9, 9),
    dateLabel: "Oct 9",
    time: "5:00 PM - 6:30 PM",
    location: "ETLC E2-001",
    semester: "Fall 2026",
    type: "Talk",
    description: "AI in Industry Panel with Sony AI, amii, Govt of Alberta",
    link: "https://campus.hellorubric.com/?eid=76285",
  },
  {
    id: "study-night",
    title: "Study Night: UAIS Study Social",
    date: new Date(2026, 9, 23),
    dateLabel: "Oct 23",
    time: "5:00 PM - 6:30 PM",
    location: "SIC",
    semester: "Fall 2026",
    type: "Social",
    description: "UAIS Study Social",
    link: "https://campus.hellorubric.com/?eid=76290",
  },
  {
    id: "computer-vision-workshop",
    title: 'Workshop: "Build your own Computer Vision"',
    date: new Date(2026, 10, 6),
    dateLabel: "Nov 6",
    time: "5:00 PM - 6:30 PM",
    location: "SIC",
    semester: "Fall 2026",
    type: "Workshop",
    description: 'Build your own Computer Vision workshop with Dominik - "Evolution of Computer Vision: One Problem-6 Solutions"',
    link: 'https://campus.hellorubric.com/?eid=76614',
  },
  {
    id: "panel-ai-research",
    title: 'Panel: "Shaping the Future: AI Research"',
    date: new Date(2026, 10, 20),
    dateLabel: "Nov 20",
    time: "5:00 PM - 6:30 PM",
    location: "ETLC E1-013",
    semester: "Fall 2026",
    type: "Talk",
    description: 'AI Research Panel with Dr. Russ Greiner, Rosanna, Masters, PhD students',
    link: "https://campus.hellorubric.com/?eid=76615",
  },
  // {
  //   id: "dura-digital",
  //   title: "Dura Digital Talk / Interactive Workshop",
  //   date: new Date(2026, 10, 27),
  //   dateLabel: "Nov 27",
  //   time: "5:00 PM - 6:30 PM",
  //   location: "",
  //   semester: "Fall 2026",
  //   type: "Workshop",
  //   description: "Dura Digital - Talk or interactive workshop/demo (TBD)",
  // },

  // ── Winter 2027 ────────────────────────────────────────
];
