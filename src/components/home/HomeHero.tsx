import React from 'react';
import Link from 'next/link';
import { HeroMotionField } from './HeroMotionField';

export function HomeHero() {
  return (
    <section className="w-full min-h-[calc(100vh-5rem)] grid grid-cols-1 lg:grid-cols-2 border-b border-border-structural">
      {/* Left Monolith: Pure White, Centred, Generous Negative Space */}
      <div className="bg-white p-8 sm:p-14 lg:p-18 xl:p-22 flex flex-col justify-between items-start text-left border-b lg:border-b-0 lg:border-r border-border-structural">
        {/* Micro-Accent: VT323 subtle structural tag */}
        <span className="font-pixel-accent text-text-muted uppercase">
          [ 01 // OVERVIEW ]
        </span>

        {/* Primary Display Headline in Space Grotesk 400 (Approved Line) */}
        <div className="my-auto py-8 max-w-xl">
          <h1 className="font-heading font-normal text-4xl sm:text-5xl lg:text-6xl text-text-primary leading-[1.05] tracking-tight uppercase">
            THE DIGITAL LAYER<br />
            FOR REAL-WORLD<br />
            ORGANISATIONS.
          </h1>

          {/* Preferred Supporting Copy */}
          <p className="font-body font-normal text-base sm:text-lg text-text-muted max-w-[44ch] leading-relaxed mt-6 mb-8">
            We design and build custom software, digital products, and operational systems for organisations working in the real world.
          </p>

          {/* Single Primary Action Button (4px radius, no pills) */}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-8 py-3.5 rounded-[4px] transition-all duration-150 active:scale-[0.98]"
          >
            START A CONVERSATION
          </Link>
        </div>

        {/* Bottom Micro Marker */}
        <div className="pt-6 font-data text-xs text-text-muted/60 uppercase tracking-wider">
          Cerenetics Systems Group • 2026
        </div>
      </div>

      {/* Right Monolith: Vivid-Motion Identity Field */}
      <div className="w-full h-full">
        <HeroMotionField />
      </div>
    </section>
  );
}
