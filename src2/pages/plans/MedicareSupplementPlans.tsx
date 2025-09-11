import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Shield, Check } from 'lucide-react';

export default function MedicareSupplementPlans() {
  return (
    <MainLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Medicare Supplement Plans</h1>
            <p className="text-xl text-gray-300">
              Additional coverage to fill the gaps in Original Medicare
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold m-0">Medigap Benefits</h2>
            </div>

            <p>Medicare Supplement (Medigap) plans help cover costs that Original Medicare doesn't pay for:</p>

            <ul className="grid gap-4 my-8">
              {[
                'Medicare Part A coinsurance and hospital costs',
                'Medicare Part B coinsurance or copayment',
                'Blood (first 3 pints)',
                'Part A hospice care coinsurance or copayment',
                'Skilled nursing facility care coinsurance',
                'Part A deductible',
                'Part B deductible (Plan F only)',
                'Part B excess charges',
                'Foreign travel emergency'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-2 bg-gray-50 p-4 rounded-lg">
                  <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}