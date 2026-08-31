import React from 'react';
import { cn } from '@/lib/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  size?: 'default' | 'narrow' | 'wide' | 'split';
}

export function Container({
  children,
  className,
  size = 'default',
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 sm:px-8 md:px-12 lg:px-16',
        {
          'max-w-[1440px]': size === 'default',
          'max-w-[1080px]': size === 'narrow',
          'max-w-[1600px]': size === 'wide',
          'max-w-[1440px] px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24': size === 'split',
        },
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
