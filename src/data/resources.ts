import type { Color } from "./colors";

export type ResourceLink = {
  title: string;
  link: string;
  desc?: string;
};

export type ResourceSection = {
  title: string;
  color: Color;
  items: ResourceLink[];
};

export const ualbertaCourses = [
  { name: "Introduction to Data Science", number: "CMPUT 191" },
  { name: "Principles of Data Science", number: "CMPUT 195" },
  { name: "Ethics of Data Science & AI", number: "CMPUT 200" },
  { name: "Game Artificial Intelligence", number: "CMPUT 256" },
  { name: "Introduction to AI", number: "CMPUT 261" },
  { name: "Basics of Machine Learning", number: "CMPUT 267" },
  { name: "Games, Puzzles, Algorithms", number: "CMPUT 355" },
  { name: "Introduction to RL", number: "CMPUT 365" },
  { name: "Search and Planning in AI", number: "CMPUT 366" },
  { name: "Intermediate Machine Learning", number: "CMPUT 367" },
  { name: "Search, Knowledge and Simulation", number: "CMPUT 455" },
  { name: "Machine Learning", number: "CMPUT 466" },
  { name: "AI Capstone", number: "CMPUT 469" },
  { name: "Probabilistic Graphical Models", number: "CMPUT 463" },
  { name: "Natural Language Processing", number: "CMPUT 461" },
  { name: "Visual Recognition", number: "CMPUT 328" },
  { name: "Computer Vision", number: "CMPUT 428" },
  { name: "Ethics and AI", number: "PHIL 385" },
  { name: "Statistical Methods for ML", number: "STAT 441" },
];

export const externalResources: ResourceSection[] = [
  {
    title: "Foundational Lectures",
    color: "blue",
    items: [
      {
        title: "Machine Learning by Andrew Ng",
        link: "https://www.youtube.com/watch?v=jGwO_UgTS7I&list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU",
        desc: "The gold standard for beginners. Covers the math and intuition behind linear regression, kernels, and neural nets."
      },
      {
        title: "Neural Networks: Zero to Hero",
        link: "https://www.youtube.com/watch?v=VMj-3S1tku0&list=PLAqhIrjkxbuWI23v9cThsA9GvCAUhRvKZ",
        desc: "Andrej Karpathy's masterclass on building GPT from scratch. Essential for understanding modern LLMs."
      },
      {
        title: "Elements of AI",
        link: "https://course.elementsofai.com/",
        desc: "A high-level, accessible introduction to AI concepts for non-technical backgrounds."
      }
    ]
  },
  {
    title: "Specialized Tracks",
    color: "green",
    items: [
      {
        title: "Reinforcement Learning (David Silver)",
        link: "https://www.youtube.com/playlist?list=PLqYmG7hTraZDM-OYHWgPebj2MfCFzFObQ",
        desc: "DeepMind's lead researcher walks through the Sutton & Barto curriculum."
      },
      {
        title: "DL & RL Summer School",
        link: "http://videolectures.net/DLRLsummerschool2018_toronto/",
        desc: "Lecture series from CIFAR, Amii, and the Vector Institute covering advanced research topics."
      }
    ]
  },
  {
    title: "UAIS Workshops",
    color: "orange",
    items: [
      {
        title: "Intro to Git & GitHub",
        link: "https://drive.google.com/file/d/1UxRn2q6k_dKcgBr6sLpX2azuwcA9qwvm/view?usp=sharing",
        desc: "Master version control for collaborating on club projects."
      },
      {
        title: "Data Cleaning Workshop",
        link: "https://colab.research.google.com/drive/1nqyQoPrI4j5zNk1wZDOHWn9igIgSeIZj",
        desc: "Hands-on Pandas and Matplotlib tutorial by Jacob Winch."
      },
      {
        title: "scikit-learn Workshop",
        link: "https://colab.research.google.com/drive/1t86MEw9lGtnNGfLHsroqkqS-q332PWK7?usp=sharing",
        desc: "Practical ML implementation guide by Taran Purewal."
      },
      {
        title: "Python Environments",
        link: "https://www.youtube.com/watch?v=spfOM0EMj78",
        desc: "Avoid dependency hell with this guide to Conda and Venv."
      }
    ]
  }
];
