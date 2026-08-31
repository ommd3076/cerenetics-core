import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { capabilityProgression } from '@/data/capabilities';

export function HomeProgression() {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-border-structural/20 bg-background">
      <Container>
        <SectionHeader
          eyebrow="ARCHITECTURAL STAGING"
          title="From digital interface to autonomous execution"
          description="Every system is constructed on disciplined layers: clean interactive surfaces, robust business logic, high-throughput topologies, and bounded intelligence."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilityProgression.map((stage) => (
            <div
              key={stage.step}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-md bg-white border border-border-structural/40"
            >
              <div>
                <div className="flex items-center justify-between pb-6 border-b border-border-structural/20">
                  <span className="font-heading font-normal text-2xl text-text-primary">
                    {stage.step}
                  </span>
                  <span className="font-pixel-accent text-text-muted">
                    {`[ STAGE // ${stage.step} ]`}
                  </span>
                </div>
                <h3 className="font-heading font-normal text-lg text-text-primary mt-4">
                  {stage.title}
                </h3>
                <p className="font-body text-sm text-text-muted mt-2 leading-relaxed font-normal">
                  {stage.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
