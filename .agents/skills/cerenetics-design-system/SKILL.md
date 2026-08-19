---
name: cerenetics-design-system
description: >-
  Encodes the locked Cerenetics design system tokens. Use this skill when implementing
  any UI component, page layout, or visual element for the Cerenetics portfolio.
  Provides canonical color tokens (dark/light/hybrid modes), typography pairings,
  spacing scale, corner-radius rules, and elevation/shadow system.
  Activate before writing any CSS, Tailwind config, or component styles.
---

# Cerenetics Design System

> ⚠️ **STATUS: AWAITING FOUNDATION LOCK**
> This skill is scaffolded but token values are not yet confirmed.
> Do NOT use placeholder values in production components.
> Once the design foundation is locked, this file will be populated with canonical values.

## Color Tokens

**Mode:** TBD (dark / light / hybrid — pending user confirmation)

```json
{
  "colors": {
    "_status": "PENDING — do not use placeholder values",
    "background": {},
    "foreground": {},
    "primary": {},
    "secondary": {},
    "accent": {},
    "muted": {},
    "destructive": {},
    "border": {},
    "ring": {}
  }
}
```

### Rules (locked regardless of token values)
1. All color references MUST use design token variables — never raw hex/rgb in components.
2. Every color must have semantic meaning (e.g., `primary`, `accent`) — no `blue-500` style utility references in component code.
3. Contrast ratios must meet WCAG AA minimum (4.5:1 for normal text, 3:1 for large text).

## Typography

**Pairings:** TBD (pending user confirmation)

```json
{
  "typography": {
    "_status": "PENDING — do not use placeholder values",
    "fontFamily": {
      "heading": "",
      "body": "",
      "mono": ""
    },
    "scale": {},
    "lineHeight": {},
    "letterSpacing": {},
    "fontWeight": {}
  }
}
```

### Rules (locked regardless of font values)
1. Heading and body fonts MUST come from the confirmed pairing — no ad-hoc font additions.
2. Use the defined type scale — do not create arbitrary font sizes.
3. All text must be responsive using clamp() or the defined scale breakpoints.

## Spacing

```json
{
  "spacing": {
    "_status": "PENDING — do not use placeholder values",
    "scale": {}
  }
}
```

### Rules (locked regardless of spacing values)
1. Use spacing tokens from the scale — no arbitrary pixel/rem values.
2. Consistent section padding: all pages must use the same vertical rhythm.

## Corner Radius

```json
{
  "radius": {
    "_status": "PENDING — do not use placeholder values",
    "none": "0",
    "sm": "",
    "md": "",
    "lg": "",
    "xl": "",
    "full": "9999px"
  }
}
```

### Rules (locked regardless of radius values)
1. Buttons are pill-shaped (`radius.full`).
2. Cards use the defined card radius — not pill silhouettes.
3. Navbar is a restrained rounded rectangle — a specific radius, not `full`.

## Elevation / Shadows

```json
{
  "shadows": {
    "_status": "PENDING — do not use placeholder values"
  }
}
```

## Activation Criteria

This skill's token values are **not active** until the following conditions are met:
- [ ] Color mode confirmed (dark/light/hybrid)
- [ ] Color palette values provided and approved
- [ ] Typography pairings selected and approved
- [ ] Spacing scale confirmed
- [ ] Corner radius values confirmed

Once all checkboxes are marked, remove the `_status` fields and this section.
