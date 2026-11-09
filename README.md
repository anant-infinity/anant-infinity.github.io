# Anant Telikicherla — academic site

Astro + TypeScript + Tailwind static site for GitHub Pages (`https://anant-infinity.github.io`).

## Run locally

```bash
npm install
npm run dev
npm run build
npm run preview
```

GitHub Pages production build:

```bash
SITE_URL=https://anant-infinity.github.io BASE_PATH=/ npm run build
```

## Edit content

| What | Path |
|------|------|
| Profile, bio, links, CV flags | `src/data/profile.ts` |
| Research projects | `src/content/research/` |
| Publications | `src/content/publications/publications.json` |
| News | `src/content/news/` |
| CV PDF | `public/cv/anant-telikicherla-cv.pdf` then `cv.available = true` |
| Images / OG | `public/images/` |
| Site URL / base | `SITE_URL`, `BASE_PATH`, or `astro.config.mjs` |

## Deploy

Push to `main` or `master` runs `.github/workflows/deploy.yml`.

Repo **Settings → Pages → Source: GitHub Actions**.

Optional repository Variables: `SITE_URL`, `BASE_PATH` (workflow auto-detects user vs project site).
