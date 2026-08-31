import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { contactConfig } from '@/data/contact-config';
import { Mail, Clock, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact & Engineering Scoping — Cerenetics',
  description: 'Initiate a technical scoping inquiry with Cerenetics senior systems engineers.',
};

export default function ContactPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div>
              <span className="font-pixel-accent text-text-muted uppercase">
                [ CONTACT / 01 ]
              </span>
              <h1 className="font-heading font-normal text-4xl sm:text-5xl tracking-tight text-text-primary mt-2">
                Start a technical conversation
              </h1>
              <p className="font-body text-base text-text-muted mt-4 leading-relaxed">
                We engage directly with technical leads, founders, and architects. Submit a project brief or reach our engineering desk directly.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-8 rounded-[4px] bg-panel/30 border border-border-structural flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-[2px] bg-white border border-border-structural flex items-center justify-center text-cta">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-data text-xs uppercase text-text-muted block">
                    Direct Engineering Inbox
                  </span>
                  <a
                    href={`mailto:${contactConfig.publicEmail}`}
                    className="font-heading text-base sm:text-lg text-text-primary hover:underline break-all"
                  >
                    {contactConfig.publicEmail}
                  </a>
                </div>
              </div>
              <p className="font-body text-xs text-text-muted leading-relaxed">
                If your project brief contains proprietary schemas or formal RFP specifications, you may email attachments directly.
              </p>
            </div>

            <div className="flex flex-col gap-4 font-body text-sm text-text-primary">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                <div>
                  <strong className="font-heading font-medium">1–2 Business Day Review:</strong> Every inquiry is reviewed by practicing engineers, not sales filters.
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-4 h-4 text-cta shrink-0 mt-0.5" />
                <div>
                  <strong className="font-heading font-medium">Confidentiality Assured:</strong> Information shared remains confidential and subject to standard non-disclosure boundaries.
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
