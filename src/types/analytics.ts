export type AnalyticsEventName =
  | 'explore_work'
  | 'contact_open'
  | 'capability_expand'
  | 'research_link_open'
  | 'contact_submit_success'
  | 'contact_submit_error';

export interface AnalyticsEvent {
  name: AnalyticsEventName;
  properties?: Record<string, string | number | boolean>;
}
