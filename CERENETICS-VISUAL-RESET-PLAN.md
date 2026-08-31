# Cerenetics Visual Reset — Authoritative Implementation Plan

**Status:** Required corrective pass

**Executor:** Antigravity Chief of Staff, Directors, and Workers

**Scope:** Visual system, typography, brand asset usage, Home hero, motion, shared shell, and consistency review across every route

**Authority:** This document records the latest user feedback. It supersedes any conflicting visual direction in `CERENETICS-IMPLEMENTATION-PLAN.md`, especially instructions that encourage atmospheric gradients, widespread glass, bold display typography, substitute logo geometry, or repeated editorial italics.

Do not treat the current implementation as an approved baseline. It is a diagnostic input that must be simplified and rebuilt selectively.

---

## 1. User Verdict and Root Causes

The current result is rejected as visually generic and AI-generated. The problem is not a missing polish pass; it is a hierarchy and restraint failure.

Confirmed causes:

1. Main display typography is too heavy. Bold Space Grotesk dominates the page and does not resemble the lightweight reference treatment.
2. Fraunces italic is oversized and repeated, so it reads as a generic editorial-site effect instead of a precise contrast.
3. VT323 is absent from the visible hierarchy even though its exact synthetic-italic treatment is explicitly approved.
4. The supplied `logo.svg` is not being used. A fabricated circular symbol appears in its place.
5. Fabricated technical annotations such as version labels, latency claims, architecture chips, and engagement-status language create noise and unsupported claims.
6. Glass, gradients, blur, glow, borders, chips, and floating elements are layered together without a clear material rule.
7. The composition is crowded. The references rely on negative space, a small number of large decisions, and strong solid-color separation.

This corrective pass must remove elements before adding new ones.

---

## 2. Reference Interpretation

The supplied screenshots have different jobs. Do not blend all their traits together.

### Axiom hero and full-page screenshots

Use only these qualities:

- split-screen first view;
- generous white space;
- lightweight, regular-weight display type;
- a short smaller italic connective phrase between larger sans lines;
- sparse supporting copy;
- one dominant visual field rather than several floating UI objects;
- mostly solid surfaces with transparent elements used only when structurally necessary;
- calm editorial pacing below the fold.

Do not copy the blue palette, cloud imagery, ASCII treatment, logo, navigation, copy, or exact layout.

### Separate headline screenshot

This is the typography silhouette to match:

- large uppercase sans lines use a light or regular cut, never bold;
- character shapes should feel narrow, clean, and engineered rather than chunky;
- the italic phrase is smaller than the surrounding sans lines and functions as a connective line;
- line spacing is compact but does not cause collisions;
- the text block is controlled and optically balanced;
- supporting copy is materially smaller and regular weight.

An exact font family cannot be proven from pixels alone. Therefore:

- `Space Grotesk 400` is only a provisional implementation fallback;
- Antigravity must not claim an exact match until the user supplies the font name/file or the team identifies it with reliable evidence;
- final visual acceptance remains blocked on the exact display font if the provisional proof does not match closely enough;
- do not compensate for a wrong font with extreme tracking, artificial stretching, or CSS transforms.

### Final abstract portfolio screenshot

Use it only as inspiration for abstract composition:

- a small number of flat geometric elements;
- strong asymmetrical balance;
- shapes large enough to read as composition, not decoration;
- clear foreground/background separation;
- solid fills and deliberate empty space.

Explicitly do not copy its colors, individual shapes, arrangement, proportions, or branding.

---

## 3. Typography Lock

### Main display sans

- Provisional family: Space Grotesk.
- Default display weight: 400.
- Do not use weight 700 for hero or section headlines.
- Avoid automatic bold styling on `h1`–`h6` in global CSS.
- Uppercase may be used for the hero's principal lines when it improves the reference match.
- Tracking must be judged visually at each breakpoint; do not globally force extreme negative tracking.

### Editorial italic

