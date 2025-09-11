import { QuizResult } from '../types/quiz';
export declare function useQuizAnalytics(): {
    trackQuizStart: () => void;
    trackQuizAnswer: (questionId: number, selectedAnswer: string, questionText: string) => void;
    trackQuizComplete: (result: QuizResult) => void;
    trackQuizRestart: () => void;
    trackConsultationRequest: (quizResult: QuizResult) => void;
};
//# sourceMappingURL=useQuizAnalytics.d.ts.map