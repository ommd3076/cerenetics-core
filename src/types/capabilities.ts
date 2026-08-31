export interface CapabilityItem {
  id: string;
  title: string;
  summary: string;
  deliverables: string[];
}

export interface CapabilityDomain {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  isForwardLooking?: boolean;
  forwardLookingNote?: string;
  items: CapabilityItem[];
}