- Family: Fraunces italic, weight 400, until/unless the exact reference italic is identified.
- Use once in the Home hero as a short connective phrase.
- Size it approximately 55–70% of the surrounding display line.
- Never use it as a full hero sentence.
- Do not repeat it in every section title, card title, or CTA.
- If it still reads ornamental or generic in the screenshot proof, remove it rather than enlarge it.

### Pixel accent — exact approved treatment

```css
font-family: 'VT323', monospace;
font-style: italic;
font-weight: 400;
```

Additional rules:

- VT323 has one weight only. Never request or synthesize bold.
- The italic is the browser's synthetic slant because VT323 has no native italic cut.
- Use only in tiny, subtle places: one accent word, a small tag, a divider label, or a genuine status label.
- Never use for a full headline, body paragraph, large text block, button label, or navigation system.
- Keep to roughly one or two VT323 moments in the first viewport.
- Do not substitute JetBrains Mono for this approved pixel treatment.

### Body and data

- Inter 400 for body copy.
- Use bold body text only for genuine semantic emphasis and keep it rare.
- JetBrains Mono is reserved for real data, identifiers, or code. Do not manufacture technical metadata merely to use the font.

### Required typography proof gate

Before building the final hero, the Typography Worker must produce one isolated proof page or temporary route showing:

1. the reference-shaped three-line headline at desktop and mobile widths;
2. Space Grotesk 400 versus any locally available, legally usable closer candidate;
3. the small Fraunces italic connective phrase;
4. the exact VT323 synthetic-italic accent;
5. body copy in Inter 400.

The Design System Director and QA Director must select the closest legal implementation and record the decision. Delete the temporary proof before release unless it is useful as an internal story.

---

## 4. Surface and Color Rules

Use the locked Cerenetics primitives only:

- Off-White `#eff2f3`
- Soft Blue `#ebecff`
- Steel Gray `#a3b4bc`
- Pale Green `#d2fbd0`
- Navy Black `#0A1128`
- Pure White `#ffffff`

Material rules:

1. Default to solid fills.
2. A surface is either solid or transparent for a specific structural reason; do not mix opacity, blur, glow, gradient, and shadow on the same element.
3. Home hero must not use a radial or mesh gradient.
4. Home hero must not use glass annotation chips.
5. Navigation should be solid white by default. A transparent navigation variant is permitted only if browser screenshots prove it is necessary across a split background.
6. Shadows are exceptional and faint. Use borders and negative space first.
7. No glow halos, floating glass cards, decorative metric chips, or frosted panels in the Home hero.
8. The Future page may remain the most radiant page, but its treatment must be separately contained and must not leak into every route.
9. Steel gray remains structural/decorative and must not become low-contrast essential body copy.

The visual target is flat, clean, quiet, and deliberate—not sterile, and not a collection of translucent UI samples.

---

## 5. Brand Asset Contract

The repository-root `logo.svg` is the authoritative Cerenetics logo asset.

- Use this exact asset in the header, Home hero, mobile navigation, and footer where the mark is required.
- Remove all substitute lettermarks, generated circles/arcs, temporary `C` blocks, and recreated identity graphics.
- Do not redraw, simplify, trace, recolor, crop destructively, or alter the SVG paths without explicit user approval.
- Inspect the SVG's built-in white field and determine the correct non-destructive presentation. If a transparent export is required, record it as an asset request; do not silently modify the master.
- If additional imagery or an alternate transparent/logo-lockup export is genuinely needed, specify the exact file, dimensions, background requirement, and placement before requesting it from the user.
- Never invent client logos, project screenshots, performance claims, or technical badges.

---

## 6. Home Hero Reset

### Composition

- Build one restrained split first view, approximately 48/52 or 50/50 on desktop.
- Left side is the editorial type field; right side is the brand/abstract field.
- Use a clear vertical boundary or grid division. Do not place the right side inside a large floating rounded card.
- Use pure white/off-white and one solid Cerenetics panel color.
- Preserve generous empty space around the headline and logo.
- On mobile, stack the type field before the visual field without shrinking the headline into illegibility.

