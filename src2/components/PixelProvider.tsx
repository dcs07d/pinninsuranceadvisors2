import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initializePixels, pixelEvents } from '../utils/pixels';

export default function PixelProvider({ children }: { children: React.ReactNode }) {
  const location = useLocation();

  useEffect(() => {
    // Initialize pixels on mount
    initializePixels();
  }, []);

  useEffect(() => {
    // Track page views on route change
    pixelEvents.pageView();
  }, [location]);

  return <>{children}</>;
}