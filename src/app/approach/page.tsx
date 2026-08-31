import type { Metadata } from 'next';
import Link from 'next/link';
import { principles } from '@/data/principles';

export const metadata: Metadata = {
  title: 'Approach & Operating Principles — Cerenetics',
  description: 'Our engineering approach: Problem first, deterministic models before AI, and human review for consequential workflows.',
};

export default function ApproachPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="pb-16 border-b border-border-structural/40">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ APPROACH / 01 ]
          </span>
          <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary mt-2">
            Operating Principles
          </h1>
          <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mt-4 leading-relaxed">
            We do not follow fleeting tech-bubble methodologies. Our practice is governed by six immutable systems principles designed for long-term production resilience.
          </p>
        </div>

        <div className="divide-y divide-border-structural/40 my-8">
          {principles.map((principle) => (
            <article
              key={principle.number}
              className="py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start"
            >
              <div className="lg:col-span-2">
                <span className="font-heading font-normal text-4xl sm:text-5xl text-text-muted">
                  {principle.number}
                </span>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-3">
                <h2 className="font-heading font-normal text-2xl sm:text-3xl text-text-primary leading-snug">
                  {principle.title}
                </h2>
                <p className="font-body text-base sm:text-lg font-medium text-cta leading-relaxed">
                  {principle.statement}
                </p>
              </div>
              <div className="lg:col-span-5">
                <p className="font-body text-base text-text-muted leading-relaxed">
                  {principle.elaboration}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="p-10 bg-panel/30 border border-border-structural/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 rounded-[4px] mt-8">
          <div>
            <h3 className="font-heading font-normal text-2xl text-text-primary">
              Have an architecture aligned with these principles?
            </h3>
            <p className="font-body text-sm text-text-muted mt-1">
              We conduct transparent technical scoping and architectural reviews.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-[4px] transition-all shrink-0"
          >
            START A CONVERSATION
          </Link>
        </div>
      </div>
    </div>
  );
}