### Left field

Maximum visible elements:

1. one tiny VT323 synthetic-italic identity/category accent;
2. one three-part headline following the reference typography silhouette;
3. one concise supporting paragraph;
4. one primary CTA;
5. one quiet secondary text link if needed.

Remove:

- glass eyebrow pill;
- large bold headline styling;
- oversized full-line italic sentence;
- two equally loud pill CTAs;
- fabricated engagement status;
- fabricated quarter/availability claims;
- any technical label not backed by real content.

Copy must remain domain-neutral and claim-safe. The Content Director may improve line breaks and brevity but must not invent proof, metrics, availability, customer scale, or capabilities.

### Right field

- The actual `logo.svg` is the focal point.
- Build no more than three supporting flat geometric planes/lines using Cerenetics tokens.
- Shapes must be original and should arise from the layout or logo's visual logic, not be copied from the abstract reference.
- Do not include `Identity Mark / V1.0`, `Deterministic Architecture`, `Sub-100ms Interaction`, latency labels, fake diagrams, orbit lines, particles, nodes, or glass chips.
- The field should read clearly as a static composition before motion initializes.

---

## 7. Vivid Motion Direction

Motion should make the actual identity feel constructed and resolved. It must not create a new logo.

Recommended sequence:

1. **Solid-plane entrance, 0–450ms:** one or two flat fields reveal through masks or directional scale.
2. **Logo reveal, 250–950ms:** reveal the supplied SVG with clipping/masking or animate its existing paths only when technically safe.
3. **Precision settle, 850–1250ms:** a restrained 1–2% positional/scale settle returns to the exact final asset.
4. **Hold:** the composition becomes still and readable.
5. **Optional ambient response:** supporting planes may drift by no more than 2–4px. The logo itself must not spin, orbit, pulse, wobble, or continuously redraw.

Implementation rules:

- Use GSAP for the hero identity timeline.
- Keep the static end state in normal CSS/DOM flow.
- Never rely on unconditional `opacity: 0`.
- Clean up timelines and listeners on unmount.
- Respect `prefers-reduced-motion`; reduced mode displays the final static composition immediately.
- No autoplay video.
- No fake 3D, particle field, cursor chase, blur bloom, or perpetual animation.

---

## 8. Shared-Site Simplification

After the hero proof passes, audit every route for the same failure pattern.

- Change large route and section headings to regular-weight display type unless a specific hierarchy requires emphasis.
- Remove repeated Fraunces italic styling from section headings.
- Reserve VT323 for tiny, intentional accents.
- Replace fake logo variants with `logo.svg`.
- Remove unsupported technical/status language.
- Reduce repeated rounded cards and repeated bento grids.
- Use a mix of rules, open whitespace, solid panels, lists, and staged sections.
- Ensure every page still has its assigned character: Home focused, Work proof-driven, Approach systematic, Future most radiant, Contact quiet.
- Do not redesign every route independently. Establish the typography and surface system once, then apply it consistently.

---

## 9. Execution Graph

```text
R0  Preserve-state audit and screenshot baseline
 ├──> R1  Visual-token and typography audit
 ├──> R2  Logo asset inspection
 └──> R3  Content/claim cleanup inventory

R1 + R2
 └──> R4  Isolated typography + static hero proof
       ├── fail ──> R4a Typography/composition repair ──> R4
       └── pass ──> R5 Shared shell reset

R3 + R4 + R5
 └──> R6 Home hero implementation using actual logo.svg
       └──> R7 Hero motion implementation

R5 + R6
 └──> R8 Cross-route simplification and consistency pass

R7 + R8
 └──> R9 Responsive, accessibility, reduced-motion, and browser QA
       ├── fail ──> R10 Owner-routed repair ──> R9
       └── pass ──> R11 Local visual release candidate
```

