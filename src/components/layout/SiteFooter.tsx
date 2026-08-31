import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { siteNavigation } from '@/data/navigation';
import { siteMetadata } from '@/data/site-metadata';
import { contactConfig } from '@/data/contact-config';

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border-structural bg-white px-6 sm:px-10 py-12 select-none">
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pb-10 border-b border-border-structural/40">
        {/* Brand */}
        <div className="sm:col-span-2 flex flex-col gap-4">
          <Link
            href="/"
            className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight text-text-primary lowercase"
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
            <span>cerenetics<span className="text-cta">.</span></span>
          </Link>
          <p className="font-body text-xs sm:text-sm text-text-muted leading-relaxed max-w-sm">
            Engineering AI-native products, deterministic business systems, and specialized software architectures.
          </p>
        </div>

        {/* Capabilities */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">
            Capabilities
          </h3>
          <ul className="flex flex-col gap-2">
            {siteNavigation.footerNav.capabilities.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-body text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">
            Company
          </h3>
          <ul className="flex flex-col gap-2">
            {siteNavigation.footerNav.company.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="font-body text-xs sm:text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Inquiries */}
        <div className="flex flex-col gap-3">
          <h3 className="font-mono text-xs uppercase tracking-widest text-text-primary">
            Inquiries
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href={`mailto:${contactConfig.publicEmail}`}
              className="font-mono text-xs sm:text-sm text-text-primary hover:underline break-all"
            >
              {contactConfig.publicEmail}
            </a>
            <p className="font-body text-xs text-text-muted">
              {contactConfig.responseCommitment}
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 text-xs font-mono text-text-muted">
        <p>© {currentYear} {siteMetadata.name}. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/privacy" className="hover:text-text-primary transition-colors">
            Privacy Policy
          </Link>
          <Link href="/contact" className="hover:text-text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
}
