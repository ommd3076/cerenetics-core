'use client';

import React, { useState } from 'react';
import { CapabilityDomain } from '@/types/capabilities';
import { Plus, Minus, CheckCircle2 } from 'lucide-react';
import { trackEvent } from '@/lib/analytics';

interface WorkAccordionProps {
  domains: CapabilityDomain[];
}

export function WorkAccordion({ domains }: WorkAccordionProps) {
  const [expandedIds, setExpandedIds] = useState<string[]>(['domain-01', 'domain-02']);

  const toggleDomain = (id: string) => {
    setExpandedIds((prev) => {
      const isExpanded = prev.includes(id);
      if (!isExpanded) {
        trackEvent('capability_expand', { domainId: id });
        return [...prev, id];
      } else {
        return prev.filter((item) => item !== id);
      }
    });
  };

  return (
    <div className="flex flex-col divide-y divide-border-structural/30 border-y border-border-structural/30">
      {domains.map((domain) => {
        const isExpanded = expandedIds.includes(domain.id);
        return (
          <section
            key={domain.id}
            id={domain.id}
            className="py-8 sm:py-10 transition-colors scroll-mt-24"
          >
            <button
              onClick={() => toggleDomain(domain.id)}
              className="w-full flex items-start justify-between gap-6 text-left group focus-visible:outline-2 focus-visible:outline-cta rounded-sm py-2"
              aria-expanded={isExpanded}
              aria-controls={`content-${domain.id}`}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-8">
                <span className="font-heading font-normal text-3xl sm:text-4xl text-text-primary group-hover:text-cta transition-colors">
                  {domain.number}
                </span>
                <div>
                  <h3 className="font-heading font-normal text-2xl sm:text-3xl text-text-primary group-hover:text-cta transition-colors">
                    {domain.title}
                  </h3>
                  <p className="font-body text-sm sm:text-base text-text-muted mt-1 max-w-[60ch] font-normal">
                    {domain.subtitle}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border-structural/40 text-text-primary group-hover:border-cta group-hover:bg-panel transition-all shrink-0">
                {isExpanded ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
              </div>
            </button>

            <div
              id={`content-${domain.id}`}
              className={`transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                isExpanded ? 'mt-8 max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 sm:p-8 rounded-lg bg-white border border-border-structural/30 flex flex-col gap-8">
                <p className="font-body text-base text-text-primary leading-relaxed max-w-[70ch] font-normal">
                  {domain.summary}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {domain.items.map((item) => (
                    <div
                      key={item.id}
                      className="p-6 rounded-md bg-panel/40 border border-border-structural/30 flex flex-col justify-between"
                    >
                      <div>
                        <h4 className="font-heading font-normal text-lg text-text-primary mb-2">
                          {item.title}
                        </h4>
                        <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed mb-4 font-normal">
                          {item.summary}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-border-structural/20">
                        <span className="font-heading font-medium text-xs uppercase tracking-wider text-text-primary block mb-2">
                          Core Deliverables
                        </span>
                        <ul className="flex flex-col gap-1.5">
                          {item.deliverables.map((deliv, idx) => (
                            <li key={idx} className="flex items-start gap-2 font-body text-xs text-text-muted">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-success shrink-0 mt-0.5" />
                              <span>{deliv}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>

                {domain.isForwardLooking && domain.forwardLookingNote && (
                  <div className="p-4 rounded-md border border-border-structural/40 bg-panel/60 font-body text-xs sm:text-sm text-text-primary">
                    <span className="font-medium font-heading">R&D Scope: </span>
                    {domain.forwardLookingNote}
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
