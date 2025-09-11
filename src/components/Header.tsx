import React from 'react';
import { Phone } from 'lucide-react';
import { CONTACT_PHONE } from '../utils/constants';

export default function Header() {
  return (
    <header>
      <div className="bg-amber-200 py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div>
            Current Clients: <a href="#" className="text-pink-600 hover:underline">Get 2025 Coverage Help Here</a>
          </div>
          <div className="flex items-center gap-2">
            Not a client yet? Give us a call: <Phone size={16} /> 
            <a href={`tel:${CONTACT_PHONE}`} className="text-pink-600 hover:underline">{CONTACT_PHONE}</a>
          </div>
        </div>
      </div>
      <nav className="container mx-auto py-4 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2 text-xl font-semibold">
          <span className="text-teal-600">Medicare</span>School.com
          <span className="text-xs text-gray-600 ml-2">Family Owned & Operated - Not A Government Agency</span>
        </div>
        <div className="flex items-center gap-8">
          <div className="relative group">
            <button className="flex items-center gap-1">
              Resources
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
          <a href="#compare" className="text-rose-600 hover:text-rose-700">Compare Tool</a>
          <a href="#workshop" className="text-rose-600 hover:text-rose-700">Free Workshop</a>
          <button className="bg-teal-500 text-white px-6 py-2 rounded-md hover:bg-teal-600 transition-colors">
            Get 1-on-1 Assistance
          </button>
        </div>
      </nav>
    </header>
  );
}