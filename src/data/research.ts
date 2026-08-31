import { ResearchReference } from '@/types/research';

export const researchReferences: ResearchReference[] = [
  {
    id: 'paper-01',
    number: '01',
    title: 'Autonomous Orchestration of Multi-Agent Systems for Complex Software Synthesis',
    authors: ['Cerenetics Research Group', 'Systems Engineering Lab'],
    venue: 'Applied Systems & Agentic Architectures Journal',
    year: 2025,
    summary: 'A formal framework for state-machine bounds, task decomposition, and deterministic verification protocols in autonomous multi-agent engineering environments.',
    url: 'https://cerenetics.com/research/multi-agent-orchestration-2025.pdf',
    isVerified: true,
  },
  {
    id: 'paper-02',
    number: '02',
    title: 'Deterministic Guardrails for Non-Deterministic Reasoning in Applied Workflows',
    authors: ['Cerenetics Research Group'],
    venue: 'Computational Systems Engineering Review',
    year: 2024,
    summary: 'Architectural patterns for wrapping probabilistic large-language-model outputs with formal schema validators and fail-closed state machines in high-reliability contexts.',
    url: 'https://cerenetics.com/research/deterministic-guardrails-2024.pdf',
    isVerified: true,
  },
];
