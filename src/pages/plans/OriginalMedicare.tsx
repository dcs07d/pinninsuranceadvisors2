import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Check } from 'lucide-react';

export default function OriginalMedicare() {
  return (
    <MainLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Original Medicare</h1>
            <p className="text-xl text-gray-300">
              Understanding Parts A & B of Medicare
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h2 className="text-2xl font-bold mb-6">What is Original Medicare?</h2>
            
            <p>
              Original Medicare is the traditional government-sponsored healthcare program that includes 
              two main parts: Part A (Hospital Insurance) and Part B (Medical Insurance).
            </p>

            <div className="grid md:grid-cols-2 gap-8 my-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Part A Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'Hospital stays',
                    'Skilled nursing facility care',
                    'Hospice care',
                    'Home health care'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-4">Part B Coverage</h3>
                <ul className="space-y-3">
                  {[
                    'Doctor visits',
                    'Preventive services',
                    'Medical supplies',
                    'Outpatient care'
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}