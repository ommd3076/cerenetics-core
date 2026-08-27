---
name: cerenetics-component-patterns
description: >-
  Encodes locked component patterns for the Cerenetics design system.
  Use this skill when building any reusable UI component — cards, buttons,
  navigation, CTAs, or page sections. Provides structural rules, composition
  patterns, accessibility requirements, and exact token mappings.
---

# Cerenetics Component Patterns

> 🟢 **STATUS: LOCKED & ACTIVE**
> Token mappings and structural patterns are fully locked and operational.
> Build-time motion and animations are calibrated per section during implementation.

---

## 1. Button Patterns

### Structural Rules
- **Shape:** Pill-shaped (`rounded-full` / `radius.full`).
- **Touch Target:** Minimum 44×44px.
- **Typography:** `font-heading` or `font-body`, `font-bold` (700), size `16px` (`size.base`).
- **Transition:** `transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)]` (`duration.fast` + `easing.fluid`).

### Variants & Token Mapping

| Variant | Background Token | Text Token | Border Token | Hover State |
|---|---|---|---|---|
| **Primary / CTA** | `background.cta` (`#0A1128`) | `text.inverse` (`#ffffff`) | None | Opacity 90%, subtle scale (1.02) |
| **Secondary** | `background.panel` (`#ebecff`) | `text.primary` (`#0A1128`) | `border.structural` (`#a3b4bc`) | Background `#dfe2fb` |
| **Glass** | `background.glass` (`rgba(255,255,255,0.1)`) | `text.primary` (`#0A1128`) | `border.glass` (`rgba(255,255,255,0.3)`) | `backdrop-blur-[16px]`, bg-white/20 |
| **Accent / Badge** | `text.accent_success` (`#d2fbd0`) | `text.primary` (`#0A1128`) | None | Glow / brightness 1.05 |

---

## 2. Card & Bento Grid Patterns

### Structural Rules
- **Shape:** Restrained rounded rectangle (`rounded-md` / `8px` or `rounded-sm` / `4px`). **Never pill silhouettes for cards.**
- **Background:** `background.panel` (`#ebecff`) or `background.primary` (`#eff2f3`).
- **Border:** `border.structural` (`#a3b4bc`) at 1px width, or `border.glass` (`rgba(255, 255, 255, 0.3)`) for glass cards.
- **Padding:** Scale tokens `spacing.scale.24` (24px) or `spacing.scale.32` (32px).
- **Split-Panel Hero Padding:** `spacing.layout.split_panel_padding` (`96px`).

---

## 3. Navigation (Navbar) Patterns

### Structural Rules
- **Shape:** Restrained floating rounded rectangle (`rounded-md` / `8px`).
- **Surface:** Glassmorphic — `background.glass` (`rgba(255, 255, 255, 0.1)`), `border.glass` (`rgba(255, 255, 255, 0.3)`), `backdrop-blur-[16px]`.
- **Typography:** Nav links use `font-heading`, size `16px` (`size.base`), text `text.primary` (`#0A1128`).
- **Logo Usage:** Brand chrome only. Never transformed into a showcase sandbox.

---

## 4. Typography Application Classes

| Intent | Font Family | Size | Weight | Tracking / Notes |
|---|---|---|---|---|
| Page Hero H1 | `font-heading` (`Space Grotesk`) | `72px` (`size.h1`) | `700` (`weight.bold`) | Leading tight |
| Section Headline H2 | `font-heading` (`Space Grotesk`) | `48px` (`size.h2`) | `700` (`weight.bold`) | - |
| Card Title H3 | `font-heading` (`Space Grotesk`) | `24px` (`size.h3`) | `700` (`weight.bold`) | - |
| Editorial Emphasis | `font-accent` (`Fraunces`) | Contextual | Italic / regular | Highlighting key phrases |
| Standard Body | `font-body` (`Inter`) | `16px` (`size.base`) | `400` (`weight.regular`) | `text.primary` or `text.secondary` |
| Micro Eyebrows / Caps | `font-heading` (`Space Grotesk`) | `12px` (`size.micro`) | `700` | Uppercase, tracking `1.5px` (`heading_caps`) |
| Data / Code / Metrics | `font-data` (`JetBrains Mono`) | `12px` - `16px` | `400` / `700` | Metric counters, tech specs |
| Pixel / Retro Accents | `font-pixel` (`VT323`) | `16px` - `24px` | `400` | Tracking `0.5px` (`pixel_micro`) |

---

## 5. Motion Guidelines

- **Base Interactions:** Button hovers and standard UI state changes use `transition.duration.fast` (150ms) or `transition.duration.base` (300ms) with `transition.easing.fluid` (`cubic-bezier(0.16, 1, 0.3, 1)`).
- **Motion Graphics & Animations:** Custom kinetic motion, GSAP ScrollTrigger timelines, and radiant interactive moments will be tailored per page during active build.
- **Safety:** Always wrap animations in `prefers-reduced-motion` fallbacks and keep UI content visible without JavaScript.
