interface QuizProgress {
    sessionId: string;
    currentQuestion: number;
    answers: Record<string, any>;
    lastActive: number;
}
export declare function useQuizTracking(): {
    saveProgress: (currentQuestion: number, answers: Record<string, any>) => Promise<void>;
    loadProgress: () => QuizProgress | null;
    clearProgress: () => void;
};
export {};
//# sourceMappingURL=useQuizTracking.d.ts.map