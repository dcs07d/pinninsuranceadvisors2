import React from 'react';
import { Calendar, Phone, ArrowRight } from 'lucide-react';
import { CONTACT_PHONE, CONTACT_PHONE_RAW } from '../../utils/constants';
import CTAButton from '../CTAButton';

interface CTASectionProps {
  onSchedule?: () => void;
}

export default function CTASection({ onSchedule }: CTASectionProps) {
  return (
    <section className="bg-[#a0a6a8] py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to find your perfect Medicare plan?
          </h2>
          <p className="text-gray-100 mb-8 text-lg">
            Schedule a free consultation with our licensed advisors and get personalized guidance.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <CTAButton className="group">
              <Calendar className="w-5 h-5" />
              <span className="font-medium">Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </CTAButton>
            <a 
              href={`tel:${CONTACT_PHONE_RAW}`}
              className="flex items-center justify-center gap-3 bg-black text-white py-4 px-6 rounded-lg hover:bg-gray-900 transition-colors border-4 border-gray-900"
            >
              <Phone className="w-5 h-5" />
              <span className="font-medium">Call {CONTACT_PHONE}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}