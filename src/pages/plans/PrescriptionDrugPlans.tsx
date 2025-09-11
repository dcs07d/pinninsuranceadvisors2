import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Pill, Check } from 'lucide-react';

export default function PrescriptionDrugPlans() {
  return (
    <MainLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Prescription Drug Plans</h1>
            <p className="text-xl text-gray-300">
              Medicare Part D coverage for your medications
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Pill className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold m-0">Part D Coverage</h2>
            </div>

            <p>Medicare Part D prescription drug plans provide:</p>

            <ul className="grid gap-4 my-8">
              {[
                'Coverage for prescription medications',
                'Access to network pharmacies',
                'Mail-order pharmacy options',
                'Coverage in the coverage gap ("donut hole")',
                'Formulary of covered drugs',
                'Different coverage tiers for medications'
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