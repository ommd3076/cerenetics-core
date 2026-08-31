import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Cerenetics',
  description: 'Cerenetics is an applied engineering practice designing digital infrastructure, business systems, and autonomous architectures.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="pb-12 border-b border-border-structural/40">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ ABOUT / 01 ]
          </span>
          <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl tracking-tight text-text-primary mt-2">
            Engineering for real-world operations
          </h1>
          <p className="font-body text-base sm:text-lg text-text-muted max-w-2xl mt-4 leading-relaxed">
            Cerenetics is a specialised systems engineering practice. We build digital products, custom operational software, and deterministic agentic runtimes for organisations operating in complex environments.
          </p>
        </div>

        {/* Narrative Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 border-b border-border-structural/40">
          <div className="lg:col-span-4">
            <h2 className="font-heading font-normal text-2xl text-text-primary">
              Our Core Discipline
            </h2>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-6 font-body text-base text-text-muted leading-relaxed">
            <p>
              We believe that durable software begins with sound architectural fundamentals: clean data models, explicit state boundaries, and deterministic operational logic before introducing probabilistic AI models.
            </p>
            <p>
              Our engagements are led directly by senior engineers and architects who design systems to withstand high throughput, strict regulatory requirements, and real-world operational friction.
            </p>
          </div>
        </div>

        {/* Link to Future */}
        <div className="pt-16 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="font-heading font-normal text-2xl text-text-primary">
              Technical Horizon &amp; Applied Research
            </h3>
            <p className="font-body text-sm text-text-muted mt-1">
              Explore our research into state-bounded multi-agent orchestration and local edge runtimes.
            </p>
          </div>
          <Link
            href="/future"
            className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-[4px] transition-all shrink-0"
          >
            EXPLORE THE FUTURE
          </Link>
        </div>
      </div>
    </div>
  );
}
