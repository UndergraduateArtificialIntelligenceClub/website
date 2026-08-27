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
  Trophy,
  Calculator,
  Database,
  Cloud,
  Server,
  Box,
  Cpu,
  FileSearch,
  Boxes,
  Globe,
  Cog,
  ExternalLink,
} from "lucide-react";

export type RoadmapColor =
  | "blue"
  | "green"
  | "orange"
  | "pink"
  | "purple"
  | "red"
  | "yellow"
  | "cyan";

export type RoadmapItem = {
  id: number;
  stage: string;
  topic: string;
  resource: string;
  link: string;
  icon: LucideIcon;
};

export type RoadmapCategory = {
  id: string;
  title: string;
  description: string;
  color: RoadmapColor;
  icon: LucideIcon;
  items: RoadmapItem[];
};

export const roadmapCategories: RoadmapCategory[] = [
  {
    id: "web-dev",
    title: "Programming & Web Dev Foundations",
    description: "Master the core building blocks — from Python to full-stack web development.",
    color: "blue",
    icon: Code,
    items: [
      {
        id: 1,
        stage: "Programming",
        topic: "Python Basics",
        resource: "Python Full Course for Beginners — Programming with Mosh",
        link: "https://youtu.be/_uQrJ0TkZlc",
        icon: Code,
      },
      {
        id: 2,
        stage: "Programming",
        topic: "Git & GitHub",
        resource: "Git and GitHub Complete Course — SuperSimpleDev",
        link: "https://youtu.be/Ez8F0nW6S-w",
        icon: GitBranch,
      },
      {
        id: 3,
        stage: "Web Basics",
        topic: "HTML + CSS",
        resource: "HTML & CSS Full Course — SuperSimpleDev",
        link: "https://youtu.be/G3e-cpL7ofc",
        icon: Layout,
      },
      {
        id: 4,
        stage: "Web Basics",
        topic: "JavaScript",
        resource: "JavaScript Full Course — SuperSimpleDev",
        link: "https://youtu.be/EerdGm-ehJQ",
        icon: Terminal,
      },
      {
        id: 5,
        stage: "Frontend",
        topic: "React",
        resource: "React Tutorial Full Course — SuperSimpleDev",
        link: "https://youtu.be/TtPXvEcE11E",
        icon: Layers,
      },
      {
        id: 6,
        stage: "Frontend",
        topic: "Tailwind CSS",
        resource: "Tailwind CSS Full Course — freeCodeCamp",
        link: "https://youtu.be/ft30zcMlFao",
        icon: Cog,
      },
      {
        id: 7,
        stage: "Backend",
        topic: "FastAPI",
        resource: "Python API Development — freeCodeCamp",
        link: "https://youtu.be/0sOvCWFmrtA",
        icon: Server,
      },
      {
        id: 8,
        stage: "Backend",
        topic: "SQL",
        resource: "SQL Full Course — freeCodeCamp",
        link: "https://youtu.be/HXV3zeQKqGY",
        icon: Database,
      },
      {
        id: 9,
        stage: "Backend",
        topic: "PostgreSQL",
        resource: "PostgreSQL Full Course — freeCodeCamp",
        link: "https://youtu.be/qw--VYLpxG4",
        icon: Database,
      },
    ],
  },
  {
    id: "ai-foundations",
    title: "AI Foundations",
    description: "Build the mathematical and conceptual intuition behind modern AI systems.",
    color: "pink",
    icon: Brain,
    items: [
      {
        id: 10,
        stage: "Mathematics",
        topic: "Linear Algebra Intuition",
        resource: "3Blue1Brown — Essence of Linear Algebra",
        link: "https://youtu.be/fNk_zzaMoSs",
        icon: Calculator,
      },
      {
        id: 11,
        stage: "Mathematics",
        topic: "Neural Networks Intuition",
        resource: "3Blue1Brown — Neural Networks",
        link: "https://youtu.be/aircAruvnKk",
        icon: Brain,
      },
      {
        id: 12,
        stage: "Machine Learning",
        topic: "ML Full Course",
        resource: "Krish Naik Machine Learning Playlist",
        link: "https://youtube.com/@krishnaik06",
        icon: Cpu,
      },
      {
        id: 13,
        stage: "Deep Learning",
        topic: "PyTorch Full Course",
        resource: "freeCodeCamp PyTorch Course",
        link: "https://youtu.be/V_xro1bcAuA",
        icon: Zap,
      },
      {
        id: 14,
        stage: "Deep Learning",
        topic: "Neural Networks Zero to Hero",
        resource: "Andrej Karpathy",
        link: "https://youtube.com/playlist?list=PLp9lK4rLJZ0s9n7TQf8y1Jx5bGZk1jQ8",
        icon: Brain,
      },
    ],
  },
  {
    id: "gen-ai",
    title: "Generative AI",
    description: "Learn how LLMs work under the hood and build real-world generative AI applications.",
    color: "purple",
    icon: Bot,
    items: [
      {
        id: 15,
        stage: "LLM Basics",
        topic: "How ChatGPT Works",
        resource: "Andrej Karpathy — Intro to Large Language Models",
        link: "https://youtu.be/zjkBMFhNj_g",
        icon: Bot,
      },
      {
        id: 16,
        stage: "LLM Engineering",
        topic: "LLM Application Development",
        resource: "LangChain Full Course — freeCodeCamp",
        link: "https://youtu.be/lG7Uxts9SXs",
        icon: Layers,
      },
      {
        id: 17,
        stage: "RAG",
        topic: "Retrieval Augmented Generation",
        resource: "Krish Naik RAG Tutorial",
        link: "https://youtube.com/@krishnaik06",
        icon: FileSearch,
      },
      {
        id: 18,
        stage: "Vector DB",
        topic: "FAISS + Embeddings",
        resource: "Pinecone Learning Videos",
        link: "https://youtube.com/@pinecone_io",
        icon: Database,
      },
    ],
  },
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description: "Build autonomous agents that plan, reason, and use tools to solve complex tasks.",
    color: "red",
    icon: Zap,
    items: [
      {
        id: 19,
        stage: "Agentic AI",
        topic: "Complete Agentic AI Course",
        resource: "Krish Naik — Complete Agentic AI Course",
        link: "https://youtu.be/qU3fmid5Jx8",
        icon: Zap,
      },
      {
        id: 20,
        stage: "Agents",
        topic: "LangGraph",
        resource: "LangChain Official LangGraph Tutorials",
        link: "https://youtube.com/@LangChain",
        icon: Network,
      },
      {
        id: 21,
        stage: "Agents",
        topic: "MCP (Model Context Protocol)",
        resource: "Anthropic MCP Introduction",
        link: "https://youtube.com/@anthropic-ai",
        icon: Globe,
      },
      {
        id: 22,
        stage: "Agents",
        topic: "Multi-Agent Systems",
        resource: "CrewAI Tutorials",
        link: "https://youtube.com/@crewAIInc",
        icon: Boxes,
      },
    ],
  },
  {
    id: "deployment",
    title: "Deployment & Production",
    description: "Take your projects from localhost to production with Docker, Linux, and cloud infrastructure.",
    color: "orange",
    icon: Cloud,
    items: [
      {
        id: 23,
        stage: "Infrastructure",
        topic: "Docker",
        resource: "Docker Full Course — TechWorld with Nana",
        link: "https://youtu.be/3c-iBn73dDE",
        icon: Box,
      },
      {
        id: 24,
        stage: "Infrastructure",
        topic: "Linux",
        resource: "Linux Full Course — freeCodeCamp",
        link: "https://youtu.be/sWbUDq4S6Y8",
        icon: Terminal,
      },
      {
        id: 25,
        stage: "Cloud",
        topic: "Cloud Basics",
        resource: "AWS Cloud Practitioner",
        link: "https://youtu.be/SOTamWNgDKc",
        icon: Cloud,
      },
      {
        id: 26,
        stage: "MLOps",
        topic: "MLOps Basics",
        resource: "Made With ML MLOps Course",
        link: "https://madewithml.com",
        icon: Cog,
      },
    ],
  },
];

export const categoryColorMap: Record<RoadmapColor, { bg: string; text: string; border: string; glow: string }> = {
  blue: {
    bg: "bg-uais-blue/10",
    text: "text-uais-blue",
    border: "border-uais-blue/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  green: {
    bg: "bg-uais-green/10",
    text: "text-uais-green",
    border: "border-uais-green/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  orange: {
    bg: "bg-uais-orange/10",
    text: "text-uais-orange",
    border: "border-uais-orange/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  pink: {
    bg: "bg-uais-pink/10",
    text: "text-uais-pink",
    border: "border-uais-pink/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  purple: {
    bg: "bg-uais-pink/10",
    text: "text-uais-pink",
    border: "border-uais-pink/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  red: {
    bg: "bg-uais-red/10",
    text: "text-uais-red",
    border: "border-uais-red/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  yellow: {
    bg: "bg-uais-yellow/10",
    text: "text-uais-yellow",
    border: "border-uais-yellow/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
  cyan: {
    bg: "bg-uais-blue/10",
    text: "text-uais-blue",
    border: "border-uais-blue/30",
    glow: "shadow-[0_0_20px_-5px]",
  },
};
