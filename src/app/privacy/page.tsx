import type { Metadata } from 'next';
import { contactConfig } from '@/data/contact-config';

export const metadata: Metadata = {
  title: 'Privacy Policy — Cerenetics',
  description: 'Cerenetics privacy notice, data processing principles, and retention standards.',
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col w-full py-16 sm:py-24 bg-white">
      <div className="max-w-[960px] mx-auto px-6 sm:px-10">
        <span className="font-pixel-accent text-text-muted uppercase">
          [ PRIVACY / 01 ]
        </span>
        <h1 className="font-heading font-normal text-4xl sm:text-5xl tracking-tight text-text-primary mt-2">
          Privacy Policy
        </h1>
        <p className="font-body text-base text-text-muted mt-3">
          We operate with strict data minimisation principles. We do not sell user data, build behavioural profiles, or store customer inquiries in insecure databases.
        </p>

        <div className="flex flex-col gap-8 my-12 font-body text-base text-text-muted leading-relaxed border-y border-border-structural/40 py-12">
          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              1. Information We Collect
            </h2>
            <p>
              When you submit an engagement brief via our website, we collect only the details you explicitly provide: your name, work email address, optional organisation name, optional phone number, industry, project stage, and project description.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              2. Purpose and Legal Basis
            </h2>
            <p>
              We process submitted contact information solely for the legitimate business interest of evaluating, scoping, and responding to your inquiry. We do not use your contact information for unsolicited marketing newsletters or third-party advertising.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              3. Processing and Delivery Providers
            </h2>
            <p>
              Inquiries are transmitted directly to our technical engineering inbox using encrypted transport protocols via our transactional email provider. We do not persist inquiry forms to a public web application database.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              4. Analytics and Telemetry
            </h2>
            <p>
              Our website uses privacy-friendly, cookieless aggregate event counters to monitor general site reliability and domain interactions. We do not place tracking cookies, execute cross-site user fingerprinting, or share telemetry with advertising networks.
            </p>
          </div>

          <div>
            <h2 className="font-heading text-xl text-text-primary mb-3">
              5. Data Retention &amp; User Rights
            </h2>
            <p>
              You may request access to, correction of, or deletion of any correspondence sent to Cerenetics at any time by contacting our engineering desk at{' '}
              <a href={`mailto:${contactConfig.publicEmail}`} className="text-cta font-medium underline">
                {contactConfig.publicEmail}
              </a>.
            </p>
          </div>
        </div>

        <div className="font-data text-xs text-text-muted">
          Last revised: August 2026 • Cerenetics Systems Group
        </div>
      </div>
    </div>
  );
}
