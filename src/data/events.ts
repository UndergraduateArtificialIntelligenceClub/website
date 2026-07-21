import { type Color } from "./colors";

/** Set to `true` when events are confirmed and the calendar is ready to show publicly. */
export const eventsEnabled = false;

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
    id: "welcome-info",
    title: "Welcome Back Info Session",
    date: new Date(2026, 8, 10),
    dateLabel: "Sep 10",
    time: "5:00 PM – 6:00 PM",
    location: "DICE 8-100",
    semester: "Fall 2026",
    type: "Social",
    description:
      "Kick off the semester with UAIS! Meet the exec team, learn about upcoming events, projects, and how to get involved. Free pizza and swag.",
  },
  {
    id: "intro-ml-workshop",
    title: "Intro to Machine Learning Workshop",
    date: new Date(2026, 8, 24),
    dateLabel: "Sep 24",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-200",
    semester: "Fall 2026",
    type: "Workshop",
    description:
      "A hands-on workshop covering the fundamentals of ML — from linear regression to neural networks — using scikit-learn and PyTorch.",
  },
  {
    id: "talk-ai-healthcare",
    title: "Guest Talk: AI in Healthcare",
    date: new Date(2026, 9, 8),
    dateLabel: "Oct 8",
    time: "5:00 PM – 6:00 PM",
    location: "DICE 8-100",
    semester: "Fall 2026",
    type: "Talk",
    description:
      "Join us for a guest lecture on how AI is transforming diagnostics, drug discovery, and patient care. Speaker TBA.",
  },
  {
    id: "git-workshop",
    title: "Git & GitHub Workshop",
    date: new Date(2026, 9, 22),
    dateLabel: "Oct 22",
    time: "5:00 PM – 6:30 PM",
    location: "DICE 8-200",
    semester: "Fall 2026",
    type: "Workshop",
    description:
      "Learn version control essentials — branching, merging, pull requests, and open-source collaboration workflows.",
  },
  {
    id: "halloween-social",
    title: "Halloween Social Mixer",
    date: new Date(2026, 9, 30),
    dateLabel: "Oct 30",
    time: "6:00 PM – 8:00 PM",
    location: "DICE Atrium",
    semester: "Fall 2026",
    type: "Social",
    description:
      "Costumes encouraged! Come meet fellow AI enthusiasts for an evening of games, snacks, and spooky AI trivia.",
  },
  {
    id: "talk-nlp",
    title: "Guest Talk: NLP Frontiers",
    date: new Date(2026, 10, 12),
    dateLabel: "Nov 12",
    time: "5:00 PM – 6:00 PM",
    location: "DICE 8-100",
    semester: "Fall 2026",
    type: "Talk",
    description:
      "Exploring the latest breakthroughs in natural language processing — from LLM alignment to multimodal reasoning.",
  },
  {
    id: "project-showcase",
    title: "Project Showcase Night",
    date: new Date(2026, 10, 26),
    dateLabel: "Nov 26",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-100",
    semester: "Fall 2026",
    type: "Other",
    description:
      "UAIS project teams demo their semester-long work. See live demos, ask questions, and get inspired for next term.",
  },
  {
    id: "end-sem-social",
    title: "End of Semester Social",
    date: new Date(2026, 11, 4),
    dateLabel: "Dec 4",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-100",
    semester: "Fall 2026",
    type: "Social",
    description:
      "Wrap up the semester with good food, great company, and a look back at everything we accomplished together.",
  },

  // ── Winter 2027 ────────────────────────────────────────
  {
    id: "new-year-kickoff",
    title: "New Year Kickoff Social",
    date: new Date(2027, 0, 14),
    dateLabel: "Jan 14",
    time: "5:00 PM – 6:30 PM",
    location: "DICE 8-100",
    semester: "Winter 2027",
    type: "Social",
    description:
      "Welcome back! Set your AI goals for the term, meet new members, and hear about what's coming up.",
  },
  {
    id: "deep-learning-workshop",
    title: "Deep Learning Workshop",
    date: new Date(2027, 0, 28),
    dateLabel: "Jan 28",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-200",
    semester: "Winter 2027",
    type: "Workshop",
    description:
      "Dive into neural networks, backpropagation, and CNNs with PyTorch. Bring your laptop with a Python environment ready.",
  },
  {
    id: "talk-rl",
    title: "Guest Talk: Reinforcement Learning",
    date: new Date(2027, 1, 11),
    dateLabel: "Feb 11",
    time: "5:00 PM – 6:00 PM",
    location: "DICE 8-100",
    semester: "Winter 2027",
    type: "Talk",
    description:
      "A deep dive into RL algorithms — from Q-learning to PPO — and their applications in robotics and game-playing.",
  },
  {
    id: "sillycon-2027",
    title: "SillyCon Valley 2027",
    date: new Date(2027, 1, 26),
    dateLabel: "Feb 26–27",
    time: "Fri 5 PM – Sat 9 PM",
    location: "DICE 8th Floor",
    semester: "Winter 2027",
    type: "Hackathon",
    description:
      "UAIS's flagship hackathon! Build the silliest, most creative AI project you can think of. 24 hours, great prizes, and unlimited snacks.",
    link: "https://sillycon-valley.devpost.com/",
  },
  {
    id: "career-panel",
    title: "Career Panel in AI",
    date: new Date(2027, 2, 11),
    dateLabel: "Mar 11",
    time: "5:00 PM – 6:30 PM",
    location: "DICE 8-100",
    semester: "Winter 2027",
    type: "Talk",
    description:
      "Industry professionals and researchers share their career journeys in AI — internships, grad school, startups, and big tech.",
  },
  {
    id: "data-science-workshop",
    title: "Data Science Workshop",
    date: new Date(2027, 2, 25),
    dateLabel: "Mar 25",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-200",
    semester: "Winter 2027",
    type: "Workshop",
    description:
      "A practical session on data wrangling, visualization, and analysis using Pandas, Matplotlib, and Seaborn.",
  },
  {
    id: "eoy-showcase",
    title: "End of Year Project Showcase",
    date: new Date(2027, 3, 8),
    dateLabel: "Apr 8",
    time: "5:00 PM – 7:00 PM",
    location: "DICE 8-100",
    semester: "Winter 2027",
    type: "Other",
    description:
      "The annual showcase featuring the best projects from both semesters. Prizes, demos, and celebration.",
  },
  {
    id: "year-end-social",
    title: "Year-End Social",
    date: new Date(2027, 3, 16),
    dateLabel: "Apr 16",
    time: "5:00 PM – 8:00 PM",
    location: "DICE Atrium",
    semester: "Winter 2027",
    type: "Social",
    description:
      "Celebrate the end of an incredible year! Food, awards, and a look ahead to what's next for UAIS.",
  },
];
