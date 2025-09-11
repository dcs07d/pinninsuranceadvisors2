import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, useContext, useState } from 'react';
const ChatContext = createContext(undefined);
export function ChatProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    const openChat = () => setIsOpen(true);
    const closeChat = () => setIsOpen(false);
    return (_jsx(ChatContext.Provider, { value: { isOpen, openChat, closeChat }, children: children }));
}
export function useChat() {
    const context = useContext(ChatContext);
    if (!context) {
        throw new Error('useChat must be used within a ChatProvider');
    }
    return context;
}
//# sourceMappingURL=ChatContext.js.map