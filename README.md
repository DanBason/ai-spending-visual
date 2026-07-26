# The Great AI Buildout

An interactive data-story dashboard on the scale of hyperscaler AI infrastructure spending
and the bubble debate around it. Built with Vite, React 18, TypeScript, Tailwind CSS v4,
Recharts, and Framer Motion. No backend — all data lives in `src/data/*.ts`.

## Setup

```bash
npm install
```

## Develop

```bash
npm run dev
```

## Build

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with:

```bash
npm run preview
```

## Deploy to GitHub Pages

The Vite `base` is set to `/ai-buildout/` by default in `vite.config.ts`, matching a GitHub
Pages project site at `https://<username>.github.io/ai-buildout/`. Adjust the repo name in
`base` if your repository is named differently, or override it at build time:

```bash
VITE_BASE=/your-repo-name/ npm run build
```

Then push the contents of `dist/` to a `gh-pages` branch (or use the `gh-pages` npm package,
or a GitHub Actions workflow that runs `npm run build` and publishes `dist/`).

## Deploy to Vercel

Vercel serves from the domain root, so set `base` to `/`:

```bash
VITE_BASE=/ npm run build
```

Or configure `VITE_BASE=/` as a Vercel project environment variable and use the default
build command (`npm run build`) with output directory `dist`.

## Data

- `src/data/capex.ts` — hyperscaler capex by company and year, plus perspective facts for the hero
- `src/data/megaprojects.ts` — historical megaproject spending comparison
- `src/data/concentration.ts` — Magnificent 7 share of S&P 500 by year
- `src/data/debate.ts` — bull/bear case evidence

All figures are compiled July 2026 from public filings and financial press; see the in-page
methodology note for caveats on 2026 guidance figures and fiscal/calendar-year conventions.
