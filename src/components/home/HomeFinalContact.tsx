import React from 'react';
import Link from 'next/link';

export function HomeFinalContact() {
  return (
    <section className="w-full py-24 lg:py-32 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="p-10 sm:p-16 lg:p-20 bg-panel/30 border border-border-structural flex flex-col items-start gap-6 rounded-[4px]">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ ENGAGEMENT / 04 ]
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary max-w-2xl">
            Ready to scope an operational architecture for your organisation?
          </h2>
          <p className="font-body text-sm sm:text-base text-text-muted max-w-xl">
            Inquiries are reviewed directly by practicing systems engineers within one to two business days.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-8 py-4 rounded-[4px] transition-all"
            >
              START A CONVERSATION
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
