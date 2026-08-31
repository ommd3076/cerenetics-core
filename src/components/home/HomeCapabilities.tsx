import React from 'react';
import Link from 'next/link';
import { capabilityDomains } from '@/data/capabilities';
import { ArrowUpRight } from 'lucide-react';

export function HomeCapabilities() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-border-structural bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-12 border-b border-border-structural/40">
          <div>
            <span className="font-pixel-accent text-text-muted uppercase">
              [ CAPABILITIES / 02 ]
            </span>
            <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary mt-2">
              Engineering Disciplines
            </h2>
          </div>
          <p className="font-body text-sm text-text-muted max-w-md">
            Our engineering practice spans six core disciplines, ranging from high-craft digital interfaces to bounded autonomous runtimes.
          </p>
        </div>

        {/* Structured Editorial Rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
          {capabilityDomains.map((domain) => (
            <Link
              key={domain.id}
              href={`/work#${domain.id}`}
              className="p-8 bg-panel/30 border border-border-structural hover:border-cta transition-colors flex flex-col justify-between group rounded-[4px]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-data text-xs uppercase tracking-wider text-text-muted">
                    DOMAIN {domain.number}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-text-muted group-hover:text-cta transition-colors" />
                </div>
                <h3 className="font-heading font-normal text-xl text-text-primary mb-3">
                  {domain.title}
                </h3>
                <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed mb-6">
                  {domain.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-border-structural/30 font-data text-xs text-text-muted">
                {domain.items.length} Production Modules
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
