# Cerenetics Website — Visual Contract & Implementation Plan

> **Visual reset notice (latest user direction):** The visual portions of this document are superseded by `CERENETICS-VISUAL-RESET-PLAN.md`. In particular, do not follow the earlier bold-heading, atmospheric-gradient, broad-glass, substitute-logo, or repeated-italic directions. Keep this file only for route, content, architecture, accessibility, and integration context where it does not conflict with the reset plan.

**Status:** Approved implementation handoff

**Audience:** Antigravity Chief of Staff, Directors, and Workers

**Project:** Next.js App Router + TypeScript + Tailwind v4 + shadcn/ui + GSAP + Framer Motion + Lenis

**V1 routes:** `/`, `/work`, `/approach`, `/future`, `/contact`, `/privacy`

This document is the execution source of truth for the Cerenetics V1 website. It combines the finalized information architecture with a visual contract derived from the locked Cerenetics design system and the two approved references:

- [Axiom / Cloud Observability landing page](https://dribbble.com/shots/27361530-Cloud-Observability-Platform-SaaS-Landing-Page-Design): split-screen hierarchy, editorial typography, negative space, atmospheric visual anchor, restrained glass overlays.
- [Architech logo animation by Vivid Motion](https://dribbble.com/shots/26164315-Architech-Logo-Animation): identity-first motion, precise construction, controlled reveal, and a polished resting loop.

The references are direction, not templates. Do not copy their logo, copy, colors, imagery, UI cards, timing, or composition pixel-for-pixel. The result must be recognizably Cerenetics.

---

## 1. Source-of-Truth Priority

If instructions conflict, use this order:

1. `AGENTS.md`
2. `design-tokens/tokens.json` and the individual token JSON files
3. `.agents/skills/cerenetics-design-system/SKILL.md`
4. `.agents/skills/cerenetics-component-patterns/SKILL.md`
5. `.agents/skills/cerenetics-voice/SKILL.md`
6. This implementation plan
7. External visual references

Never silently change a locked primitive token. New semantic/composition tokens may be added only when they derive from the existing palette and are reviewed by the Design System Director.

---

## 2. Design-System Review

### Verdict

The existing foundation is directionally correct and well matched to the references:

- Off-white and soft blue provide the quiet light-mode canvas.
- Navy-black gives the typography and identity enough authority.
- Space Grotesk + Fraunces provides the same modern/editorial tension that makes the landing-page reference feel premium.
- VT323 and JetBrains Mono can supply the reference's retro-technical detail without turning the site into a dashboard.
- Restrained 8px corners, pill CTAs, and 16px glass blur fit the intended aesthetic.
- The spacing scale is sufficient for a generous split hero and editorial sections.

The primitives should remain locked. Four implementation gaps must be resolved before page styling:

1. `text.secondary` (`#a3b4bc`) has only approximately **1.90:1** contrast on the off-white canvas. It is suitable for borders, decoration, or large nonessential display detail, but not normal body copy.
2. The base white glass at 10% opacity is too weak when placed directly on the light canvas. It needs stronger semantic variants for navigation and atmospheric overlays.
3. No elevation, atmospheric-gradient, container, line-height, or section-width contract currently exists. Without these, workers will invent inconsistent values.
4. The current typography sizes are usable but require an explicit responsive mapping. Do not introduce arbitrary intermediate sizes in components.

### Required Semantic Additions

Add these as derived semantic/composition tokens before building visual components. Keep raw values inside token/CSS-foundation files only; components consume aliases.

| Token intent | Required value/derivation | Usage |
|---|---|---|
| `text.muted` | Navy-black composited at 60% over the current canvas, or an equivalent token with at least 4.5:1 contrast | Secondary body copy, form help, accordion summaries |
| `text.decorative` | Existing steel gray | Oversized numerals, rules, disabled decoration; never essential normal-size text |
| `surface.glass.nav` | Pure white at approximately 70–75% alpha + 16px blur | Floating navbar over mixed backgrounds |
| `surface.glass.hero` | Pure white at approximately 35–45% alpha + 16px blur | Small hero annotations only |
| `border.glass.strong` | Pure white at approximately 55–65% alpha | Specular edge on hero glass |
| `shadow.nav` | Soft navy-black shadow at roughly 8% alpha, large blur, no hard edge | Floating navigation |
| `shadow.float` | Soft navy-black shadow at roughly 10–12% alpha | Hero annotation cards only |
| `gradient.hero.field` | Soft blue base, pure-white light bloom, pale-green peripheral glow | Right hero atmosphere |
| `gradient.future.field` | A brighter variant using the same primitives | `/future` only |
| `layout.container` | Maximum content width 1440px with token-based side gutters | Global shell |
| `layout.measure.prose` | Approximately 60–68 characters | Body copy |
| `leading.display` | 0.94–1.0 | Large hero type |
| `leading.heading` | 1.05–1.15 | Section headings |
| `leading.body` | 1.55–1.7 | Paragraphs |

Do not add a saturated electric blue merely to imitate the reference. Its visual depth must be translated through layering, blur, translucency, light, and motion using Cerenetics' existing palette.

### Color-Balance Contract

- 60–70%: off-white/pure-white canvas and negative space.
- 20–30%: soft-blue atmospheric fields and panels.
- 5–8%: pale-green light or small emphasis moments.
- Navy-black: typography, logomark, dividers, and CTAs; never a dominant full-page background in V1.
- Steel gray: structural and decorative use only.
- No rainbow gradients, neon cyan, purple AI glows, black SaaS-dashboard sections, or generic mesh gradients.

### Typography Contract

| Context | Mobile | Tablet/Desktop | Rules |
|---|---|---|---|
| Hero H1 | `h2` token (48px) | `h1` token (72px) | Space Grotesk 700; 5–8-word hook; tight leading |
| Hero accent | Inherits hero size | Inherits hero size | Fraunces italic; one phrase only, never every line |
| Section H2 | `h3` token (24px) where space is constrained | `h2` token (48px) | Space Grotesk 700 |
| Card/accordion title | `h3` token (24px) | `h3` token (24px) | Avoid oversized card headings |
| Body | `base` token (16px) | `base` token (16px) | Inter; readable measure; use accessible muted token |
| Eyebrow | `micro` token (12px) | `micro` token (12px) | Uppercase Space Grotesk, 1.5px tracking |
| Data detail | 12–16px | 12–16px | JetBrains Mono only for genuine metadata/data |
| Pixel accent | 16–24px | 16–24px | VT323 used sparingly; never paragraph copy |

Avoid mixing more than three type families in one viewport. The preferred combination is Space Grotesk + Inter + one restrained Fraunces accent. VT323 or JetBrains Mono may appear as a fourth family only in a tiny label, never as a competing headline.

### Layout and Geometry Contract

- Global desktop container: maximum 1440px.
- Desktop side gutters: 48–64px; use 96px only inside the hero's large split-panel composition.
- Tablet gutters: 32px.
- Mobile gutters: 24px.
- Section spacing: 96–128px desktop, 64–96px tablet, 48–64px mobile.
- Cards and panels: 8px radius.
- Small tags/tooltips: 4px radius.
- Buttons: full pill only.
- Do not turn sections, cards, images, navigation, and tags into one repeated family of rounded pills.
- Use thin structural rules and negative space to create hierarchy before adding cards.

---

## 3. Global Experience Contract

### Navigation

- Floating rounded-rectangle navbar, positioned within the global container.
- Desktop: logo/wordmark left, page links centered/right, compact Contact CTA at the edge.
- Mobile: logo, Contact shortcut, and accessible menu trigger.
- Use the stronger navigation glass token so the navbar remains visible across off-white and atmospheric sections.
- Navbar movement may ease slightly on initial entrance; it must not constantly hide/reappear or chase the scroll position.
- Current-page state must be visually and programmatically identifiable.

### Buttons and Links

- Primary CTA: navy-black background, white label, pill shape, minimum 44px height.
- Secondary CTA: quiet text link or soft-blue button; do not create two equally loud pills.
- Hover: 150ms fluid transition, subtle 1.01–1.02 scale maximum.
- Focus: explicit visible ring with sufficient contrast.
- Avoid magnetic cursors, custom pointer replacement, and novelty hover distortion.

### Cards and Glass

- Glass is an accent surface, not the universal container style.
- The hero may contain no more than two small glass annotations at once.
- Work accordions use solid/light structural surfaces, not glass.
- Use shadows only on floating elements; content cards should rely primarily on border, spacing, and color separation.

### Imagery

- No generic robots, brains, circuit boards, stock-office photographs, glowing AI orbs, node networks, or dashboard mockups without a real product.
- The hero's visual anchor is the Cerenetics mark itself inside an abstract material-light field.
- If later imagery is added, it must show real work, a real artifact, or a designed material phenomenon—not decorative AI symbolism.

---

## 4. Home Page Contract

### First View / Hero

**Purpose:** Establish Cerenetics as a precise, future-facing engineering identity before explaining domains or services.

**Desktop composition:**

- Minimum height: 100svh.
- Asymmetrical split: approximately 46% copy / 54% motion field.
- Left panel: off-white or pure-white editorial zone.
- Right panel: soft-blue atmospheric field with pale-green peripheral light and the animated navy logomark.
- Navbar visually bridges both halves.
- Copy aligns to a strong left grid; the mark is centered optically rather than mathematically.
- The boundary between panels may be sharp or softly feathered, but must not become a rounded-card silhouette.

**Left-panel order:**

1. Small eyebrow: identity/category, not a claim.
2. Five-to-eight-word hero headline.
3. At most one Fraunces italic phrase inside the headline.
4. One concise supporting paragraph, maximum two lines on desktop.
5. Primary CTA: **Explore Work**.
6. Secondary CTA: **Start a conversation**.
7. One quiet micro-label or availability note if copy is approved.

Do not put healthcare, SMB, India, pricing, AI hype, social-proof logos, or a detailed service list in the first viewport.

### Vivid-Motion-Inspired Logo Sequence

The animation must be built from the final Cerenetics SVG. Do not animate a rasterized logo and do not recreate Vivid Motion's asset.

**Sequence:**

1. **Atmosphere wake (0–350ms):** the material field moves from near-static to a soft directional light. Content is already visible; no blank loading screen.
2. **Radial construction (180–900ms):** the mark's existing arms/segments resolve from controlled radial offsets. Prefer stroke-draw, mask, rotation, and scale over particles.
3. **Negative-space resolution (650–1050ms):** the internal `c` becomes optically clear as surrounding geometry settles.
4. **Precision settle (900–1350ms):** a small overshoot returns to the exact final mark; maximum overshoot approximately 3%.
5. **Identity hold (1350–2200ms):** keep the completed mark still long enough to read.
6. **Resting loop (after 2200ms):** extremely subtle light drift/parallax. The logo itself should not continuously spin, pulse, wobble, or redraw.

**Implementation ownership:**

- GSAP owns the SVG construction timeline and any pointer-responsive transform.
- CSS owns simple color transitions.
- Framer Motion owns React-level section entrances only.
- Never let GSAP and Framer Motion write to the same transform property on the same node.

**Interaction:**

- Desktop pointer movement may shift the atmospheric field by 6–12px and the mark by 2–4px.
- Clamp movement and ease it; no cursor chasing.
- Mobile uses the mount sequence only.
- Reduced-motion users receive the completed static mark and a static gradient.
- If JavaScript fails, the final logo and all hero copy remain visible.

### Home Page Sections After the Hero

1. **Capability progression:** a restrained horizontal/stacked sequence from digital presence to specialized engineering.
2. **Work preview:** six concise domain entries; no massive bento dashboard.
3. **Principles preview:** three selected principles linking to `/approach`.
4. **Research foundation:** the two verified published papers only.
5. **Contact close:** quiet, high-contrast CTA with no pressure language.

Each section should have a distinct composition. Do not repeat the same card grid five times.

---

## 5. Remaining Page Contracts

### `/work`

- Lead with the compact capability progression.
- Present six accessible accordion domains:
  1. Digital Products
  2. Business Systems
  3. Systems Engineering
  4. Advanced Systems Engineering
  5. AI & Agentic Systems
  6. Specialized / Custom Engineering
- All approved capability items remain in the HTML and are indexable.
- Accordion rows should feel like an editorial index: large number, title, concise description, plus/minus control, thin dividers.
- Use solid off-white/soft-blue surfaces rather than a stack of floating glass cards.
- Include a small, explicitly labeled Physical/Hardware/Edge R&D direction.
- Exclude High-Assurance / Mission-Critical Engineering entirely.
- Close with verified research links and Contact.
- No fictional project thumbnails, fabricated metrics, or client logos.

### `/approach`

- Principles-only page; do not invent a proprietary multi-step sales methodology.
- Required principles:
  - Problem first. Architecture second. Technology third.
  - Deterministic software and sound data models before AI.
  - Augment useful existing systems before replacement.
  - AI only where it adds identifiable operational value.
  - Human review for consequential workflows.
  - Explicit data and responsibility boundaries.
- Visual character: methodical, quieter than Home, strong editorial rules and numbered principles.
- Motion: simple staged text and divider reveals; no pinned spectacle.

### `/future`

- Visually complete short page, not an under-construction screen.
- Brightest/radiant page in the system, using the approved future gradient token.
- One grounded statement about deliberate technical direction.
- No detailed roadmap, dates, High-Assurance claim, unpublished research, or hardware-readiness claim.
- Provide Explore Work and Contact exits.

### `/contact`

- Quiet and functional.
- Show a direct-email link independently of the form.
- Form fields: name, work email, organization optional, phone optional, industry, project stage, short message, privacy consent.
- Project-stage values: Exploring / Scoping / Ready to build / Improving an existing system.
- No currency-specific budget field.
- No WhatsApp CTA in V1.
- Preserve entered data when submission fails.
- Use inline validation and a clear error summary when multiple fields fail.
- If the delivery provider is unavailable, keep the direct-email path visible and explain the fallback without exposing technical details.

### `/privacy` and Not Found

- Privacy page covers collection, purpose, processing provider, retention, user contact, and analytics behavior.
- Legal/controller wording requires final human approval before public launch.
- Not-found page offers Home, Work, and Contact routes; no sarcasm or novelty game.

---

## 6. Content and Claims Contract

- Homepage positioning is domain-neutral and globally available.
- Published research is the only V1 credibility proof.
- Do not present proposals, demos, internal scenarios, or conversations as client work.
- Do not publish pricing.
- Do not claim company size, production maturity, geographic presence, or measured outcomes without verified evidence.
- Physical/Hardware/Edge is forward-looking R&D only.
- High-Assurance / Mission-Critical Engineering is absent from V1.
- Hero hooks remain 5–8 words.
- Never use: revolutionary, game-changing, disruptive, one-stop shop, end-to-end solutions, world-class, guaranteed, instant results, or unsupported percentages.

Copy must be finalized before component integration; workers must not invent marketing language while coding.

---

## 7. Component and Data Architecture

### Shared Components

- `SiteHeader`
- `MobileNavigation`
- `SiteFooter`
- `Container`
- `SectionHeader`
- `PrimaryButton` / `TextLink`
- `HeroLogoField`
- `CapabilityProgression`
- `CapabilityAccordion`
- `PrincipleRow`
- `ResearchReference`
- `ContactForm`
- `FormField` / `SelectField` / `ConsentField`
- `MotionProvider`
- `ReducedMotionBoundary`

### Typed Data Contracts

- `NavItem`
- `CapabilityDomain`
- `CapabilityGroup`
- `CapabilityItem`
- `Principle`
- `ResearchReference`
- `ContactPayload`
- `ContactDeliveryResult`
- `AnalyticsEvent`

Keep capability, principle, research, and navigation content in typed local data modules. Do not add a CMS in V1.

### Contact Contract

- `POST /api/contact`
- Server-side schema validation.
- Provider-neutral delivery function with Resend as the default adapter.
- Environment variables:
  - `CONTACT_TO_EMAIL`
  - `CONTACT_PUBLIC_EMAIL`
  - `RESEND_API_KEY`
  - `RESEND_FROM_EMAIL`
- No application database storage.
- Add honeypot and minimum-fill-time checks; do not add CAPTCHA unless real abuse justifies it.

### Analytics Contract

Implement a no-op typed adapter now. Activate a cookieless/privacy-light provider during deployment.

Events:

- `explore_work`
- `contact_open`
- `capability_expand`
- `research_link_open`
- `contact_submit_success`
- `contact_submit_error`

---

## 8. Motion System

### Library Boundaries

- **CSS:** hover, focus, color, border, and simple 150/300ms state changes.
- **Framer Motion:** route/section entrance orchestration and small React state transitions.
- **GSAP:** hero SVG construction, sophisticated scroll-linked sequences, and carefully bounded parallax.
- **Lenis:** enable only after native scrolling, anchors, focus restoration, and reduced motion are verified. Remove it if it creates scroll or accessibility regressions.

### Rules

- All timelines and listeners clean up on unmount.
- All ScrollTriggers are scoped and killed during cleanup.
- Animate transform and opacity; avoid layout-triggering properties.
- Never set substantive content to unconditional `opacity: 0` in CSS.
- No scroll-jacking.
- No looping animation competing with reading.
- No animation solely because a library is installed.
- Target a stable 60fps on a mid-range device; reduce layers and blur before lowering usability.

### Page Character

| Page | Motion character |
|---|---|
| Home | Focused identity reveal; highest craft concentration |
| Work | Staged, architectural, legible |
| Approach | Methodical and restrained |
| Future | Radiant ambient motion, minimal content |
| Contact | Quiet state transitions only |

---

## 9. Implementation Sequence and Antigravity Ownership

### Planning Tier — ChatGPT / Chief of Staff

Complete before spending execution quota:

1. Lock the page content matrix and exact copy.
2. Obtain final logo SVG/wordmark/favicon assets.
3. Obtain canonical research URLs and approved attribution.
4. Obtain public/destination email values.
5. Produce the hero SVG layer map and timeline storyboard from the real logo.
6. Record all missing launch inputs in a blocking-status map.

### Execution Tier — Antigravity Pro Account A

Primary repository/integration owner:

1. Add approved derived semantic/composition tokens.
2. Harden global CSS and remove any unused dark-mode behavior from the V1 path.
3. Self-host or otherwise make locked fonts reproducible for production builds.
4. Build route shells, typed content modules, shared shell, and base components.
5. Implement the production tracer: navigation → Home hero static state → Work → Contact fallback.
6. Build Work, Approach, Future, Contact, Privacy, and not-found pages.
7. Implement the contact API and delivery adapter.
8. Merge Account B's motion work and own all conflict resolution.
9. Fix final QA findings.

### Execution Tier — Antigravity Pro Account B

Motion and independent-quality owner; work in isolation from Account A's page files:

1. Build `HeroLogoField` and GSAP timeline against an agreed DOM/SVG contract.
2. Build reduced-motion and JavaScript-failure states.
3. Create reusable section-motion utilities after Account A stabilizes markup.
4. Audit accessibility, token compliance, copy claims, responsiveness, and performance.
5. Report findings with file paths and acceptance criteria; do not perform broad page rewrites during review.

### Third Tool

Not on the critical path. Use only for mechanical overflow such as asset compression, reference cataloguing, or non-authoritative secondary review.

### Dependency Order

1. Inputs and copy locked.
2. Derived tokens approved.
3. Shared shell and static hero built.
4. Stable SVG/DOM contract handed to motion owner.
5. Home-to-Work-to-Contact tracer verified.
6. Remaining pages built.
7. Motion integrated.
8. Accessibility/performance/claims QA.
9. Fixes and local release candidate.
10. Deployment planned separately.

Do not run Account A and B against the same component files simultaneously.

---

## 10. State and Interaction Coverage

| Surface | Required states |
|---|---|
| Navigation | default, current route, hover, keyboard focus, mobile open/closed, scrolled surface |
| Hero motion | pre-init visible, playing, settled, reduced motion, JavaScript failure, mobile static/entrance |
| CTA | default, hover, active, focus-visible, disabled where applicable |
| Accordion | collapsed, expanded, hover, focus, keyboard toggle, long-content wrapping |
| Contact fields | empty, focused, valid, invalid, disabled, autofilled |
| Contact submission | idle, submitting, success, field error, server error, provider unavailable, retry |
| Research links | default, visited, hover, focus, missing-link blocked during content validation |
| Page content | desktop, tablet, mobile, narrow mobile, zoom at 200%, reduced motion |

Empty and error-state copy must follow the Cerenetics voice: clear, human, short, and never sarcastic.

---

## 11. Quality Gates

### Visual

- The first viewport reads as one intentional composition, not two unrelated cards.
- The logo remains the visual anchor on desktop and mobile.
- Type hierarchy is understandable within two seconds.
- The Fraunces accent is used once, with restraint.
- The atmospheric field has depth without a generic AI gradient.
- Glass annotations remain legible and secondary to the mark.
- Sections below the fold vary composition while retaining a shared grid.

### Accessibility

- WCAG AA contrast for all essential text and UI.
- Steel gray is not used for normal essential body text.
- Semantic landmarks and heading order.
- Complete keyboard operation.
- Visible focus and minimum 44x44px touch targets.
- Accordions expose `aria-expanded` and correct relationships.
- Form errors are programmatically associated with inputs.
- Reduced-motion mode is complete, not merely slower.
- Site remains usable at 200% zoom and with JavaScript motion disabled.

### Performance

- Optimize and inline only the SVG required for animation.
- No autoplay video for the logo animation.
- Avoid large blur layers spanning the full page.
- Lazy-initialize below-fold motion.
- No layout shift from fonts, logo, or hero media.
- Profile the hero on a mid-range mobile device and remove visual layers before accepting persistent frame drops.

### Engineering

- No `any` types.
- No raw visual values in components.
- No conflicting animation ownership.
- Timelines/listeners clean up on unmount.
- `npm run lint` passes.
- `npx tsc --noEmit` passes.
- `npm run build` passes in the production-capable environment.
- No console errors or hydration warnings.

### Claims

- No unsupported performance, client, team, geographic-presence, or readiness claims.
- Research links and authorship are verified.
- Hardware/Edge is visibly forward-looking.
- High-Assurance content is absent.
- Privacy and contact identity are approved before public launch.

---

## 12. Required Inputs Before Launch

- Final SVG mark and wordmark.
- Public contact email and form destination.
- Paper URLs/DOIs and exact approved attribution.
- Approved page copy.
- Domain and canonical URL.
- Deployment provider.
- Email-provider credentials and verified sending domain.
- Analytics provider selection.
- Privacy/controller/retention wording.
- Social preview asset.
- Trademark/name review remains a business launch risk outside implementation.

Until these are supplied, Antigravity may build and locally verify the full experience with typed configuration placeholders, but it must not invent public facts or silently ship placeholders.
