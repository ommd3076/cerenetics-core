import { AnalyticsEvent, AnalyticsEventName } from '@/types/analytics';

/**
 * Privacy-friendly no-op analytics adapter for V1 release candidate.
 * Dispatches structured events to console in development and provides
 * a clean extension point for production cookieless providers (e.g. Plausible/Fathom).
 */
export function trackEvent(name: AnalyticsEventName, properties?: Record<string, string | number | boolean>): void {
  const event: AnalyticsEvent = {
    name,
    properties,
  };

  if (process.env.NODE_ENV === 'development') {
    // Development telemetry output
    console.debug('[Analytics Event]', event);
  }

  // Production provider hook (configured during deployment phase)
  if (typeof window !== 'undefined' && (window as unknown as { plausible?: (name: string, opt?: { props?: Record<string, string | number | boolean> }) => void }).plausible) {
    (window as unknown as { plausible: (name: string, opt?: { props?: Record<string, string | number | boolean> }) => void }).plausible(name, { props: properties });
  }
}
