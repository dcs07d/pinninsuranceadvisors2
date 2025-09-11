import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useChat } from '../../contexts/ChatContext';
import { useAnalytics } from '../../hooks/useAnalytics';

export default function ChatButton() {
  const { isOpen, openChat, closeChat } = useChat();
  const { trackConversion } = useAnalytics();

  const handleChatClick = () => {
    // Track the chat interaction
    trackConversion('chat_open', {
      source: 'chat_button',
      type: 'chat'
    });

    // Find and click the Tixae chat button
    const tixaeContainer = document.getElementById('VG_OVERLAY_CONTAINER');
    if (tixaeContainer) {
      const chatButton = tixaeContainer.querySelector('button');
      if (chatButton) {
        chatButton.click();
      }
    }
    
    openChat();
  };

  return (
    <button
      onClick={handleChatClick}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 bg-primary text-white p-3 md:p-4 rounded-lg hover:bg-primary-dark transition-colors flex items-center gap-2 group shadow-lg border-4 border-primary-dark"
    >
      <MessageCircle className="group-hover:scale-110 transition-transform" size={24} />
      <span className="hidden sm:inline font-medium">Chat with Us</span>
    </button>
  );
}