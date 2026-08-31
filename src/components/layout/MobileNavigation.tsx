'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteNavigation } from '@/data/navigation';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { X } from 'lucide-react';

interface MobileNavigationProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  const pathname = usePathname();

  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col bg-white md:hidden select-none"
      role="dialog"
      aria-modal="true"
      aria-label="Mobile Navigation Menu"
    >
      <div className="flex items-center justify-between px-6 py-5 border-b border-border-structural">
        <Link
          href="/"
          className="flex items-center gap-3 font-heading text-lg font-bold lowercase tracking-tight text-text-primary"
          onClick={onClose}
        >
          <div className="w-6 h-6 relative flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.svg"
              alt="Cerenetics"
              width={24}
              height={24}
              className="w-full h-full object-contain"
            />
          </div>
          <span>cerenetics.</span>
        </Link>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center border border-border-structural text-text-primary hover:bg-black/5"
          aria-label="Close navigation menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <nav className="flex flex-1 flex-col justify-between px-6 py-8 overflow-y-auto">
        <div className="flex flex-col gap-6">
          {siteNavigation.mainNav.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`font-heading text-2xl font-normal transition-colors duration-150 ${
                  isActive ? 'text-cta font-medium' : 'text-text-muted hover:text-text-primary'
                }`}
                onClick={onClose}
              >
                <div>{item.label}</div>
                {item.description && (
                  <p className="mt-1 font-body text-xs font-normal text-text-muted">
                    {item.description}
                  </p>
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex flex-col gap-4 pt-8 border-t border-border-structural">
          <PrimaryButton href="/contact" size="lg" className="w-full" onClick={onClose}>
            Start a conversation
          </PrimaryButton>
          <p className="text-center font-body text-xs text-text-muted">
            Direct engineering review within 1–2 business days.
          </p>
        </div>
      </nav>
    </div>
  );
}
