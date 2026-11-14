// Wi-Fi Biosensing for Sleep Health Monitoring — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "wifi-biosensing-sleep-health",
  name: "Wi-Fi Biosensing for Sleep Health Monitoring",
  tagline: "Turning ordinary Wi-Fi signals into a contactless sleep sensor.",
  description: "Uses Wi-Fi Channel State Information captured with ESP32 microcontrollers as a contactless biosensor, estimating respiratory patterns, movement, and sleep-related trends with signal processing and ML.",
  tag: "Healthcare",
  color: "pink",
  stack: [
    "ESP32",
    "Python",
    "NumPy",
    "SciPy",
    "Signal Processing",
    "Machine Learning",
  ],
  details: "This project demonstrates how Wi-Fi signals can be used as a contactless biosensor for sleep monitoring. Using ESP32 microcontrollers, the team collects Channel State Information (CSI) and analyzes how breathing, body movement, and changes in position affect the wireless signal. The goal is to build an end-to-end, consumer-friendly minimum viable product that can estimate respiratory patterns, detect movement and rest, and explore broader sleep-related patterns using signal processing and machine learning.",
  difficulty: "Intermediate",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Arhm",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project demonstrates how Wi-Fi signals can be used as a contactless biosensor for sleep monitoring. Using ESP32 microcontrollers, the team collects Channel State Information (CSI) and analyzes how breathing, body movement, and changes in position affect the wireless signal. The goal is to build an end-to-end, consumer-friendly minimum viable product that can estimate respiratory patterns, detect movement and rest, and explore broader sleep-related patterns using signal processing and machine learning.",
      },
      {
        title: "Skills Gained",
        body: `- Hardware prototyping and CSI signal processing
- Python for data analysis, feature extraction, time-series analysis
- Machine learning (supervised, unsupervised, self-supervised)
- Collaborative software and app development
- 3D design & printing`,
      },
      {
        title: "Technical Details",
        body: "Uses ESP32-C5-WROOM-1U modules running ESP-IDF/ESP-CSI to transmit Wi-Fi signals and collect CSI, streamed to a computer and processed in Python with NumPy, Pandas, and SciPy for cleaning, filtering, and feature extraction. The ML pipeline starts with public CSI datasets for baseline models, then adapts to a self-collected dataset across participants, positions, and rooms. If time permits, a consumer-oriented MVP is built with Xcode/React, with 3D printing for the sensing hardware.",
      },
    ],
  },
} satisfies Project;
