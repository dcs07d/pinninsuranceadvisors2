import React from 'react';
import { useChat } from '../contexts/ChatContext';
import { useAnalytics } from '../hooks/useAnalytics';
import { openTixaeChat } from '../utils/chat';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
}

export default function CTAButton({ children, className = "" }: CTAButtonProps) {
  const { openChat } = useChat();
  const { trackConversion } = useAnalytics();

  const handleClick = async () => {
    trackConversion('schedule_consultation', {
      source: 'cta_button',
      type: 'consultation'
    });

    // Try to open Tixae chat
    const success = await openTixaeChat();
    if (success) {
      openChat();
    } else {
      console.warn('Tixae chat widget not found');
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark ${className}`}
    >
      {children}
    </button>
  );
}