'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ContactPayload, ContactSubmissionState, ProjectStage } from '@/types/contact';
import { contactConfig } from '@/data/contact-config';
import { PrimaryButton } from '@/components/ui/PrimaryButton';
import { trackEvent } from '@/lib/analytics';
import { CheckCircle2, AlertCircle, RefreshCw } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState<Omit<ContactPayload, 'timestamp'>>({
    name: '',
    email: '',
    organization: '',
    phone: '',
    industry: contactConfig.industries[0],
    projectStage: 'exploring',
    message: '',
    consent: false,
    honeypot: '',
  });

  const [status, setStatus] = useState<ContactSubmissionState>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverMessage, setServerMessage] = useState<string>('');
  const formStartTime = useRef<number>(0);

  useEffect(() => {
    formStartTime.current = Date.now();
  }, []);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.name.trim()) {
      errs.name = 'Full name is required.';
    }

    if (!formData.email.trim()) {
      errs.email = 'Work email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid work email address.';
    }

    if (!formData.industry) {
      errs.industry = 'Please select your industry.';
    }

    if (!formData.projectStage) {
      errs.projectStage = 'Please select a project stage.';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide at least a brief summary (minimum 10 characters).';
    }

    if (!formData.consent) {
      errs.consent = 'You must agree to the processing of your details to receive a response.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      setStatus('field_error');
      return;
    }

    setStatus('submitting');
    setServerMessage('');

    try {
      const payload: ContactPayload = {
        ...formData,
        timestamp: formStartTime.current,
      };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        trackEvent('contact_submit_success', { projectStage: formData.projectStage });
      } else {
        if (data.fallbackRequired) {
          setStatus('provider_unavailable');
          setServerMessage('Delivery provider is currently unavailable. Please reach us directly via email.');
        } else {
          setStatus('server_error');
          setServerMessage(data.error || 'A server error occurred. Your entered details have been preserved.');
        }
        trackEvent('contact_submit_error', { reason: data.error });
      }
    } catch {
      setStatus('provider_unavailable');
      setServerMessage('Network connection error. Your entered details have been preserved.');
      trackEvent('contact_submit_error', { reason: 'network_failure' });
    }
  };

  if (status === 'success') {
    return (
      <div className="p-8 sm:p-12 rounded-xl bg-white border border-border-structural/40 flex flex-col items-center text-center gap-4">
        <div className="w-12 h-12 rounded-full bg-accent-success/20 flex items-center justify-center text-cta">
          <CheckCircle2 className="w-6 h-6 text-cta" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-text-primary">
          Inquiry Received
        </h3>
        <p className="font-body text-base text-text-muted max-w-[48ch]">
          Thank you. Your project brief has been routed to senior engineering. We will follow up directly within one to two business days.
        </p>
        <button
          onClick={() => {
            setStatus('idle');
            setFormData({
              name: '',
              email: '',
              organization: '',
              phone: '',
              industry: contactConfig.industries[0],
              projectStage: 'exploring',
              message: '',
              consent: false,
              honeypot: '',
            });
          }}
          className="mt-4 font-heading text-sm font-bold text-text-primary hover:text-cta underline"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-xl bg-white border border-border-structural/40 flex flex-col gap-6"
      noValidate
    >
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company_nickname">Leave this field blank</label>
        <input
          id="company_nickname"
          type="text"
          name="company_nickname"
          tabIndex={-1}
          autoComplete="off"
          value={formData.honeypot}
          onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
        />
      </div>

      {(status === 'server_error' || status === 'provider_unavailable' || status === 'field_error') && (
        <div
          className="p-4 rounded-md border border-destructive/40 bg-destructive/5 flex items-start gap-3 text-sm text-text-primary"
          role="alert"
        >
          <AlertCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="font-heading font-bold text-destructive">
              {status === 'field_error'
                ? 'Please correct the highlighted fields below.'
                : serverMessage}
            </p>
            {status === 'provider_unavailable' && (
              <p className="mt-1 font-body text-xs text-text-muted">
                You can email us directly at{' '}
                <a href={`mailto:${contactConfig.publicEmail}`} className="underline font-bold text-text-primary">
                  {contactConfig.publicEmail}
                </a>.
              </p>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Full Name <span className="text-destructive">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={`h-11 px-4 rounded-md border bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none ${
              errors.name ? 'border-destructive' : 'border-border-structural/50'
            }`}
            placeholder="Ada Lovelace"
          />
          {errors.name && <span className="font-body text-xs text-destructive">{errors.name}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Work Email <span className="text-destructive">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={`h-11 px-4 rounded-md border bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none ${
              errors.email ? 'border-destructive' : 'border-border-structural/50'
            }`}
            placeholder="ada@company.com"
          />
          {errors.email && <span className="font-body text-xs text-destructive">{errors.email}</span>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="organization" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Organization / Company <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="organization"
            type="text"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
            className="h-11 px-4 rounded-md border border-border-structural/50 bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none"
            placeholder="Acme Systems"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Phone Number <span className="text-text-muted font-normal">(Optional)</span>
          </label>
          <input
            id="phone"
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            className="h-11 px-4 rounded-md border border-border-structural/50 bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none"
            placeholder="+1 (555) 000-0000"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="industry" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Industry / Domain <span className="text-destructive">*</span>
          </label>
          <select
            id="industry"
            required
            value={formData.industry}
            onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
            className="h-11 px-4 rounded-md border border-border-structural/50 bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none"
          >
            {contactConfig.industries.map((ind) => (
              <option key={ind} value={ind}>
                {ind}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="projectStage" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
            Project Stage <span className="text-destructive">*</span>
          </label>
          <select
            id="projectStage"
            required
            value={formData.projectStage}
            onChange={(e) => setFormData({ ...formData, projectStage: e.target.value as ProjectStage })}
            className="h-11 px-4 rounded-md border border-border-structural/50 bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none"
          >
            {contactConfig.projectStages.map((st) => (
              <option key={st.value} value={st.value}>
                {st.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-heading text-xs font-bold uppercase tracking-wider text-text-primary">
          Project Summary & Objectives <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className={`p-4 rounded-md border bg-background font-body text-sm text-text-primary transition-colors focus:border-cta focus:bg-white focus:outline-none resize-y ${
            errors.message ? 'border-destructive' : 'border-border-structural/50'
          }`}
          placeholder="Brief description of the challenge, system constraints, timeline, or architecture requirements..."
        />
        {errors.message && <span className="font-body text-xs text-destructive">{errors.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            required
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-4 w-4 rounded border-border-structural text-cta focus:ring-cta"
          />
          <span className="font-body text-xs text-text-muted leading-normal">
            I consent to Cerenetics processing my submitted contact details exclusively for the purpose of reviewing and responding to this inquiry. Data is not shared with third parties or stored in public databases.
          </span>
        </label>
        {errors.consent && <span className="font-body text-xs text-destructive">{errors.consent}</span>}
      </div>

      <div className="pt-4 border-t border-border-structural/30 flex flex-col sm:flex-row items-center justify-between gap-4">
        <PrimaryButton
          type="submit"
          size="lg"
          disabled={status === 'submitting'}
          className="w-full sm:w-auto"
        >
          {status === 'submitting' ? (
            <span className="flex items-center gap-2">
              <RefreshCw className="w-4 h-4 animate-spin" />
              Transmitting brief...
            </span>
          ) : (
            'Submit Engagement Brief'
          )}
        </PrimaryButton>

        <p className="font-data text-xs text-text-muted text-center sm:text-right">
          Direct response commitment: 1–2 business days
        </p>
      </div>
    </form>
  );
}
