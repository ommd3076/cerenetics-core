import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

interface TextLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
  isExternal?: boolean;
  showArrow?: boolean;
  className?: string;
}

export function TextLink({
  href,
  children,
  isExternal,
  showArrow = false,
  className,
  ...props
}: TextLinkProps) {
  const classes = cn(
    'inline-flex items-center gap-1 font-heading font-medium text-text-primary hover:text-cta transition-colors duration-150 group border-b border-border-structural hover:border-cta pb-0.5',
    className
  );

  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        <span>{children}</span>
        {showArrow && (
          <ArrowUpRight
            className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        )}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight
          className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </Link>
  );
}
