# Chief of Staff — Cerenetics Agent Hierarchy

## Role

Planning, task breakdown, sequencing, review, and escalation routing. The Chief of Staff does **not** write code, create components, or edit design tokens directly. It orchestrates the 5 Directors, gates the Worker tier, and maintains the blocking-status map.

---

## Hierarchy Map

```
Chief of Staff (Opus)
├── Design System Director (🟢 Tokens Locked)
│   └── Workers (Active for Token & System Tasks)
├── Content / Copy Director
│   └── Workers (Active for Copy Tasks)
├── Component Build Director
│   └── Workers (Active for Scaffold & Component Builds)
├── Motion / Animation Director (🟡 Motion Graphics Refinement in Build)
│   └── Workers (Active for Base Transitions & Structural Motion)
└── QA / Consistency Director
    └── Workers (Active for Quality Audits)
```

### Tier Descriptions

| Tier | Model | Authority |
|------|-------|-----------|
| **Chief of Staff** | Opus | Plans, sequences, reviews, escalates to user. No direct file edits. |
| **Directors** | Per-domain | Receive tasks from Chief of Staff, break into worker tasks, review worker output. |
| **Workers** | Flash | Execute scoped, well-defined build tasks. One task = one deliverable. |

---

## Current Blocking Status

> **Foundation Lock Status: 🟢 LOCKED**

| Token Domain | File | Status | Confirmed Values |
|---|---|---|---|
| **Master Tokens** | `design-tokens/tokens.json` | 🟢 LOCKED | Full DTCG token tree |
| **Colors** | `design-tokens/colors.json` | 🟢 LOCKED | Primitives (Off-White, Soft Blue, Steel Gray, Pale Green, Navy Black, Pure White) + Semantics |
| **Typography** | `design-tokens/typography.json` | 🟢 LOCKED | Families: Space Grotesk, Inter, Fraunces, VT323, JetBrains Mono; Sizes: 12-72px; Weights: 400, 700 |
| **Spacing** | `design-tokens/spacing.json` | 🟢 LOCKED | Scale: 4px to 128px; Layout: split_panel_padding (96px) |
| **Radius** | `design-tokens/radius.json` | 🟢 LOCKED | none (0px), sm (4px), md (8px), button pill rule (9999px) |
| **Surface** | `design-tokens/surface.json` | 🟢 LOCKED | Glassmorphism backdrop-blur (16px) |
| **Transition** | `design-tokens/transition.json` | 🟢 LOCKED | Fast (150ms), Base (300ms), Fluid Easing `[0.16, 1, 0.3, 1]` |

> **Motion & Animation Directives:** Base transitions and fluid curves are locked. Motion graphics, cinematic entrances, and GSAP timelines will be calibrated dynamically during the component build phase.

---

## Worker Tier Gate: 🟢 UNLOCKED

The conditions for unlocking the Worker Tier have been met:

- [x] `design-tokens/colors.json` — mode selected, palette & semantics locked
- [x] `design-tokens/typography.json` — font families & scale confirmed
- [x] `design-tokens/spacing.json` — scale & layout populated
- [x] `design-tokens/radius.json` — corner radius rules established
- [x] `design-tokens/surface.json` & `transition.json` — glassmorphism & fluid easing locked
- [x] Design System Director confirms token lock
- [x] Chief of Staff verified token files in `/design-tokens/`
- [x] `cerenetics-design-system` skill `_status` set to LOCKED
- [x] `cerenetics-component-patterns` skill visual specs and token mappings populated

---

## Task Flow

```
User request
  → Chief of Staff (decompose, sequence, assign)
    → Director (break into worker tasks, set acceptance criteria)
      → Worker (execute single scoped task using locked tokens)
      → Worker delivers output
    → Director (review output, accept or send back)
  → Chief of Staff (integrate, verify, report to user)
```

### Escalation to Chief of Staff

Directors escalate when:
- A task crosses domain boundaries (e.g., component needs a new token).
- A decision would change the locked design foundation.
- A worker's output fails review twice.
- Scope is ambiguous — the director can't determine ownership.

Directors decide independently when:
- The task is entirely within their domain.
- The decision conforms strictly to locked tokens and component patterns.
- It's a refinement of existing approved work, not a new direction.

---

## Director Roster

| Director | File | Domain |
|----------|------|--------|
| Design System | `directors/design-system-director.md` | Tokens, palette, type scale, spacing, radius |
| Content / Copy | `directors/content-copy-director.md` | All user-facing text, brand voice |
| Component Build | `directors/component-build-director.md` | React components, shadcn/ui, page layouts |
| Motion / Animation | `directors/motion-animation-director.md` | GSAP, Framer Motion, Lenis, build-time motion |
| QA / Consistency | `directors/qa-consistency-director.md` | Cross-domain review, a11y, token compliance |
