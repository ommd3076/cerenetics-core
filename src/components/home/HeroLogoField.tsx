'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useMotion } from '@/components/motion/MotionProvider';
import gsap from 'gsap';

export function HeroLogoField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const plane1Ref = useRef<HTMLDivElement>(null);
  const plane2Ref = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion, isMounted } = useMotion();

  useEffect(() => {
    if (!containerRef.current || !logoRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: 'power2.out' },
      });

      // 1. Solid-plane entrance (0-450ms)
      if (plane1Ref.current && plane2Ref.current) {
        tl.fromTo(
          [plane1Ref.current, plane2Ref.current],
          { opacity: 0, scale: 0.96 },
          { opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 },
          0
        );
      }

      // 2. Logo reveal (250-950ms)
      if (logoRef.current) {
        tl.fromTo(
          logoRef.current,
          { opacity: 0, scale: 0.95, y: 12 },
          { opacity: 1, scale: 1, y: 0, duration: 0.7, ease: 'power3.out' },
          0.25
        );
      }

      // 3. Precision settle (850-1250ms)
      tl.to(
        logoRef.current,
        { scale: 1, duration: 0.4, ease: 'sine.out' },
        0.85
      );

      // Optional subtle resting parallax on planes (max 2-4px)
      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current || !plane1Ref.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const relX = (e.clientX - rect.left) / rect.width - 0.5;
        const relY = (e.clientY - rect.top) / rect.height - 0.5;

        gsap.to(plane1Ref.current, {
          x: relX * 4,
          y: relY * 4,
          duration: 1.5,
          ease: 'power1.out',
        });
      };

      const container = containerRef.current;
      container?.addEventListener('mousemove', handleMouseMove);

      return () => {
        container?.removeEventListener('mousemove', handleMouseMove);
      };
    }, containerRef);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion, isMounted]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[380px] sm:min-h-[440px] lg:min-h-[520px] flex items-center justify-center overflow-hidden rounded-lg bg-panel/30 border border-border-structural/30 select-none p-6 sm:p-10"
      aria-label="Cerenetics identity visual field"
    >
      {/* Supporting Flat Solid Geometric Planes */}
      <div
        ref={plane1Ref}
        className="absolute w-4/5 h-4/5 rounded-md bg-white border border-border-structural/20 pointer-events-none"
      />
      <div
        ref={plane2Ref}
        className="absolute w-3/5 h-3/5 rounded-md bg-panel/60 border border-border-structural/30 pointer-events-none"
      />

      {/* Authoritative Logo Asset */}
      <div
        ref={logoRef}
        className="relative z-10 flex items-center justify-center p-6"
      >
        <Image
          src="/logo.svg"
          alt="Cerenetics"
          width={360}
          height={360}
          className="w-52 sm:w-64 md:w-80 h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
