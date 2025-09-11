import { useCallback } from 'react';
import { trackEvent } from '../utils/analytics';
export function useAnalytics() {
    const trackQuizStart = useCallback(() => {
        trackEvent('quiz_start');
    }, []);
    const trackQuizComplete = useCallback((result) => {
        trackEvent('quiz_complete', {
            medigap_score: result.medigap,
            advantage_score: result.advantage
        });
    }, []);
    const trackFormSubmission = useCallback((formType) => {
        trackEvent('form_submit', { form_type: formType });
    }, []);
    const trackVideoPlay = useCallback((videoId) => {
        trackEvent('video_play', { video_id: videoId });
    }, []);
    const trackConversion = useCallback((type, data) => {
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
//# sourceMappingURL=useAnalytics.js.map