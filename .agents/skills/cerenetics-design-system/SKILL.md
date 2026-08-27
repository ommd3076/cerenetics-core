---
name: cerenetics-design-system
description: >-
  Encodes the locked Cerenetics design system tokens. Use this skill when implementing
  any UI component, page layout, or visual element for the Cerenetics portfolio.
  Provides canonical color tokens (primitives and semantic mappings), typography pairings,
  spacing scale, corner-radius rules, glassmorphism surface values, and transition easing.
  Activate before writing any CSS, Tailwind config, or component styles.
---

# Cerenetics Design System

> 🟢 **STATUS: LOCKED**
> All design tokens are confirmed and locked.
> All visual and component styling MUST strictly use these canonical tokens.
> *Note:* Base transition tokens are locked; motion graphics and page-specific timeline animations will be refined during page building.

---

## 1. Color Tokens

### Primitive Colors
| Token | Type | Hex / Value | Description / Character |
|---|---|---|---|
| `cerenetics.color.primitive.off_white` | color | `#eff2f3` | Subtle cool off-white |
| `cerenetics.color.primitive.soft_blue` | color | `#ebecff` | Ambient tint / soft panel background |
| `cerenetics.color.primitive.steel_gray` | color | `#a3b4bc` | Structural slate / secondary text & border |
| `cerenetics.color.primitive.pale_green` | color | `#d2fbd0` | High-contrast accent / success indicator |
| `cerenetics.color.primitive.navy_black` | color | `#0A1128` | Deep midnight navy-black / primary text & CTA |
| `cerenetics.color.primitive.pure_white` | color | `#ffffff` | Absolute white / inverse text & highlights |

### Semantic Color Mappings

#### Backgrounds
- **`background.primary`**: `{cerenetics.color.primitive.off_white}` (`#eff2f3`) — Main canvas / page background
- **`background.panel`**: `{cerenetics.color.primitive.soft_blue}` (`#ebecff`) — Card, bento, and panel backgrounds
- **`background.glass`**: `rgba(255, 255, 255, 0.1)` — Translucent glass surfaces & navigation
- **`background.cta`**: `{cerenetics.color.primitive.navy_black}` (`#0A1128`) — Primary CTA / Action buttons

#### Typography / Text
- **`text.primary`**: `{cerenetics.color.primitive.navy_black}` (`#0A1128`) — Main headlines, primary body text
- **`text.secondary`**: `{cerenetics.color.primitive.steel_gray}` (`#a3b4bc`) — Subtitles, captions, metadata
- **`text.accent_success`**: `{cerenetics.color.primitive.pale_green}` (`#d2fbd0`) — Metric highlights, badges, success states
- **`text.inverse`**: `{cerenetics.color.primitive.pure_white}` (`#ffffff`) — Text on dark CTAs, pill buttons, badges

#### Borders & Outlines
- **`border.structural`**: `{cerenetics.color.primitive.steel_gray}` (`#a3b4bc`) — Solid dividers, container borders
- **`border.glass`**: `rgba(255, 255, 255, 0.3)` — Glassmorphic borders and specular highlights

---

## 2. Typography

### Font Families
| Role | Token | Value / Stack |
|---|---|---|
| **Heading** | `typography.family.heading` | `Space Grotesk, sans-serif` |
| **Body** | `typography.family.body` | `Inter, sans-serif` |
| **Accent Italic** | `typography.family.accent_italic` | `Fraunces, serif` |
| **Pixel** | `typography.family.pixel` | `VT323, monospace` |
| **Data / Code** | `typography.family.data` | `JetBrains Mono, monospace` |

### Font Size Scale
| Token | Dimension | Intended Usage |
|---|---|---|
| `typography.size.micro` | `12px` | Badges, tags, micro-labels, timestamps |
| `typography.size.base` | `16px` | Standard body copy, paragraph text |
| `typography.size.h3` | `24px` | Card titles, section sub-headers, callouts |
| `typography.size.h2` | `48px` | Section titles, feature headlines |
| `typography.size.h1` | `72px` | Page hero titles, display impact text |

