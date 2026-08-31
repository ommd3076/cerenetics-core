'use client';

import React, { createContext, useContext, useSyncExternalStore } from 'react';

interface MotionContextType {
  prefersReducedMotion: boolean;
  isMounted: boolean;
}

const MotionContext = createContext<MotionContextType>({
  prefersReducedMotion: false,
  isMounted: false,
});

export function useMotion() {
  return useContext(MotionContext);
}

function subscribeReducedMotion(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  mediaQuery.addEventListener('change', callback);
  return () => mediaQuery.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getReducedMotionServerSnapshot() {
  return false;
}

function subscribeMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getMountedServerSnapshot() {
  return false;
}

export function MotionProvider({ children }: { children: React.ReactNode }) {
  const prefersReducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getReducedMotionServerSnapshot
  );

  const isMounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getMountedServerSnapshot
  );

  return (
    <MotionContext.Provider value={{ prefersReducedMotion, isMounted }}>
      {children}
    </MotionContext.Provider>
  );
}

