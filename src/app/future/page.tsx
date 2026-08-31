import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Future & Technical Horizon — Cerenetics',
  description: 'Our grounded technical direction: deterministic agentic runtimes, formal protocol verification, and embedded intelligence.',
};

export default function FuturePage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="p-8 sm:p-16 lg:p-20 bg-panel/30 border border-border-structural rounded-[4px] flex flex-col items-start gap-8">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ HORIZON / 01 ]
          </span>

          <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight">
            Deterministic Intelligence
          </h1>

          <p className="font-body text-lg sm:text-xl text-text-primary leading-relaxed max-w-3xl">
            The future of operational software lies at the intersection of non-deterministic generative models and mathematically bounded execution environments.
          </p>

          <div className="flex flex-col gap-6 py-8 border-y border-border-structural/40 w-full">
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-data text-xs uppercase tracking-wider text-text-muted sm:w-36 shrink-0">
                DIRECTION 01
              </span>
              <p className="font-body text-base text-text-primary">
                <strong className="font-heading font-medium">State-Bounded Agent Governance:</strong> Protocols ensuring multi-agent reasoning converges within verifiable state machines.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-data text-xs uppercase tracking-wider text-text-muted sm:w-36 shrink-0">
                DIRECTION 02
              </span>
              <p className="font-body text-base text-text-primary">
                <strong className="font-heading font-medium">Edge Inference &amp; Local Sovereignty:</strong> Enabling enterprise systems to run high-precision intelligence locally without data leakage.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6">
              <span className="font-data text-xs uppercase tracking-wider text-text-muted sm:w-36 shrink-0">
                DIRECTION 03
              </span>
              <p className="font-body text-base text-text-primary">
                <strong className="font-heading font-medium">Formal Contract Synthesis:</strong> Automated generation and verification of typed interfaces between probabilistic models and deterministic APIs.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="/work"
              className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-[4px] transition-all"
            >
              EXPLORE WORK
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-text-primary border border-border-structural hover:bg-panel font-heading text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-[4px] transition-all"
            >
              DISCUSS COLLABORATION
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
