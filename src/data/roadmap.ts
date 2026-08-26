import type { LucideIcon } from "lucide-react";
import {
  Code,
  GitBranch,
  Layout,
  Terminal,
  Brain,
  Bot,
  Layers,
  Network,
  Zap,
  Flag,
  Trophy,
} from "lucide-react";

export type RoadmapColor =
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow";

export type RoadmapMilestone = {
  id: number;
  title: string;
  stage: string;
  icon: LucideIcon;
  description: string;
  resourceTitle: string;
  resourceLink: string;
  color: RoadmapColor;
};

export const roadmapData: RoadmapMilestone[] = [
  {
    id: 1,
    title: "Python Basics",
    stage: "Programming",
    icon: Code,
    description: "Learn Python fundamentals — variables, loops, functions, and data structures.",
    resourceTitle: "Python Full Course for Beginners — Programming with Mosh",
    resourceLink: "https://youtu.be/_uQrJ0TkZlc",
    color: "blue",
  },
  {
    id: 2,
    title: "Git & GitHub",
    stage: "Programming",
    icon: GitBranch,
    description: "Master version control for collaborating on projects and managing code history.",
    resourceTitle: "Git and GitHub Complete Course — SuperSimpleDev",
    resourceLink: "https://youtu.be/Ez8F0nW6S-w",
    color: "blue",
  },
  {
    id: 3,
    title: "HTML + CSS",
    stage: "Web Fundamentals",
    icon: Layout,
    description: "Build and style web pages with semantic HTML and modern CSS techniques.",
    resourceTitle: "HTML & CSS Full Course — SuperSimpleDev",
    resourceLink: "https://youtu.be/G3e-cpL7ofc",
    color: "green",
  },
  {
    id: 4,
    title: "JavaScript",
    stage: "Web Fundamentals",
    icon: Terminal,
    description: "Add interactivity to websites with vanilla JavaScript — DOM, async, ES6+.",
    resourceTitle: "JavaScript Full Course — SuperSimpleDev",
    resourceLink: "https://youtu.be/EerdGm-ehJQ",
    color: "green",
  },
  {
    id: 5,
    title: "FastAPI",
    stage: "Backend",
    icon: Terminal,
    description: "Build fast, modern APIs with Python — automatic docs, validation, and async support.",
    resourceTitle: "Python API Development — freeCodeCamp",
    resourceLink: "https://youtu.be/0sOvCWFmrtA",
    color: "orange",
  },
  {
    id: 6,
    title: "Machine Learning Fundamentals",
    stage: "AI Foundations",
    icon: Brain,
    description: "Core ML concepts — supervised/unsupervised learning, evaluation, and model selection.",
    resourceTitle: "ML Full Course — Krish Naik",
    resourceLink: "https://youtube.com/@krishnaik06",
    color: "pink",
  },
  {
    id: 7,
    title: "LangChain",
    stage: "Generative AI",
    icon: Layers,
    description: "Orchestrate LLMs with chains, agents, memory, and tools for complex applications.",
    resourceTitle: "LLM Application Development — freeCodeCamp",
    resourceLink: "https://youtu.be/lG7Uxts9SXs",
    color: "purple",
  },
  {
    id: 8,
    title: "LangGraph",
    stage: "Agentic AI",
    icon: Network,
    description: "Build stateful, multi-step agents with cycles, branching, and human-in-the-loop.",
    resourceTitle: "LangGraph Official Tutorials — LangChain",
    resourceLink: "https://youtube.com/@LangChain",
    color: "purple",
  },
  {
    id: 9,
    title: "RAG (Retrieval Augmented Generation)",
    stage: "Generative AI",
    icon: Bot,
    description: "Ground LLMs in external knowledge — embeddings, vector stores, and retrieval pipelines.",
    resourceTitle: "RAG Tutorial — Krish Naik",
    resourceLink: "https://youtube.com/@krishnaik06",
    color: "purple",
  },
  {
    id: 10,
    title: "AI Agents",
    stage: "Agentic AI",
    icon: Zap,
    description: "Autonomous agents that plan, use tools, and collaborate to solve complex tasks.",
    resourceTitle: "Complete Agentic AI Course — Krish Naik",
    resourceLink: "https://youtu.be/qU3fmid5Jx8",
    color: "red",
  },
  {
    id: 11,
    title: "Final Project",
    stage: "Capstone",
    icon: Trophy,
    description: "Build and deploy a complete AI-powered application from scratch.",
    resourceTitle: "Deploy your capstone project",
    resourceLink: "#",
    color: "yellow",
  },
];

export const stageOrder = [
  "Programming",
  "Web Fundamentals",
  "Backend",
  "AI Foundations",
  "Generative AI",
  "Agentic AI",
  "Capstone",
];

export const stageColors: Record<string, RoadmapColor> = {
  "Programming": "blue",
  "Web Fundamentals": "green",
  "Backend": "orange",
  "AI Foundations": "pink",
  "Generative AI": "purple",
  "Agentic AI": "red",
  "Capstone": "yellow",
};