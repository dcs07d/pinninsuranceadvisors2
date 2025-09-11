import { useCallback } from 'react';
import { trackEvent } from '../utils/analytics';

export function useAnalytics() {
  const trackQuizStart = useCallback(() => {
    trackEvent('quiz_start');
  }, []);

  const trackQuizComplete = useCallback((result: { medigap: number; advantage: number }) => {
    trackEvent('quiz_complete', {
      medigap_score: result.medigap,
      advantage_score: result.advantage
    });
  }, []);

  const trackFormSubmission = useCallback((formType: string) => {
    trackEvent('form_submit', { form_type: formType });
  }, []);

  const trackVideoPlay = useCallback((videoId: string) => {
    trackEvent('video_play', { video_id: videoId });
  }, []);

  const trackConversion = useCallback((type: string, data: Record<string, any>) => {
    trackEvent('conversion', {
      conversion_type: type,
      ...data,
      timestamp: new Date().toISOString()
    });
  }, []);

  return {
    trackQuizStart,
    trackQuizComplete,
    trackFormSubmission,
    trackVideoPlay,
    trackConversion
  };
}