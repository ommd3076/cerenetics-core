export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
}

export interface SiteNavigation {
  mainNav: NavItem[];
  footerNav: {
    capabilities: NavItem[];
    company: NavItem[];
    legal: NavItem[];
  };
}
