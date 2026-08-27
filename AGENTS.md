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
- Design tokens live in `/design-tokens/` as JSON files — colors, typography, spacing, radius, surface, transition.
- Agent hierarchy lives in `/.agents/` — Chief of Staff, 5 domain Directors, Workers, and Skills.

## Brand and UI

- Cerenetics is a **premium AI-native product/launch/experience company** — not a generic agency, SaaS, or component-demo site.
- Palette: Off-White (`#eff2f3`), Soft Blue (`#ebecff`), Steel Gray (`#a3b4bc`), Pale Green (`#d2fbd0`), Navy Black (`#0A1128`), Pure White (`#ffffff`).
- Typography: Space Grotesk (headings), Inter (body), Fraunces (accent italic), VT323 (pixel), JetBrains Mono (data/code).
- Buttons are pill-shaped (`rounded-full`); the navbar is a restrained rounded rectangle (`rounded-md`).
- Do not apply large rounded cards or pill silhouettes indiscriminately.
- Keep Home focused, Work proof-driven and vertically staged, Approach systems/process-oriented, Future the most radiant page, and Contact quiet and functional.

## Motion

- Base transition duration: `150ms` (fast) / `300ms` (base) with fluid cubic bezier `[0.16, 1, 0.3, 1]`.
- Complex motion graphics, GSAP ScrollTrigger timelines, and radiant interactive moments will be tailored per page during active component building.
- Every animation must clean up on unmount and respect `prefers-reduced-motion`.
- Motion is progressive enhancement: substantive content must remain visible if JavaScript or animation initialization fails. No unconditional CSS `opacity: 0`.

## Design Foundation

- **Status: 🟢 LOCKED** — Canonical design tokens are locked in `/design-tokens/tokens.json` and documented in `/.agents/skills/cerenetics-design-system/SKILL.md`.
- All visual components MUST consume token values via Tailwind theme variables or CSS custom properties.

## Agent Hierarchy

- **Chief of Staff** (Opus) — planning, task breakdown, review, orchestration.
- **Directors** (5 domains: Design System, Content/Copy, Component Build, Motion/Animation, QA/Consistency) — receive tasks from Chief of Staff, break into worker tasks.
- **Workers** (Flash tier) — execute scoped build tasks against locked design tokens.
