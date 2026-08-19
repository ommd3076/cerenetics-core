# Cerenetics — Agent Rules

## Commands

- Install dependencies with `npm install`.
- Start local development with `npm run dev`.
- Run lint with `npm run lint`.
- Run TypeScript checking with `npx tsc --noEmit`.
- Run the production build with `npm run build`.
- On Windows PowerShell systems where script execution blocks `npm`, use `npm.cmd` and `npx.cmd` equivalents.

## Architecture

- This is a **Next.js (App Router) + React + TypeScript** app.
- Routes are file-based under `src/app/`: `/`, `/work`, `/approach`, `/future`, and `/contact`.
- Styling uses **Tailwind CSS** with **shadcn/ui** components.
- Design tokens live in `/design-tokens/` as JSON files — colors, typography, spacing.
- Agent skills live in `/.agents/skills/` — three project-specific skills define the design system, brand voice, and component patterns.

## Brand and UI

- Cerenetics is a **premium AI-native product/launch/experience company** — not a generic agency, SaaS, or component-demo site.
- Buttons are pill-shaped; the navbar is a restrained rounded rectangle.
- Do not apply large rounded cards or pill silhouettes indiscriminately.
- Keep Home focused, Work proof-driven and vertically staged, Approach systems/process-oriented, Future the most radiant page, and Contact quiet and functional.

## Motion

- **GSAP** is the primary motion system, with **Lenis** for smooth scrolling and **Framer Motion** for component-level animation.
- Every animation must clean up on unmount and respect `prefers-reduced-motion`.
- Motion is progressive enhancement: substantive content must remain visible if JavaScript or animation initialization fails. No unconditional CSS `opacity: 0`.
- Keep ambient motion selective and page-specific. No constant decorative motion, random blobs, or scroll-jacking.

## Design Foundation

- **Status: PENDING** — Design tokens (colors, typography, spacing) are not yet locked.
- Do NOT build visual components until the design-tokens directory contains confirmed values.
- Structural/layout code may be written; visual styling must wait for token lock.
- See `/.agents/skills/cerenetics-design-system/SKILL.md` for the full token specification.

## Agent Hierarchy

- **Chief of Staff** (Opus) — planning, task breakdown, review. No direct file edits.
- **Directors** (per domain) — receive tasks from Chief of Staff, break into worker tasks.
- **Workers** (Flash tier) — execute scoped build tasks. **Not activated** until design-tokens and component-patterns skills are populated.
