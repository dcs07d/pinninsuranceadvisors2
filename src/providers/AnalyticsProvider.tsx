import React from 'react';
import { usePageTracking } from '../utils/analytics';

interface AnalyticsProviderProps {
  children: React.ReactNode;
}

export default function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  usePageTracking();
  return <>{children}</>;
}