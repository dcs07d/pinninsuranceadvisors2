import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import PlanTypeComparison from '../components/comparison/PlanTypeComparison';

export default function MedigapComparison() {
  return (
    <MainLayout>
      <div className="bg-slate-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Medicare Supplement vs Medicare Advantage
            </h1>
            <p className="text-xl text-gray-600">
              Compare plan features side by side to make an informed decision
            </p>
          </div>
        </div>
      </div>
      <PlanTypeComparison />
    </MainLayout>
  );
}