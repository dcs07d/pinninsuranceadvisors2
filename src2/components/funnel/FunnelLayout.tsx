import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { useFunnel } from './FunnelContext';

export default function FunnelLayout({ children }: { children: React.ReactNode }) {
  const { step, goBack, totalSteps } = useFunnel();
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-white rounded-2xl shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={goBack}
              className="text-gray-600 hover:text-purple-600 flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Back
            </button>
            <div className="text-sm text-gray-500">
              Step {step} of {totalSteps}
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}