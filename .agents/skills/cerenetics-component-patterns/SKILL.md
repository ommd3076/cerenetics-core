---
name: cerenetics-component-patterns
description: >-
  Encodes locked component patterns for the Cerenetics design system.
  Use this skill when building any reusable UI component — cards, buttons,
  navigation, CTAs, or page sections. Provides structural rules, composition
  patterns, and accessibility requirements. Activate before creating or
  modifying any component in the component library.
---

# Cerenetics Component Patterns

> ⚠️ **STATUS: AWAITING FOUNDATION LOCK**
> Component patterns depend on confirmed design tokens (colors, typography, spacing, radius).
> Structural rules below are locked; visual specifications will be populated once
> the `cerenetics-design-system` skill tokens are confirmed.

## Locked Structural Rules

These rules apply regardless of pending token values.

### Buttons
- **Shape:** Pill-shaped (border-radius: `full` / `9999px`).
- **States:** Every button must define `default`, `hover`, `active`, `focus-visible`, and `disabled` states.
- **Accessibility:** Minimum touch target 44×44px. Always has accessible name (text content or `aria-label`).
- **Variants:** Primary, Secondary, Ghost, Destructive — each with consistent token usage.
- **Motion:** Subtle scale or opacity transition on hover. No jarring transforms.

### Cards
- **Shape:** Rounded rectangle — uses the defined card radius, NOT pill silhouette.
- **Structure:** Content padding from spacing scale. Optional header/footer regions.
- **Elevation:** Uses shadow tokens for depth.
- **Interaction:** If interactive, must have focus ring and hover state.

### Navigation (Navbar)
- **Shape:** Restrained rounded rectangle — NOT pill, NOT sharp corners.
- **Behavior:** Sticky or fixed positioning with scroll-aware state changes.
- **Content:** Logo (approved asset only — `Screenshot 2026-08-03 141135.svg` or equivalent), nav links, optional CTA.
- **Mobile:** Responsive — hamburger or equivalent pattern for mobile breakpoints.
- **Logo Rules:** Logo is brand chrome only. Never a centered content section, component laboratory, motion-mode panel, or case-study object.

### CTAs (Call to Action)
- **Primary CTA:** Pill-shaped button. High contrast against background.
- **Copy:** Concise action verbs. See `cerenetics-voice` skill for approved language patterns.
- **Placement:** End of sections, not mid-content.

### Page Sections
- **Vertical Rhythm:** All pages use consistent section padding from spacing scale.
- **Content Width:** Defined max-width with centered content. Full-bleed for backgrounds only.
- **Headings:** Follow type scale hierarchy — H1 once per page, H2 for sections, H3 for subsections.

## Page-Specific Component Rules

| Page | Primary Pattern | Character |
|------|----------------|-----------|
| Home | Hero + selective ambient motion | Focused, magnetic |
| Work | Project cards, vertically staged | Proof-driven |
| Approach | Process/systems visualization | Methodical |
| Future | Radiant, aspirational sections | Most visually expressive page |
| Contact | Form + minimal chrome | Quiet, functional |

## Motion Rules for Components

1. **GSAP/ScrollTrigger** is the primary motion system — do not add competing animation libraries.
2. Every animation must **clean up on unmount** and **respect `prefers-reduced-motion`**.
3. Motion is **progressive enhancement** — content must be visible if JS fails. No unconditional `opacity: 0` in CSS.
4. Keep ambient motion **selective and page-specific**. No constant decorative motion, random blobs, or scroll-jacking.

## Accessibility Requirements (All Components)

1. Semantic HTML elements (button, nav, main, section, article, etc.).
2. ARIA attributes where semantic HTML is insufficient.
3. Keyboard navigation support (tab order, focus management).
4. Color contrast meets WCAG AA (4.5:1 text, 3:1 large text / UI components).
5. Screen reader compatible — no information conveyed only through color or motion.

## Activation Criteria

Component visual specifications are **not active** until:
- [ ] `cerenetics-design-system` skill tokens are fully confirmed
- [ ] Color, typography, spacing, and radius values are locked

Once locked, this skill will be updated with:
- Exact Tailwind class patterns for each component
- Token-mapped color/spacing references
- Specific responsive breakpoint behaviors
