import React from 'react';
import { AlertCircle } from 'lucide-react';
import ComparisonRow from './ComparisonRow';
import { comparisonData } from '../../data/comparisonData';

export default function PlanTypeComparison() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Medigap vs Medicare Advantage
            </h2>
            <p className="text-gray-600">
              Compare the key differences to find which plan type best suits your needs
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-3 gap-4 bg-gray-50 p-4 border-b border-gray-200">
              <div className="font-semibold text-gray-700">Feature</div>
              <div className="font-semibold text-gray-700">Medigap Supplement</div>
              <div className="font-semibold text-gray-700">Medicare Advantage</div>
            </div>

            {/* Comparison Rows */}
            <div className="p-4">
              {comparisonData.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h3 className="font-semibold text-gray-900 mb-4 mt-6 first:mt-0">
                    {category.title}
                  </h3>
                  {category.items.map((item, itemIndex) => (
                    <ComparisonRow key={itemIndex} {...item} />
                  ))}
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="bg-blue-50 p-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-blue-800">
                This comparison is general in nature. Specific plans may vary, and what's best for you depends on your individual needs, budget, and healthcare preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}