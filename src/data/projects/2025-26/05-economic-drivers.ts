// Economic Drivers of Crypto Adoption — project data.
// Auto-collected by src/data/projects/index.ts (newest year folder first,
// then by filename prefix — use 01-, 02- … to control card order).

import type { Project } from "@/data/_types";

export default {
  slug: "economic-drivers",
  name: "Economic Drivers of Crypto Adoption",
  tagline: "Analyzing how macroeconomics impact blockchain trends.",
  description: "This project investigates whether macroeconomic conditions can predict cryptocurrency adoption by building an Economic Anxiety Index and testing its relationship with on-chain metrics.",
  tag: "Data Science",
  color: "red",
  stack: [
    "Python",
    "ARIMA",
    "Prophet",
    "APIs",
  ],
  details: "Explores how macroeconomic stressors like inflation impact cryptocurrency adoption.",
  difficulty: "Beginner (Economics and Data Science)",
  termLength: "Fall 2025 - Winter 2026",
  isPast: true,
  demo: "https://economic-drivers-of-cryptocurrency.vercel.app/",
  year: "2025–26",
  lead: {
    name: "Viktoria Lysenko",
    role: "Project Lead",
    github: "https://github.com/viktorialysenko",
  },
  members: [
    "Amara Zin",
    "Gloria Mathew",
    "Dominik Vrbanek",
    "Raahim Khan",
  ],
  content: {
    type: "sections",
    items: [
      {
        title: "Description",
        body: "This project investigates whether macroeconomic conditions can predict cryptocurrency adoption. We built an Economic Anxiety Index combining inflation expectations, monetary expansion, and recession fears, then tested its relationship with on-chain crypto adoption metrics. Our analysis found a strong correlation (r = 0.67, p < 0.0001), supporting the 'crypto as inflation hedge' narrative with empirical evidence.",
      },
      {
        title: "Skills Gained",
        body: `- Data collection from FRED API and blockchain data providers
- Statistical analysis: correlation, Granger causality, time series validation
- Machine learning comparison: Ridge, Random Forest, XGBoost, LSTM
- Building live dashboards with real-time data updates`,
      },
      {
        title: "Technical Details",
        body: `- **Data Analysis:** Python (pandas, scikit-learn, statsmodels)
- **Visualization:** Matplotlib, Seaborn, Recharts
- **Dashboard:** Next.js + Vercel with live FRED data integration`,
      },
    ],
  },
} satisfies Project;
