import { useCallback } from 'react';
import { trackEvent } from '../utils/analytics';
import { QuizResult } from '../types/quiz';
export function useQuizAnalytics() {
    const trackQuizStart = useCallback(() => {
        trackEvent('quiz_start', {
            timestamp: new Date().toISOString()
        });
    }, []);
    const trackQuizAnswer = useCallback((questionId, selectedAnswer, questionText) => {
        trackEvent('quiz_answer', {
            question_id: questionId,
            question_text: questionText,
            selected_answer: selectedAnswer,
            timestamp: new Date().toISOString()
        });
    }, []);
    const trackQuizComplete = useCallback((result) => {
        const totalScore = result.medigap + result.advantage;
        const medigapPercentage = Math.round((result.medigap / totalScore) * 100);
        const advantagePercentage = Math.round((result.advantage / totalScore) * 100);
        trackEvent('quiz_complete', {
            medigap_score: result.medigap,
            advantage_score: result.advantage,
            medigap_percentage: medigapPercentage,
            advantage_percentage: advantagePercentage,
            recommended_plan: medigapPercentage > advantagePercentage ? 'medigap' : 'advantage',
            timestamp: new Date().toISOString()
        });
    }, []);
    const trackQuizRestart = useCallback(() => {
        trackEvent('quiz_restart', {
            timestamp: new Date().toISOString()
        });
    }, []);
    const trackConsultationRequest = useCallback((quizResult) => {
        trackEvent('consultation_request', {
            source: 'quiz',
            medigap_score: quizResult.medigap,
            advantage_score: quizResult.advantage,
            timestamp: new Date().toISOString()
        });
    }, []);
    return {
        trackQuizStart,
        trackQuizAnswer,
        trackQuizComplete,
        trackQuizRestart,
        trackConsultationRequest
    };
}
//# sourceMappingURL=useQuizAnalytics.js.map