### Font Weights
- **`typography.weight.regular`**: `400`
- **`typography.weight.bold`**: `700`

### Letter Spacing (Tracking)
- **`typography.letterSpacing.heading_caps`**: `1.5px` — Uppercase subheaders, eyebrow text
- **`typography.letterSpacing.pixel_micro`**: `0.5px` — Pixel and data font micro-copy

---

## 3. Spacing Scale

| Token | Dimension | Equivalent Tailwind / Rem |
|---|---|---|
| `spacing.scale.04` | `4px` | `0.25rem` / `gap-1`, `p-1` |
| `spacing.scale.08` | `8px` | `0.5rem` / `gap-2`, `p-2` |
| `spacing.scale.12` | `12px` | `0.75rem` / `gap-3`, `p-3` |
| `spacing.scale.16` | `16px` | `1rem` / `gap-4`, `p-4` |
| `spacing.scale.24` | `24px` | `1.5rem` / `gap-6`, `p-6` |
| `spacing.scale.32` | `32px` | `2rem` / `gap-8`, `p-8` |
| `spacing.scale.48` | `48px` | `3rem` / `gap-12`, `p-12` |
| `spacing.scale.64` | `64px` | `4rem` / `gap-16`, `p-16` |
| `spacing.scale.96` | `96px` | `6rem` / `gap-24`, `p-24` |
| `spacing.scale.128` | `128px` | `8rem` / `gap-32`, `p-32` |

### Layout Spacing
- **`spacing.layout.split_panel_padding`**: `{cerenetics.spacing.scale.96}` (`96px`) — Inner padding for split-panel hero & bento containers

---

## 4. Corner Radius

| Token | Dimension | Usage Rule |
|---|---|---|
| `radius.none` | `0px` | Sharp container edges, flush dividers |
| `radius.sm` | `4px` | Micro-badges, tooltips, nested tags |
| `radius.md` | `8px` | Cards, panels, modal dialogs, bento boxes, navbar |
| `radius.full` (Rule) | `9999px` | **Buttons and primary CTAs only** (pill-shaped rule) |

*Rule:* Buttons are pill-shaped (`radius.full` / `rounded-full`). Cards and navbar use restrained rounded rectangles (`radius.md` / `8px`).

---

## 5. Surface & Glassmorphism

- **`surface.glassmorphism.backdrop_blur`**: `16px` (`backdrop-blur-md` / `backdrop-filter: blur(16px)`)
- Applied in conjunction with `background.glass` (`rgba(255, 255, 255, 0.1)`) and `border.glass` (`rgba(255, 255, 255, 0.3)`).

---

## 6. Transitions & Motion

### Base Transitions
- **`transition.duration.fast`**: `150ms` (hover states, micro-interactions)
- **`transition.duration.base`**: `300ms` (panel collapses, modal reveals, accordion transitions)
- **`transition.easing.fluid`**: `cubic-bezier(0.16, 1, 0.3, 1)` (premium fluid deceleration curve)

### Build-Time Motion Graphics
- Complex GSAP scroll-driven animations, hero entrances, and interactive kinetic motion will be explored and calibrated during active page development.
- All motion must respect `prefers-reduced-motion` and support progressive enhancement.

---

## Directives for All Agents

1. **No Raw Hex/RGB**: Always consume tokens via Tailwind theme classes (`bg-primary`, `text-primary`, `font-heading`, etc.) or CSS variables.
2. **Strict Font Usage**: Use `font-heading` for headers, `font-body` for prose, `font-accent` for editorial flourishes, `font-pixel` for retro/hacker micro-details, and `font-data` for metrics/code.
3. **Contrast Compliance**: Verify WCAG AA standards. Navy Black on Off-White delivers ~16.5:1 contrast (well exceeding AAA standard).
