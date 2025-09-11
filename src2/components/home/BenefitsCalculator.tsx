import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { AVAILABLE_BENEFITS } from '../../data/benefits';
import { SelectedBenefits } from '../../types/benefits';
import BenefitCard from '../calculator/BenefitCard';
import SavingsDisplay from '../calculator/SavingsDisplay';

export default function BenefitsCalculator() {
  const [selectedBenefits, setSelectedBenefits] = useState<SelectedBenefits>({});

  const monthlySavings = AVAILABLE_BENEFITS.reduce((total, benefit) => {
    return total + (selectedBenefits[benefit.id] ? benefit.monthlyValue : 0);
  }, 0);

  const yearlySavings = monthlySavings * 12;

  const toggleBenefit = (benefitId: string) => {
    setSelectedBenefits(prev => ({
      ...prev,
      [benefitId]: !prev[benefitId]
    }));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-slate-700 text-sm mb-6">
            <Calculator className="w-4 h-4" />
            <span>Savings Calculator</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">
            Calculate Your Potential Medicare Savings
          </h2>
          <p className="text-gray-600">
            Select the benefits you're interested in to see your potential monthly and yearly savings
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Select Your Benefits</h3>
              <div className="space-y-4">
                {AVAILABLE_BENEFITS.map((benefit) => (
                  <BenefitCard
                    key={benefit.id}
                    benefit={benefit}
                    isSelected={!!selectedBenefits[benefit.id]}
                    onToggle={() => toggleBenefit(benefit.id)}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <SavingsDisplay
                monthlySavings={monthlySavings}
                yearlySavings={yearlySavings}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}