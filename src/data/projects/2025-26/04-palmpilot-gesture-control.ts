// PalmPilot 2.0: Gesture Controlled Automation — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "palmpilot-gesture-control",
  name: "PalmPilot 2.0: Gesture Controlled Automation",
  tagline: "Control your laptop with hand gestures.",
  description: "Control your laptop using hand gestures! This project uses a webcam and computer vision to map real-time gestures to system commands like adjusting volume, switching tabs, or locking the screen.",
  tag: "CV",
  color: "yellow",
  stack: [
    "Python",
    "OpenCV",
    "MediaPipe",
    "PyAutoGUI",
  ],
  details: "Recognize gestures in real time and map them to system commands.",
  difficulty: "Intermediate (computer vision and automation)",
  termLength: "Full academic year (Fall 2025 – Winter 2026)",
  isPast: true,
  year: "2025–26",
  source: "https://github.com/UndergraduateArtificialIntelligenceClub/palm-pilot2.0",
  lead: {
    name: "Aarush Bhat",
    role: "Project Lead",
    github: "https://github.com/aarushb",
  },
  members: [
    "Joel Kamminga",
    "Yingjie Liu",
    "Rehan Shanavas",
    "Judy Zhu",
    "Tina Lin",
  ],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "PalmPilot 2.0 will allow users to control their laptops using hand gestures captured by a webcam. Computer vision models will recognize gestures in real time and map them to system commands such as adjusting volume, switching tabs, or locking the screen.",
      },
      {
        title: "Skills Gained",
        body: `- Python programming and OpenCV basics
- Real-time gesture recognition with MediaPipe or TensorFlow Lite
- Automation with PyAutoGUI
- Building accessibility-focused tools`,
      },
      {
        title: "Technical Details",
        body: `- **Camera Input:** Python with OpenCV
- **Gesture Recognition:** MediaPipe or TensorFlow Lite
- **Command Execution:** PyAutoGUI
- **Version Control:** GitHub`,
      },
    ],
  },
} satisfies Project;
