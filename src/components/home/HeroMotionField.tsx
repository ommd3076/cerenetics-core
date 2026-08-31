'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useMotion } from '@/components/motion/MotionProvider';
import gsap from 'gsap';

export function HeroMotionField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const highlightRef = useRef<SVGPathElement>(null);
  const { prefersReducedMotion, isMounted } = useMotion();

  useEffect(() => {
    if (!containerRef.current || !logoWrapperRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 0.5,
      });

      // 0.0 - 1.5s: Path light travel + Logo Assembly
      tl.set(logoWrapperRef.current, { opacity: 0, scale: 0.92, clipPath: 'inset(10% 10% 10% 10%)' })
        .set(haloRef.current, { opacity: 0, scale: 0.85 })
        .to(logoWrapperRef.current, {
          opacity: 1,
          scale: 1,
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: 1.4,
          ease: 'power3.out',
        }, 0.2);

      if (highlightRef.current) {
        tl.fromTo(
          highlightRef.current,
          { strokeDashoffset: 600 },
          { strokeDashoffset: 0, duration: 2.0, ease: 'power1.inOut' },
          0
        );
      }

      // 1.5 - 3.0s: Settle into untouched mark (1% settle)
      tl.to(logoWrapperRef.current, {
        scale: 1.01,
        duration: 0.8,
        ease: 'sine.inOut',
      }, 1.5)
      .to(logoWrapperRef.current, {
        scale: 1.0,
        duration: 0.7,
        ease: 'sine.out',
      }, 2.3);

      // 3.0 - 5.0s: Grid Halo Expansion
      tl.to(haloRef.current, {
        opacity: 0.7,
        scale: 1.15,
        duration: 1.2,
        ease: 'power2.out',
      }, 3.0)
      .to(haloRef.current, {
        opacity: 0,
        scale: 1.25,
        duration: 0.8,
        ease: 'power2.in',
      }, 4.2);

      // 5.0 - 7.0s: Hold identity complete & still
      tl.to(logoWrapperRef.current, {
        opacity: 1,
        duration: 2.0,
      }, 5.0);

      // 7.0 - 9.0s: Smooth Deconstruct & Reset Loop
      tl.to(logoWrapperRef.current, {
        opacity: 0,
        scale: 0.94,
        clipPath: 'inset(15% 15% 15% 15%)',
        duration: 1.5,
        ease: 'power2.inOut',
      }, 7.2);

    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion, isMounted]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[460px] lg:min-h-[580px] bg-panel/40 flex items-center justify-center p-8 sm:p-12 select-none overflow-hidden"
      aria-label="Cerenetics visual identity field"
    >
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#a3b4bc 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Architectural Trace Lines with Travelling Light Highlight */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
      >
        <path
          d="M 40 120 H 180 V 320 H 420"
          stroke="#a3b4bc"
          strokeWidth="1"
          strokeOpacity="0.4"
        />
        <path
          d="M 600 480 H 420 V 260 H 260"
          stroke="#a3b4bc"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* Animated Highlight Trace */}
        <path
          ref={highlightRef}
          d="M 40 120 H 180 V 320 H 420"
          stroke="#0A1128"
          strokeWidth="2"
          strokeDasharray="80 500"
          strokeLinecap="round"
        />
      </svg>

      {/* Momentary Motion Grid Halo */}
      <div
        ref={haloRef}
        className="absolute w-64 h-64 sm:w-80 sm:h-80 border border-cta/30 rounded-[4px] pointer-events-none"
      />

      {/* Authoritative Logo Container */}
      <div
        ref={logoWrapperRef}
        className="relative z-10 w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center bg-white border border-border-structural shadow-sm p-8"
      >
        <Image
          src="/logo.svg"
          alt="Cerenetics"
          width={240}
          height={240}
          className="w-full h-full object-contain"
          priority
        />
      </div>
    </div>
  );
}
