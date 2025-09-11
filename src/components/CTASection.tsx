import React from 'react';
import { Phone, Calendar } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="bg-teal-600 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-serif mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-teal-100">Choose the option that works best for you</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <button className="flex items-center justify-center gap-3 bg-white text-teal-600 py-4 px-8 rounded-lg hover:bg-teal-50 transition-colors">
            <Phone className="w-6 h-6" />
            <span className="text-lg font-semibold">Call (800) 864-8890</span>
          </button>
          <button className="flex items-center justify-center gap-3 bg-white text-teal-600 py-4 px-8 rounded-lg hover:bg-teal-50 transition-colors">
            <Calendar className="w-6 h-6" />
            <span className="text-lg font-semibold">Schedule a Consultation</span>
          </button>
        </div>
      </div>
    </section>
  );
}