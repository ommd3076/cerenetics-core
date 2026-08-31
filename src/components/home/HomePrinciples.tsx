import React from 'react';
import Link from 'next/link';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { principles } from '@/data/principles';
import { ArrowRight } from 'lucide-react';

export function HomePrinciples() {
  const previewPrinciples = principles.slice(0, 3);

  return (
    <section className="w-full py-20 lg:py-28 border-t border-border-structural/20 bg-background">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionHeader
            eyebrow="OPERATING PRINCIPLES"
            title="Disciplined engineering without hype"
            description="We adhere to strict systems principles designed to avoid AI-bubble clichés, brittle abstractions, and unmaintainable architectures."
          />
          <Link
            href="/approach"
            className="inline-flex items-center gap-1.5 font-heading text-sm text-text-primary hover:text-cta group self-start sm:self-end border-b border-cta pb-1 whitespace-nowrap font-normal"
          >
            <span>Read All Principles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {previewPrinciples.map((p) => (
            <div
              key={p.number}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-md bg-white border border-border-structural/40"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-heading font-normal text-3xl text-text-primary">
                    {p.number}
                  </span>
                  <span className="font-pixel-accent text-text-muted">
                    {`[ PRINCIPLE // ${p.number} ]`}
                  </span>
                </div>
                <h3 className="font-heading font-normal text-lg text-text-primary mt-4 leading-snug">
                  {p.title}
                </h3>
                <p className="font-body text-sm text-text-muted mt-3 leading-relaxed font-normal">
                  {p.statement}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
