import React from 'react';
import { Phone, Clock } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../../utils/constants';

export default function TopBar() {
  return (
    <div className="bg-black text-gray-300 py-2">
      <div className="container mx-auto px-4 flex justify-between items-center text-sm">
        <div className="flex items-center gap-2">
          <Clock size={14} />
          <span>Open Today: 8AM - 8PM EST</span>
        </div>
        <a href={`tel:${CONTACT_PHONE_RAW}`} className="flex items-center gap-2 hover:text-white transition-colors">
          <Phone size={14} />
          <span>{CONTACT_PHONE}</span>
        </a>
      </div>
    </div>
  );
}