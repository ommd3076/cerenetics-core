import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function PrimaryButton({
  variant = 'primary',
  size = 'md',
  href,
  isExternal,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseClasses = cn(
    'inline-flex items-center justify-center font-heading font-medium tracking-[0.08em] uppercase transition-all duration-150 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cta disabled:opacity-50 disabled:pointer-events-none select-none text-center rounded-[4px]',
    {
      'bg-cta text-text-inverse hover:bg-black active:scale-[0.98]': variant === 'primary',
      'bg-panel text-text-primary border border-border-structural/40 hover:bg-[#dfe2fb] active:scale-[0.98]': variant === 'secondary',
      'bg-white text-text-primary border border-border-structural hover:bg-panel active:scale-[0.98]': variant === 'outline',
      'bg-transparent text-text-primary hover:bg-black/5 active:scale-[0.98]': variant === 'ghost',
    },
    {
      'min-h-[36px] px-4 text-xs': size === 'sm',
      'min-h-[44px] px-6 text-xs sm:text-sm': size === 'md',
      'min-h-[50px] px-8 text-xs sm:text-sm': size === 'lg',
    },
    className
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          className={baseClasses}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={baseClasses} {...props}>
      {children}
    </button>
  );
}
