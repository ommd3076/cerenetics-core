import React from 'react';
import { Container } from '@/components/layout/Container';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { contactConfig } from '@/data/contact-config';

export function HomeContactClose() {
  return (
    <section className="w-full py-20 lg:py-28 border-t border-border-structural/20 bg-background">
      <Container size="narrow">
        <div className="flex flex-col items-center text-center p-8 sm:p-12 lg:p-16 rounded-xl bg-panel border border-border-structural/30">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ DIRECT ENGAGEMENT ]
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight mt-4 text-text-primary">
            Ready to scope a high-fidelity system?
          </h2>
          <p className="font-body font-normal text-base sm:text-lg text-text-muted mt-4 leading-relaxed max-w-[50ch]">
            We partner with ambitious founders, engineering teams, and enterprise architects to design and build mission-aligned software.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
            <PrimaryButton
              href="/contact"
              size="lg"
            >
              Start a conversation
            </PrimaryButton>
            <PrimaryButton
              href={`mailto:${contactConfig.publicEmail}`}
              variant="outline"
              size="lg"
              isExternal
            >
              Direct Email
            </PrimaryButton>
          </div>
          <p className="font-body text-xs text-text-muted mt-6">
            Inquiries reviewed by senior engineering • Direct response within 1–2 business days
          </p>
        </div>
      </Container>
    </section>
  );
}
