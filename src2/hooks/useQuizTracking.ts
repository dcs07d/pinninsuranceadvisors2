import { useEffect, useCallback } from 'react';
import Cookies from 'js-cookie';
import { supabase } from '../utils/supabase';
import { trackEvent } from '../utils/analytics';

const QUIZ_PROGRESS_KEY = 'quiz_progress';
const QUIZ_SESSION_KEY = 'quiz_session';

interface QuizProgress {
  sessionId: string;
  currentQuestion: number;
  answers: Record<string, any>;
  lastActive: number;
}

export function useQuizTracking() {
  // Generate or retrieve session ID
  const getSessionId = useCallback(() => {
    let sessionId = Cookies.get(QUIZ_SESSION_KEY);
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      Cookies.set(QUIZ_SESSION_KEY, sessionId, { expires: 30 }); // 30 days
    }
    return sessionId;
  }, []);

  // Save progress
  const saveProgress = useCallback(async (currentQuestion: number, answers: Record<string, any>) => {
    const progress: QuizProgress = {
      sessionId: getSessionId(),
      currentQuestion,
      answers,
      lastActive: Date.now()
    };

    // Save to cookie
    Cookies.set(QUIZ_PROGRESS_KEY, JSON.stringify(progress), { expires: 30 });

    // Track in analytics
    trackEvent('quiz_progress_saved', {
      session_id: progress.sessionId,
      current_question: currentQuestion,
      answers_count: Object.keys(answers).length
    });

    // Save to Supabase
    try {
      await supabase.from('quiz_progress').upsert({
        session_id: progress.sessionId,
        current_question: currentQuestion,
        answers,
        last_active: new Date(progress.lastActive).toISOString()
      });
    } catch (error) {
      console.error('Failed to save quiz progress:', error);
    }
  }, [getSessionId]);

  // Load progress
  const loadProgress = useCallback((): QuizProgress | null => {
    const saved = Cookies.get(QUIZ_PROGRESS_KEY);
    if (saved) {
      try {
        const progress = JSON.parse(saved);
        trackEvent('quiz_progress_loaded', {
          session_id: progress.sessionId,
          current_question: progress.currentQuestion
        });
        return progress;
      } catch (error) {
        console.error('Failed to parse saved quiz progress:', error);
      }
    }
    return null;
  }, []);

  // Clear progress
  const clearProgress = useCallback(() => {
    Cookies.remove(QUIZ_PROGRESS_KEY);
    const sessionId = getSessionId();
    
    trackEvent('quiz_progress_cleared', {
      session_id: sessionId
    });

    // Remove from Supabase
    try {
      supabase.from('quiz_progress').delete().match({ session_id: sessionId });
    } catch (error) {
      console.error('Failed to clear quiz progress from database:', error);
    }
  }, [getSessionId]);

  // Track inactivity
  useEffect(() => {
    let inactivityTimer: number;
    
    const handleActivity = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = window.setTimeout(() => {
        const progress = loadProgress();
        if (progress && progress.currentQuestion > 0) {
          trackEvent('quiz_abandoned', {
            session_id: progress.sessionId,
            current_question: progress.currentQuestion,
            time_inactive: Date.now() - progress.lastActive
          });
        }
      }, 5 * 60 * 1000); // 5 minutes
    };

    window.addEventListener('mousemove', handleActivity);
    window.addEventListener('keydown', handleActivity);
    window.addEventListener('scroll', handleActivity);

    handleActivity(); // Start initial timer

    return () => {
      clearTimeout(inactivityTimer);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('scroll', handleActivity);
    };
  }, [loadProgress]);

  return {
    saveProgress,
    loadProgress,
    clearProgress
  };
}