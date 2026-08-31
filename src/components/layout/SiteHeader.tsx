'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteNavigation } from '@/data/navigation';
import { MobileNavigation } from './MobileNavigation';
import { Menu } from 'lucide-react';

export function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const isScrolled = !isHomePage || scrolledPastHero;

  useEffect(() => {
    if (!isHomePage) return;

    const handleScroll = () => {
      // Threshold: 70% of viewport height
      const threshold = window.innerHeight * 0.7;
      setScrolledPastHero(window.scrollY > threshold);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // STATE A: Home at top (integrated split header)
  if (isHomePage && !isScrolled) {
    return (
      <header className="w-full border-b border-border-structural bg-white h-16 sm:h-20 select-none z-30 transition-all duration-300">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full">
          {/* Left Brand Section: Aligns over Left Hero Field (Pure White) */}
          <div className="flex items-center justify-between px-6 sm:px-10 h-full border-b lg:border-b-0 lg:border-r border-border-structural bg-white">
            <Link
              href="/"
              className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-cta"
              aria-label="Cerenetics Home"
            >
              <div className="w-6 h-6 sm:w-7 sm:h-7 relative flex items-center justify-center overflow-hidden">
                <Image
                  src="/logo.svg"
                  alt="Cerenetics"
                  width={28}
                  height={28}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
              <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-text-primary lowercase">
                cerenetics<span className="text-cta">.</span>
              </span>
            </Link>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex md:hidden h-9 w-9 items-center justify-center border border-border-structural text-text-primary hover:bg-black/5"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>

          {/* Right Nav Section: Aligns over Right Visual Field (Soft Blue) */}
          <div className="hidden md:flex items-center justify-between px-6 sm:px-10 h-full bg-panel/30">
            <nav className="flex items-center gap-8" aria-label="Primary Navigation">
              {siteNavigation.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="font-heading text-sm text-text-muted hover:text-text-primary transition-colors py-1"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-5 py-2.5 rounded-[4px] transition-all"
            >
              Start a conversation
            </Link>
          </div>
        </div>

        <MobileNavigation
          isOpen={mobileMenuOpen}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
    );
  }

  // STATE B & C: Centred Sticky Opaque Nav Bar (~70% width)
  return (
    <header className="sticky top-4 z-40 w-full px-4 flex justify-center pointer-events-none transition-all duration-300">
      <div className="w-full max-w-[880px] h-14 sm:h-16 px-5 sm:px-8 rounded-[4px] bg-white border border-border-structural shadow-sm flex items-center justify-between pointer-events-auto transition-all duration-200">
        <Link
          href="/"
          className="flex items-center gap-3 group focus-visible:outline-2 focus-visible:outline-cta"
          aria-label="Cerenetics Home"
        >
          <div className="w-6 h-6 relative flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.svg"
              alt="Cerenetics"
              width={24}
              height={24}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <span className="font-heading text-base sm:text-lg font-bold tracking-tight text-text-primary lowercase">
            cerenetics<span className="text-cta">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Primary Navigation">
          {siteNavigation.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-sm transition-colors py-1 ${
                  isActive
                    ? 'text-cta font-semibold border-b-2 border-cta pb-0.5'
                    : 'text-text-muted hover:text-text-primary'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex items-center justify-center bg-[#0A1128] text-white hover:bg-black font-heading text-xs uppercase tracking-[0.1em] px-4 py-2 rounded-[4px] transition-all"
          >
            Start a conversation
          </Link>

          <button
            onClick={() => setMobileMenuOpen(true)}
            className="flex md:hidden h-9 w-9 items-center justify-center border border-border-structural text-text-primary hover:bg-black/5"
            aria-label="Open mobile menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </header>
  );
}
