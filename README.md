# Portfolio — Andres Escala

Personal engineering portfolio for **Andres Escala — Software Engineer & Technical Consultant**.

Production URL: <https://escalandres-portfolio.vercel.app/>

## Stack

- [Astro 4](https://astro.build) + TypeScript
- [Tailwind CSS 3](https://tailwindcss.com) with the centralized **AES Studio** design token system (`src/styles/global.css` + `tailwind.config.mjs`)
- Typography: Space Grotesk (display), Inter (body), JetBrains Mono (technical labels)

## Commands

```bash
npm run dev    # start dev server
npm run build  # astro check + production build
npm run preview
```

## Structure

```
src/
  components/   # reusable UI components (Hero, Overview, Experience, Projects, Expertise, Education, Contact, Footer, UI)
  content/      # i18n content dictionaries (en, es)
  data/         # static typed content (projects, experience, expertise, education)
  i18n/         # locale routing helpers and dictionaries
  layouts/      # global Layout (SEO head, fonts, tokens)
  pages/        # routes: /en, /es, /en/projects/[slug], /es/proyectos/[slug]
  styles/       # global design tokens and base styles
public/         # static assets (favicon, photos, CVs, robots.txt, sitemap.xml)
```

## Routes

- `/en` — English portfolio (default locale)
- `/es` — Spanish portfolio
- `/en/projects/finova` — project detail (English)
- `/es/proyectos/finova` — project detail (Spanish)

## Deployment

Vercel (Astro Vercel adapter). The production build output is generated with:

```bash
npm run build
```

Deploy with the Vercel CLI or connect the repository at <https://vercel.com/new>.
