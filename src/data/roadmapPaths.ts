export const desktopRoadPath =
  "M 60 320 " +
  "C 200 200, 400 200, 540 320 " +
  "C 680 440, 880 440, 1020 320 " +
  "C 1160 200, 1360 200, 1500 320 " +
  "C 1640 440, 1840 440, 1980 320";

export const desktopMilestonePositions = [
  { progress: 0.055, offsetY: -140, side: "top" },    // 1. Python Basics
  { progress: 0.125, offsetY: -160, side: "top" },    // 2. Git & GitHub
  { progress: 0.22, offsetY: 140, side: "bottom" },   // 3. HTML + CSS
  { progress: 0.3, offsetY: 160, side: "bottom" },    // 4. JavaScript
  { progress: 0.395, offsetY: -140, side: "top" },    // 5. FastAPI
  { progress: 0.49, offsetY: -160, side: "top" },     // 6. ML Fundamentals
  { progress: 0.58, offsetY: 140, side: "bottom" },   // 7. LangChain
  { progress: 0.67, offsetY: 160, side: "bottom" },   // 8. LangGraph
  { progress: 0.76, offsetY: -140, side: "top" },     // 9. RAG
  { progress: 0.85, offsetY: -160, side: "top" },     // 10. AI Agents
  { progress: 0.95, offsetY: 140, side: "bottom" },   // 11. Final Project
];

export const mobileRoadPath =
  "M 180 60 " +
  "C 80 180, 80 320, 180 440 " +
  "C 280 560, 280 700, 180 820 " +
  "C 80 940, 80 1080, 180 1200 " +
  "C 280 1320, 280 1460, 180 1580";

export const mobileMilestonePositions = [
  { progress: 0.045, offsetX: -140, side: "left" },   // 1. Python Basics
  { progress: 0.12, offsetX: 140, side: "right" },    // 2. Git & GitHub
  { progress: 0.2, offsetX: -140, side: "left" },     // 3. HTML + CSS
  { progress: 0.275, offsetX: 140, side: "right" },   // 4. JavaScript
  { progress: 0.355, offsetX: -140, side: "left" },   // 5. FastAPI
  { progress: 0.435, offsetX: 140, side: "right" },   // 6. ML Fundamentals
  { progress: 0.515, offsetX: -140, side: "left" },   // 7. LangChain
  { progress: 0.595, offsetX: 140, side: "right" },   // 8. LangGraph
  { progress: 0.675, offsetX: -140, side: "left" },   // 9. RAG
  { progress: 0.755, offsetX: 140, side: "right" },   // 10. AI Agents
  { progress: 0.9, offsetX: 0, side: "center" },      // 11. Final Project
];

export const desktopRoadWidth = 2100;
export const desktopRoadHeight = 500;
export const mobileRoadWidth = 360;
export const mobileRoadHeight = 1700;