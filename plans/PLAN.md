# Plan de Acción — Portfolio Redesign (Andres Escala)

Rediseño del portafolio personal existente (Astro + Tailwind + Vercel) hacia una arquitectura moderna, profesional e internacional para recruiters.

| Feature | Estado | Fecha |
|---|---|---|
| 1. Repository and Design Audit (Milestone 1) | ✅ Completado | 2026-11-15 |
| 2. Design System and Layout (tokens, typography, global layout) (Milestone 2) | ✅ Completado | 2026-11-15 |
| 3. Main Portfolio Sections (Hero, Overview, Experience, Projects, Expertise, Certifications/Education, Contact, Footer) (Milestone 3) | ✅ Completado | 2026-11-15 |
| 4. Project Pages and Internationalization (Milestone 4) | ✅ Completado | 2026-11-15 |
| 5. Quality Assurance and Deployment (Milestone 5) | ✅ Completado | 2026-11-16 |

## Notas del plan

- Se conserva el stack existente (Astro 4 + Tailwind CSS + Vercel adapter); no se migra a React/Vite (decisión tomada en Milestone 1).
- Paleta: tokens AES Studio extraídos de `aes-studio/homepage-design.md` (`--primary-blue`, `--secondary-blue`, `--blue-light`, `--blue-very-light`, `--success-green`, `--error-red`, `--warning-amber`, `--purple-accent`, `--gray-*`, `--aes-*`) más semánticos derivados (`--bg`, `--surface`, `--ink`, etc.) en `src/styles/global.css`.
- i18n: rutas por archivo (`/en`, `/es`, `/en/projects/[slug]`, `/es/proyectos/[slug]`); inglés por defecto; selector de idioma preserva ruta actual.
- Contenido pendiente de confirmación del usuario: fechas exactas de certificaciones, URLs de credenciales, enlaces demo/GitHub de Finova/KeyForge/ProfileCraft/Chasqui, y contenido detallado de los proyectos nuevos.
