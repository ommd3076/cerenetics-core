export interface ResearchReference {
  id: string;
  number: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  summary: string;
  url?: string;
  isVerified: boolean;
}
