// PulseFlux: rPPG for Contactless Vital Sign Monitoring — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "../../_types";

export default {
  slug: "pulseflux",
  name: "PulseFlux: rPPG for Contactless Vital Sign Monitoring",
  tagline: "Reading your heart rate from an ordinary webcam.",
  description: "A web platform using webcam-based remote photoplethysmography (rPPG) and computer vision to estimate heart rate, HRV, and respiratory rate, visualized through a live dashboard.",
  tag: "CV",
  color: "green",
  stack: [
    "OpenCV",
    "MediaPipe",
    "PyTorch",
    "FastAPI",
    "WebSocket",
    "React",
  ],
  details: "This project explores remote photoplethysmography (rPPG), a computer vision technique to read heart rate variability (HRV) and respiration rate from just an ordinary webcam video, by detecting tiny color changes in facial skin invisible to the human eye. No wearable or contact sensor is required. The team builds a real-time processing pipeline, compares a classical signal-processing algorithm against a fine-tuned deep learning model, validates accuracy against an Apple Watch as ground truth, and ships the whole thing as a deployed full-stack web app with a live dashboard. Extracted HRV features can also feed a pretrained classifier to track stress and well-being trends over time.",
  difficulty: "Intermediate",
  termLength: "Full academic year (Fall 2026 – Winter 2027)",
  isPast: false,
  // TODO: swap in actual lead links (linkedin/github) once known.
  lead: {
    name: "Khoi & Rie",
    role: "Project Lead",
  },
  members: [],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project explores remote photoplethysmography (rPPG), a computer vision technique to read heart rate variability (HRV) and respiration rate from just an ordinary webcam video, by detecting tiny color changes in facial skin invisible to the human eye. No wearable or contact sensor is required. The team builds a real-time processing pipeline, compares a classical signal-processing algorithm against a fine-tuned deep learning model, validates accuracy against an Apple Watch as ground truth, and ships the whole thing as a deployed full-stack web app with a live dashboard. Extracted HRV features can also feed a pretrained classifier to track stress and well-being trends over time.",
      },
      {
        title: "Skills Gained",
        body: `- Computer vision fundamentals (face detection, ROI tracking) with OpenCV and MediaPipe
- Signal processing (filtering, Fourier analysis) on real physiological signals
- Fine-tuning and evaluating pretrained deep learning models in PyTorch
- Backend development with FastAPI and real-time WebSocket streaming
- Frontend dashboard development with React
- Database design for time-series health data
- Deployment: Docker, CI/CD, cloud hosting
- Benchmarking against ground truth and fairness/bias evaluation`,
      },
      {
        title: "Technical Details",
        body: "Pipeline: webcam to face/ROI detection (MediaPipe) to signal extraction to filtering & FFT to heart rate, HRV, and respiration rate. Compares a fast, training-free classical algorithm (CHROM/POS) as the live baseline against a pretrained deep learning model (rPPG-Toolbox) as an accuracy benchmark. Uses UBFC-rPPG for training/evaluation and VitalVideo (six skin tones) to check accuracy across skin tones, validated against an Apple Watch. Stack: React + FastAPI + database, containerized and deployed with CI/CD.",
      },
    ],
  },
} satisfies Project;
