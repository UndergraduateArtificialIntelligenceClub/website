// Multi Agent Soccer AI — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "multi-agent-soccer-ai",
  name: "Multi Agent Soccer AI",
  tagline: "From predator-prey chases to a live 2v2 soccer match.",
  description: "Trains autonomous AI agents through Multi-Agent Reinforcement Learning, starting with simple predator-prey chases and culminating in a live 2v2 soccer tournament using Unity ML-Agents.",
  tag: "RL",
  color: "orange",
  stack: [
    "Python",
    "PyTorch",
    "PettingZoo",
    "Stable-Baselines3",
    "Unity ML-Agents",
    "Weights & Biases",
  ],
  details: "This project introduces team members to Multi-Agent Reinforcement Learning (MARL) by training autonomous AI agents to master competitive and cooperative environments. Starting with a simple predator-prey setup, the project culminates in a live 2v2 soccer tournament game using Unity ML-Agents. The system has to learn good behavior purely through trial and error, guided by a reward signal. The environment is non-stationary, meaning agents must adapt their behaviour as teammates and opponents learn as well.",
  difficulty: "Beginner-Intermediate",
  termLength: "6 months (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Dominik Vrbanek",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project introduces team members to Multi-Agent Reinforcement Learning (MARL) by training autonomous AI agents to master competitive and cooperative environments. Starting with a simple predator-prey setup, the project culminates in a live 2v2 soccer tournament game using Unity ML-Agents. The system has to learn good behavior purely through trial and error, guided by a reward signal. The environment is non-stationary, meaning agents must adapt their behaviour as teammates and opponents learn as well.",
      },
      {
        title: "Skills Gained",
        body: `- Reward shaping for reinforcement learning
- Self-play algorithms and training strategies
- Experiment tracking with industry-standard RL tools
- No prior RL experience required`,
      },
      {
        title: "Technical Details",
        body: "Uses Python, PyTorch, PettingZoo, Stable-Baselines3, Weights & Biases, and Unity ML-Agents.",
      },
    ],
  },
} satisfies Project;
