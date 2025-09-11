import Cookies from 'js-cookie';

// Pixel tracking configuration
const PIXEL_COOKIE = 'pixel_id';
const PIXEL_EXPIRY = 30; // days

interface PixelEvent {
  name: string;
  data?: Record<string, any>;
}

interface PixelConfig {
  id: string;
  type: 'facebook' | 'google' | 'linkedin' | 'twitter';
}

// Initialize pixels
export function initializePixels() {
  // Generate unique visitor ID if not exists
  if (!Cookies.get(PIXEL_COOKIE)) {
    const visitorId = crypto.randomUUID();
    Cookies.set(PIXEL_COOKIE, visitorId, { expires: PIXEL_EXPIRY });
  }

  // Initialize Facebook Pixel
  if (window.fbq) {
    window.fbq('init', import.meta.env.VITE_FB_PIXEL_ID);
  }

  // Initialize LinkedIn Insight Tag
  if (window._linkedin_data_partner_ids) {
    window._linkedin_data_partner_ids.push(import.meta.env.VITE_LINKEDIN_PIXEL_ID);
  }

  // Initialize Twitter Pixel
  if (window.twq) {
    window.twq('init', import.meta.env.VITE_TWITTER_PIXEL_ID);
  }
}

// Track pixel events
export function trackPixelEvent(event: PixelEvent) {
  const visitorId = Cookies.get(PIXEL_COOKIE);
  const timestamp = new Date().toISOString();

  // Enrich event data
  const enrichedData = {
    ...event.data,
    visitor_id: visitorId,
    timestamp,
    url: window.location.href,
    referrer: document.referrer
  };

  // Facebook Pixel
  if (window.fbq) {
    window.fbq('track', event.name, enrichedData);
  }

  // LinkedIn Insight Tag
  if (window.lintrk) {
    window.lintrk('track', { conversion_id: event.name, ...enrichedData });
  }

  // Twitter Pixel
  if (window.twq) {
    window.twq('track', event.name, enrichedData);
  }

  // Log event for debugging
  if (import.meta.env.DEV) {
    console.log('Pixel Event:', { event: event.name, data: enrichedData });
  }
}

// Common tracking events
export const pixelEvents = {
  pageView: () => trackPixelEvent({ name: 'PageView' }),
  quizStart: () => trackPixelEvent({ name: 'QuizStart' }),
  quizComplete: (data: any) => trackPixelEvent({ 
    name: 'QuizComplete',
    data
  }),
  formSubmit: (formType: string) => trackPixelEvent({
    name: 'FormSubmit',
    data: { form_type: formType }
  }),
  scheduleConsultation: () => trackPixelEvent({ name: 'ScheduleConsultation' }),
  callClick: () => trackPixelEvent({ name: 'CallClick' })
};

// Add TypeScript types for pixel SDKs
declare global {
  interface Window {
    fbq?: (event: string, name: string, data?: any) => void;
    twq?: (event: string, name: string, data?: any) => void;
    lintrk?: (event: string, data: any) => void;
    _linkedin_data_partner_ids?: string[];
  }
}