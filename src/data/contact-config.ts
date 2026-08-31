import { ProjectStage } from '@/types/contact';

export const contactConfig = {
  publicEmail: 'contact@cerenetics.com',
  responseCommitment: 'Inquiries are reviewed by engineering within one to two business days.',
  projectStages: [
    { value: 'exploring' as ProjectStage, label: 'Exploring (Initial discovery and feasibility assessment)' },
    { value: 'scoping' as ProjectStage, label: 'Scoping (Defining specifications, milestones, and architecture)' },
    { value: 'ready_to_build' as ProjectStage, label: 'Ready to build (Specifications prepared, seeking implementation team)' },
    { value: 'improving_existing' as ProjectStage, label: 'Improving an existing system (Refining architecture, latency, or integration)' },
  ],
  industries: [
    'Enterprise Software',
    'FinTech & Financial Infrastructure',
    'Deep Tech & AI Infrastructure',
    'Industrial & Advanced Manufacturing',
    'Media & Interactive Platforms',
    'Healthcare & BioTech Systems',
    'Other Specialized Domain',
  ],
};
