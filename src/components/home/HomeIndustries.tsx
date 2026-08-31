import React from 'react';

const industriesList = [
  {
    number: '01',
    title: 'Financial & Capital Infrastructure',
    summary: 'High-integrity transaction pipelines, deterministic audit logging, and core operational logic for financial organisations.',
  },
  {
    number: '02',
    title: 'Logistics & Supply Operations',
    summary: 'Real-time orchestration engines, multi-party tracking, and administrative dispatch consoles for distributed supply chains.',
  },
  {
    number: '03',
    title: 'Enterprise Operational Systems',
    summary: 'Custom back-office platforms, automated compliance gates, and synchronized data layers replacing legacy manual workflows.',
  },
  {
    number: '04',
    title: 'Technical Platforms & Developer Systems',
    summary: 'Developer tooling, schema validation suites, gRPC/REST API layers, and multi-platform design token architectures.',
  },
];

export function HomeIndustries() {
  return (
    <section className="w-full py-20 lg:py-28 border-b border-border-structural bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="pb-12 border-b border-border-structural/40">
          <span className="font-pixel-accent text-text-muted uppercase">
            [ INDUSTRIES / 03 ]
          </span>
          <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-tight text-text-primary mt-2">
            Applied Industry Domains
          </h2>
          <p className="font-body text-sm sm:text-base text-text-muted max-w-2xl mt-3">
            We partner with organisations navigating complex operational constraints, where reliability, data integrity, and deterministic execution are non-negotiable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
          {industriesList.map((ind) => (
            <div
              key={ind.number}
              className="p-8 border border-border-structural/50 bg-white flex flex-col justify-between rounded-[4px]"
            >
              <div>
                <span className="font-heading font-normal text-2xl text-text-muted mb-4 block">
                  {ind.number}
                </span>
                <h3 className="font-heading font-normal text-xl sm:text-2xl text-text-primary mb-3">
                  {ind.title}
                </h3>
                <p className="font-body text-sm text-text-muted leading-relaxed">
                  {ind.summary}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
