import { Principle } from '@/types/principles';

export const principles: Principle[] = [
  {
    number: '01',
    title: 'Problem first. Architecture second. Technology third.',
    statement: 'Software must solve concrete operational friction before selecting tools, frameworks, or models.',
    elaboration: 'We do not begin with architectural dogma or trendy technology stacks. Every system starts with a rigorous understanding of the underlying domain constraints, user requirements, and economic outcomes.',
  },
  {
    number: '02',
    title: 'Deterministic software and sound data models before AI.',
    statement: 'Generative systems belong on top of hardened databases, typed contracts, and predictable business logic.',
    elaboration: 'AI cannot fix broken foundations. We prioritize strongly typed schemas, reliable database models, and predictable deterministic workflows before introducing non-deterministic intelligence layers.',
  },
  {
    number: '03',
    title: 'Augment useful existing systems before replacement.',
    statement: 'Respect production stability. Deliver value through surgical integration rather than catastrophic full rewrites.',
    elaboration: 'Legacy systems frequently embody years of embedded business wisdom. Wherever feasible, we build clean integration adapters and modular extensions that modernize capability without endangering operations.',
  },
  {
    number: '04',
    title: 'AI only where it adds identifiable operational value.',
    statement: 'AI is not an aesthetic layer. We deploy non-deterministic components only where deterministic solutions cannot achieve the outcome.',
    elaboration: 'We measure AI deployment against concrete operational metrics: latency reduction, semantic comprehension, or automated synthesis. If a standard relational query or state machine solves the problem, we use the deterministic solution.',
  },
  {
    number: '05',
    title: 'Human review for consequential workflows.',
    statement: 'Critical decisions, high-impact state transitions, and legal/financial boundary actions remain operator-supervised.',
    elaboration: 'Autonomous systems should accelerate human analysis, not obscure responsibility. High-stakes mutations include clear audit trails, explainability context, and explicit human confirmation gates.',
  },
  {
    number: '06',
    title: 'Explicit data and responsibility boundaries.',
    statement: 'Client systems retain strict data custody. Clear interfaces isolate proprietary logic from external API dependencies.',
    elaboration: 'We design architectures where sensitive customer data never leaves client-governed environments without explicit authorization. Boundaries between proprietary intellectual property and third-party models are strictly isolated.',
  },
];