No node passes because files exist. Each node requires browser evidence at the stated viewport sizes.

---

## 10. Agent Ownership

### Chief of Staff

- Own the graph, file ownership map, integration order, and evidence ledger.
- Preserve the dirty worktree and identify existing user/agent changes before assignment.
- Do not allow multiple Workers to edit the same file concurrently.
- Keep the reset surgical: reuse correct architecture and behavior; replace rejected visual decisions.

### Design System Director

- Own typography defaults, CSS variables, token mappings, surface rules, and the temporary type proof.
- Encode VT323 synthetic italic exactly.
- Ensure regular heading weight is the default and bold is exceptional.
- Do not change locked primitive colors.

### Content / Copy Director

- Remove fabricated hero labels and unsupported status/metric language.
- Preserve domain-neutral positioning and approved route content.
- Provide final line-break-safe hero copy without inventing claims.

### Component Build Director

- Own header, mobile navigation, footer, Home hero static composition, and cross-route component cleanup.
- Use the supplied logo asset everywhere required.
- Keep surfaces solid and DOM structure simple.

### Motion / Animation Director

- Begin only after the static hero proof passes.
- Animate the actual supplied asset and supporting planes.
- Own cleanup, reduced motion, and performance checks.

### QA / Consistency Director

- Compare browser screenshots against this document and the user references by role.
- Reject bold-heavy type, repeated italics, missing VT323, substitute logos, excess glass, gradients in the Home hero, clutter, and copied abstract shapes.
- Route every failure back to the owning Director and require a fresh screenshot.

---

## 11. Browser Review Matrix

Required screenshots:

| View | Width × height | Required evidence |
|---|---:|---|
| Home desktop | 1440 × 900 | full first view, split balance, type silhouette, actual logo |
| Home laptop | 1280 × 800 | no overlap with navigation, headline fits naturally |
| Home tablet | 768 × 1024 | stacked/split behavior, spacing, CTA hierarchy |
| Home mobile | 360 × 800 | readable type, actual logo, no overflow or crowding |
| Home reduced motion | 1440 × 900 | final static composition visible immediately |
| Every route | 1440 × 900 and 360 × 800 | regular typography, restrained surfaces, consistent logo |

QA must inspect both the first viewport and representative below-fold sections. Code review alone is insufficient.

---

## 12. Rejection Tests

Automatically reject a candidate if any statement is true:

- The supplied `logo.svg` is not the visible brand mark.
- Hero or section headlines default to bold/700.
- The italic phrase is a full large sentence or repeats across section headings.
- VT323 is absent, bold, non-italic, or used as long copy.
- The Home hero uses a radial/mesh gradient, glow halo, particle system, or glass chips.
- Solid and transparent treatments are mixed indiscriminately.
- Fake latency, architecture, version, engagement, or availability labels remain.
- The right field contains more decorative objects than the reference hierarchy needs.
- The abstract reference's palette or exact shapes were copied.
- Motion replaces or redraws the logo rather than revealing the supplied asset.
- The page looks like a generic AI SaaS template, component demo, or stock agency site.
- A desktop-only screenshot is used to claim responsive completion.

---

## 13. Completion Gate

The visual reset is complete only when:

- the type proof and final hero both pass QA;
- regular-weight display typography is consistent across routes;
- the approved VT323 synthetic-italic treatment is visible but subtle;
- `logo.svg` is used consistently without a substitute;
- Home uses solid surfaces and deliberate transparency only;
- the right hero field is uncluttered, original, and motion-ready;
- fabricated labels and unsupported claims are gone;
- all required browser screenshots have been reviewed;
- reduced motion, keyboard focus, responsive layouts, lint, TypeScript, and production build pass;
- the final report lists any remaining asset blocker, especially the exact display font or a transparent logo export.

Do not call the result complete while an exact-font mismatch remains unresolved. If the user has not supplied the font identity/file, mark that item clearly as `USER ASSET REQUIRED` while completing every other safe node.
