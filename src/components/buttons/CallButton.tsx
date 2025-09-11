import React from 'react';
import { Phone } from 'lucide-react';
import { initiatePhoneCall } from '../../utils/phone';

interface CallButtonProps {
  className?: string;
  showIcon?: boolean;
  phone?: string;
}

export default function CallButton({ 
  className = "flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors border-4 border-primary-dark",
  showIcon = true,
  phone
}: CallButtonProps) {
  return (
    <button 
      onClick={() => initiatePhoneCall(phone)}
      className={className}
      aria-label="Call now"
    >
      {showIcon && <Phone className="w-5 h-5" />}
      <span>Call Now</span>
    </button>
  );
}