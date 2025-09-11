import React from 'react';
import MainLayout from '../../components/layout/MainLayout';
import { Heart, Check } from 'lucide-react';

export default function MedicareAdvantage() {
  return (
    <MainLayout>
      <div className="bg-black text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-6">Medicare Advantage Plans</h1>
            <p className="text-xl text-gray-300">
              Comprehensive coverage with additional benefits
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-8 h-8 text-primary" />
              <h2 className="text-2xl font-bold m-0">Medicare Advantage Benefits</h2>
            </div>

            <p>Medicare Advantage plans offer all-in-one coverage that includes:</p>

            <ul className="grid gap-4 my-8">
              {[
                'All Original Medicare benefits (Part A & B)',
                'Prescription drug coverage (Part D) usually included',
                'Additional benefits like dental, vision, and hearing',
                'Fitness memberships and wellness programs',
                'Transportation to medical appointments',
                'Over-the-counter allowances'
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