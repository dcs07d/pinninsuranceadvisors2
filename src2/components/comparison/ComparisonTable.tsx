import React from 'react';
import { Check, X } from 'lucide-react';
import { FilterCriteria } from '../../types/plans';
import { usePlans } from '../../hooks/usePlans';

interface ComparisonTableProps {
  filters: FilterCriteria;
}

export default function ComparisonTable({ filters }: ComparisonTableProps) {
  const { plans, isLoading } = usePlans(filters);

  if (isLoading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-slate-800 mx-auto"></div>
        <p className="mt-4 text-gray-600">Loading plans...</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b-2 border-gray-200">
            <th className="py-4 px-6 text-left">Plan Features</th>
            {plans.map((plan) => (
              <th key={plan.id} className="py-4 px-6 text-center">
                <div className="font-bold text-lg text-gray-900">{plan.name}</div>
                <div className="text-2xl font-bold text-slate-800 my-2">${plan.monthlyPremium}</div>
                <div className="text-sm text-gray-500">per month</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[
            { key: 'dental', label: 'Dental Coverage' },
            { key: 'vision', label: 'Vision Coverage' },
            { key: 'prescription', label: 'Prescription Drugs' },
            { key: 'gym', label: 'Gym Membership' },
            { key: 'hearing', label: 'Hearing Coverage' },
            { key: 'transportation', label: 'Transportation' },
          ].map(({ key, label }) => (
            <tr key={key} className="border-b border-gray-100">
              <td className="py-4 px-6 text-gray-700">{label}</td>
              {plans.map((plan) => (
                <td key={`${plan.id}-${key}`} className="py-4 px-6 text-center">
                  {plan[key as keyof typeof plan] ? (
                    <Check className="w-5 h-5 text-green-500 mx-auto" />
                  ) : (
                    <X className="w-5 h-5 text-red-500 mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            <td className="py-6 px-6" colSpan={plans.length + 1}>
              <div className="flex justify-end">
                <button className="bg-slate-800 text-white px-6 py-2 rounded-lg hover:bg-slate-700 transition-colors">
                  Get Expert Advice
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}