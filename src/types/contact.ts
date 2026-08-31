export type ProjectStage = 
  | 'exploring'
  | 'scoping'
  | 'ready_to_build'
  | 'improving_existing';

export interface ContactPayload {
  name: string;
  email: string;
  organization?: string;
  phone?: string;
  industry: string;
  projectStage: ProjectStage;
  message: string;
  consent: boolean;
  honeypot?: string;
  timestamp?: number;
}

export interface ContactDeliveryResult {
  success: boolean;
  messageId?: string;
  error?: string;
  fallbackRequired?: boolean;
}

export type ContactSubmissionState = 
  | 'idle'
  | 'submitting'
  | 'success'
  | 'field_error'
  | 'server_error'
  | 'provider_unavailable';
