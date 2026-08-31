import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const selectedProjects = [
  {
    number: '01',
    title: 'High-Throughput Operational Logic',
    domain: 'Business Systems',
    description: 'Deterministic workflow pipelines and back-office synchronization layers built to eliminate manual operational friction in multi-party transactions.',
    tags: ['State Machines', 'Audit Logging', 'Event Queues'],
  },
  {
    number: '02',
    title: 'Precision Web Applications & Design Systems',
    domain: 'Digital Products',
    description: 'Full-stack application architectures engineered for sub-100ms interaction latency with multi-platform design token synchronization.',
    tags: ['Next.js Architecture', 'DTCG Tokens', 'Accessibility'],
  },
  {
    number: '03',
    title: 'Bounded Retrieval & Knowledge Engines',
    domain: 'AI & Agentic Systems',
    description: 'Hybrid vector and keyword retrieval systems featuring deterministic citation tracking, provenance verification, and hallucination containment.',
    tags: ['Hybrid RAG', 'Schema Enforced', 'Evaluation Harnesses'],
  },
];

export function HomeSelectedWork() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-border-structural bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-border-structural/40">
          <div>
            <span className="font-pixel-accent text-text-muted uppercase">
              [ WORK / 01 ]
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary mt-2">
              Selected Engagements
            </h2>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 font-heading text-sm text-text-primary hover:text-cta border-b border-cta pb-0.5"
          >
            <span>View All Capabilities</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Large Editorial Project Rows */}
        <div className="divide-y divide-border-structural/40">
          {selectedProjects.map((project) => (
            <div
              key={project.number}
              className="py-10 sm:py-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start group"
            >
              <div className="lg:col-span-2">
                <span className="font-heading font-normal text-3xl sm:text-4xl text-text-muted group-hover:text-text-primary transition-colors">
                  {project.number}
                </span>
              </div>
              <div className="lg:col-span-6">
                <span className="font-data text-xs uppercase tracking-wider text-text-muted block mb-2">
                  {project.domain}
                </span>
                <h3 className="font-heading font-normal text-2xl sm:text-3xl text-text-primary mb-4 leading-snug">
                  {project.title}
                </h3>
                <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>
              <div className="lg:col-span-4 flex flex-wrap gap-2 lg:justify-end pt-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-panel/60 border border-border-structural/30 text-xs font-mono text-text-primary rounded-[2px]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
