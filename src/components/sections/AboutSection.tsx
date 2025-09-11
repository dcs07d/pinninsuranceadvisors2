import React from 'react';
import Logo from '../branding/Logo';

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm mb-6">
              <Logo className="h-4 w-auto" />
              <span>About Us</span>
            </div>
            {/* Rest of the component remains the same */}
          </div>
        </div>
      </div>
    </section>
  );
}