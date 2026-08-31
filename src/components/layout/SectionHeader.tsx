import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-3 max-w-3xl',
        align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left',
        className
      )}
    >
      {eyebrow && (
        <span className="font-pixel-accent text-text-muted uppercase tracking-widest">
          {`[ ${eyebrow} ]`}
        </span>
      )}
      <h2 className="font-heading font-normal text-3xl sm:text-4xl lg:text-5xl tracking-[0.08em] text-text-primary leading-[1.1] uppercase">
        {title}
      </h2>
      {description && (
        <p className="font-body text-sm sm:text-base text-text-muted leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
