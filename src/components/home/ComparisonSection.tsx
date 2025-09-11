import React from 'react';
import { Scale } from 'lucide-react';
import PlanComparisonTool from '../comparison/PlanComparisonTool';

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm mb-6">
              <Scale className="w-4 h-4" />
              <span>Plan Comparison Tool</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Compare Medicare Plans Side by Side
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Our easy-to-use comparison tool helps you see the differences between plans at a glance, 
              so you can make an informed decision about your Medicare coverage.
            </p>
          </div>

          <PlanComparisonTool />
        </div>
      </div>
    </section>
  );
}