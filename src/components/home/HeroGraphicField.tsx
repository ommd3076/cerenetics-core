'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useMotion } from '@/components/motion/MotionProvider';
import gsap from 'gsap';

export function HeroGraphicField() {
  const containerRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion } = useMotion();

  useEffect(() => {
    if (!containerRef.current || prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      if (terminalRef.current) {
        tl.fromTo(
          terminalRef.current,
          { opacity: 0, y: 20, scale: 0.95 },
          { opacity: 1, y: 0, scale: 1, duration: 0.8 },
          0.1
        );
      }

      if (markRef.current) {
        tl.fromTo(
          markRef.current,
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.7, ease: 'back.out(1.2)' },
          0.3
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full min-h-[480px] lg:min-h-[640px] bg-[#0A1128] text-white flex flex-col justify-between p-6 sm:p-10 select-none overflow-hidden"
      aria-label="Cerenetics graphic canvas"
    >
      {/* Background Layered ASCII Art Cloud / Matrix Pattern */}
      <div className="absolute inset-0 p-6 font-mono text-[9px] sm:text-[11px] leading-[1.25] text-[#d2fbd0]/20 pointer-events-none select-none overflow-hidden flex items-center justify-center opacity-70">
        <pre className="font-mono">
{`
                  --++*##%@@@@#*++=--                  
             -=*%@@@@@@@@@@@@@@@@@@@@%#+=-             
          -+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+-          
        -#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#-        
      -#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#-      
     +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+     
    +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+    
   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   
  =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=  
  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@  
  #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#  
  =@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@=  
   #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#   
    +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+    
     +@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@+     
      -#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#-      
        -#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#-        
          -+#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#+-          
             -=*%@@@@@@@@@@@@@@@@@@@@%#+=-             
                  --++*##%@@@@#*++=--                  
`}
        </pre>
      </div>

      {/* Top Header Information in Graphic Field */}
      <div className="relative z-10 flex items-center justify-between w-full font-mono text-[11px] uppercase tracking-widest text-[#a3b4bc]">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-success animate-pulse" />
          <span>SYS_CORE // ACTIVE</span>
        </div>
        <div className="font-pixel-accent text-xs text-[#d2fbd0]/80">
          [ 40.7128° N, 74.0060° W ]
        </div>
      </div>

      {/* Centerpiece: Retro-Futuristic Engineered Terminal & Logo Core */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto py-8">
        <div
          ref={terminalRef}
          className="relative w-full max-w-sm sm:max-w-md bg-[#000031]/90 border border-[#a3b4bc]/40 p-8 shadow-2xl backdrop-blur-xs flex flex-col items-center justify-center text-center"
        >
          {/* Subtle Terminal Top Bar */}
          <div className="w-full flex items-center justify-between pb-4 mb-6 border-b border-[#a3b4bc]/20 text-[10px] font-mono text-[#a3b4bc]/70 uppercase tracking-widest">
            <span>TERMINAL.01</span>
            <span>EST. 2026</span>
          </div>

          {/* Authentic Cerenetics Mark */}
          <div ref={markRef} className="relative w-36 h-36 sm:w-44 sm:h-44 my-2 flex items-center justify-center">
            <Image
              src="/logo.svg"
              alt="Cerenetics Identity"
              width={180}
              height={180}
              className="w-full h-full object-contain filter invert brightness-125"
              priority
            />
          </div>

          {/* Monospace Output */}
          <div className="mt-6 font-mono text-[11px] text-[#d2fbd0] tracking-widest uppercase">
            CERENETICS APPLIED SYSTEMS
          </div>
          <div className="mt-1 font-mono text-[10px] text-[#a3b4bc]/60 tracking-wider">
            DETERMINISTIC TOPOLOGIES &amp; AGENTIC RUNTIMES
          </div>
        </div>
      </div>

      {/* Bottom Information & Diamond Array (Exact reference match) */}
      <div className="relative z-10 flex items-end justify-between w-full pt-4 border-t border-[#a3b4bc]/20">
        {/* Geometric Diamond Array */}
        <div className="flex flex-col gap-1 text-[#d2fbd0]/60 font-mono text-xs">
          <div className="flex gap-1.5">
            <span>◇</span>
            <span>◇</span>
            <span>◇</span>
            <span>◇</span>
          </div>
          <div className="flex gap-1.5">
            <span>◇</span>
            <span>◇</span>
            <span>◇</span>
            <span>◇</span>
          </div>
        </div>

        {/* Stepper / Controls */}
        <div className="flex items-center gap-4 font-mono text-xs text-[#a3b4bc]">
          <span className="font-pixel-accent text-[#d2fbd0]">[ ARCHITECTURE 01/06 ]</span>
          <div className="flex items-center border border-[#a3b4bc]/30">
            <button className="px-2.5 py-1 hover:bg-white/10 transition-colors" aria-label="Previous">←</button>
            <button className="px-2.5 py-1 border-l border-[#a3b4bc]/30 hover:bg-white/10 transition-colors" aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </div>
  );
}
