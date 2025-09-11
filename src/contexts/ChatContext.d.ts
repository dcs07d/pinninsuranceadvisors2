import React from 'react';
interface ChatContextType {
    isOpen: boolean;
    openChat: () => void;
    closeChat: () => void;
}
export declare function ChatProvider({ children }: {
    children: React.ReactNode;
}): import("react/jsx-runtime").JSX.Element;
export declare function useChat(): ChatContextType;
export {};
//# sourceMappingURL=ChatContext.d.ts.map