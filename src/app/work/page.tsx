import type { Metadata } from 'next';
import { capabilityDomains, capabilityProgression } from '@/data/capabilities';
import { researchReferences } from '@/data/research';
import { WorkAccordion } from '@/components/work/WorkAccordion';
import { TextLink } from '@/components/ui/TextLink';
import { FileText } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Work & Capabilities — Cerenetics',
  description: 'Explore the complete six-domain engineering capability inventory of Cerenetics, from digital products to autonomous agentic architectures.',
};

export default function WorkPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-16 border-b border-border-structural/40">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ WORK / 01 ]
          </span>
          <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary mt-2">
            Capability Architecture
          </h1>
          <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mt-4 leading-relaxed">
            Our engineering engagements span full-lifecycle digital product development, high-throughput backend infrastructure, and autonomous agentic workflows.
          </p>

          {/* Staging Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
            {capabilityProgression.map((stage) => (
              <div
                key={stage.step}
                className="p-6 bg-panel/30 border border-border-structural/40 rounded-[4px]"
              >
                <div className="font-data text-xs text-text-muted uppercase">
                  STAGE {stage.step}
                </div>
                <div className="font-heading font-normal text-lg text-text-primary mt-1">
                  {stage.title}
                </div>
                <p className="font-body text-xs text-text-muted mt-2 leading-relaxed">
                  {stage.summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accordions */}
        <div className="py-12">
          <WorkAccordion domains={capabilityDomains} />
        </div>

        {/* Research Foundation */}
        <div className="pt-16 border-t border-border-structural/40">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ RESEARCH / 02 ]
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl text-text-primary mt-2 mb-8">
            Published Research
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {researchReferences.map((paper) => (
              <div
                key={paper.id}
                className="p-8 border border-border-structural/50 bg-white flex flex-col justify-between rounded-[4px]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <FileText className="w-3.5 h-3.5 text-text-primary" />
                      <span className="font-data text-xs text-text-muted">
                        PAPER {paper.number}
                      </span>
                    </div>
                    <span className="font-data text-xs text-text-muted">{paper.year}</span>
                  </div>
                  <h3 className="font-heading font-normal text-xl text-text-primary mb-2">
                    {paper.title}
                  </h3>
                  <p className="font-body text-sm text-text-muted leading-relaxed mb-4">
                    {paper.summary}
                  </p>
                  <div className="font-data text-xs text-text-muted">
                    Venue: {paper.venue}
                  </div>
                </div>

                {paper.url && (
                  <div className="mt-6 pt-4 border-t border-border-structural/20">
                    <TextLink href={paper.url} isExternal showArrow>
                      Read Research Preprint
                    </TextLink>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
