export declare function useAnalytics(): {
    trackQuizStart: () => void;
    trackQuizComplete: (result: {
        medigap: number;
        advantage: number;
    }) => void;
    trackFormSubmission: (formType: string) => void;
    trackVideoPlay: (videoId: string) => void;
    trackConversion: (type: string, data: Record<string, any>) => void;
};
//# sourceMappingURL=useAnalytics.d.ts.map