import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { researchReferences } from '@/data/research';
import { TextLink } from '@/components/ui/TextLink';
import { FileText } from 'lucide-react';

export function HomeResearch() {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-border-structural/20 bg-background">
      <Container>
        <SectionHeader
          eyebrow="RESEARCH FOUNDATION"
          title="Verified theoretical contributions"
          description="Our commercial engineering builds directly upon our published findings in multi-agent orchestration and deterministic validation boundaries."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {researchReferences.map((paper) => (
            <div
              key={paper.id}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-md bg-white border border-border-structural/40"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-text-primary" />
                    <span className="font-pixel-accent text-text-muted">
                      {`[ PAPER // ${paper.number} ]`}
                    </span>
                  </div>
                  <span className="font-data text-xs text-text-muted">{paper.year}</span>
                </div>
                <h3 className="font-heading font-normal text-lg sm:text-xl text-text-primary leading-snug">
                  {paper.title}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed font-normal">
                  {paper.summary}
                </p>
                <div className="font-data text-xs text-text-muted">
                  <span className="font-medium text-text-primary">Venue:</span> {paper.venue}
                </div>
              </div>

              {paper.url && (
                <div className="mt-6 pt-4 border-t border-border-structural/20">
                  <TextLink href={paper.url} isExternal showArrow>
                    View Paper Preprint
                  </TextLink>
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
