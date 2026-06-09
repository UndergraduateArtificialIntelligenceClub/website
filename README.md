# UAIS Website

Built with React + Vite + TypeScript + Tailwind.

**Maintainers:** start with [`docs/README.md`](./docs/README.md). Almost every content
update (team, hackathons, projects, interviews, constitution) is a one-file edit
in `src/data/`.

## Run locally

```sh
npm install
npm run dev
```

## Project structure

```
src/
├── assets/             logo + images
├── components/site/    shared site components (see src/components/site/README.md)
├── components/ui/      shadcn UI primitives
├── data/               all site content (see src/data/README.md)
├── pages/              one file per route
└── index.css           global styles + brand tokens

docs/
├── README.md           maintainer guide
└── design-system.md    colors, typography, animations
```
