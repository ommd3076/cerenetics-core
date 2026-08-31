import { SiteNavigation } from '@/types/navigation';

export const siteNavigation: SiteNavigation = {
  mainNav: [
    { label: 'Work', href: '/work', description: 'Capability architecture and domains' },
    { label: 'Approach', href: '/approach', description: 'Operating principles and engineering philosophy' },
    { label: 'About', href: '/about', description: 'About Cerenetics and technical background' },
    { label: 'Contact', href: '/contact', description: 'Direct channels and engagement scoping' },
  ],
  footerNav: {
    capabilities: [
      { label: 'Digital Products', href: '/work#domain-01' },
      { label: 'Business Systems', href: '/work#domain-02' },
      { label: 'Systems Engineering', href: '/work#domain-03' },
      { label: 'Advanced Systems', href: '/work#domain-04' },
      { label: 'AI & Agentic Systems', href: '/work#domain-05' },
      { label: 'Specialised Engineering', href: '/work#domain-06' },
    ],
    company: [
      { label: 'Work', href: '/work' },
      { label: 'Approach', href: '/approach' },
      { label: 'About', href: '/about' },
      { label: 'Future', href: '/future' },
      { label: 'Contact', href: '/contact' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
    ],
  },
};
