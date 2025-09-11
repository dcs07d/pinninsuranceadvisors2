import React from 'react';
import { usePageTracking } from '../../utils/analytics';

export default function AnalyticsProvider({ 
  children 
}: { 
  children: React.ReactNode 
}) {
  usePageTracking();
  return <>{children}</>;
}