# Workers Tier — 🟢 ACTIVE

The design foundation has been confirmed and locked. The Worker tier is now active for executing scoped tasks defined by Directors.

## Operating Principles for Workers

1. **Strict Token Adherence**: Never use raw hex/rgb or arbitrary font/spacing values. Always use Tailwind theme classes or semantic CSS variables mapped from `/design-tokens/`.
2. **Single-Task Scope**: Each worker executes one well-defined task with clear acceptance criteria.
3. **Component Patterns**: Follow rules in `.agents/skills/cerenetics-component-patterns/SKILL.md` (e.g. pill buttons, 8px card radius, 44px min touch target).
4. **Copy & Voice**: Follow guidelines in `.agents/skills/cerenetics-voice/SKILL.md` (no forbidden claims, contextual tone register).
5. **Motion Calibration**: Use locked transition durations (`150ms`/`300ms`) and fluid easing `[0.16, 1, 0.3, 1]`. Motion graphics and GSAP animation timelines are calibrated during page building.
