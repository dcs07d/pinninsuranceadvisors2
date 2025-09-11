import React from 'react';
import { Benefit } from '../../types/benefits';

interface BenefitCardProps {
  benefit: Benefit;
  isSelected: boolean;
  onToggle: () => void;
}

export default function BenefitCard({ benefit, isSelected, onToggle }: BenefitCardProps) {
  const Icon = benefit.icon;
  
  return (
    <button
      onClick={onToggle}
      className={`w-full flex items-center gap-4 p-4 rounded-lg border-2 transition-all ${
        isSelected
          ? 'border-slate-800 bg-slate-50'
          : 'border-gray-200 hover:border-slate-300'
      }`}
    >
      <div className={`p-2 rounded-lg ${isSelected ? 'bg-slate-200' : 'bg-gray-100'}`}>
        <Icon className={`w-6 h-6 ${isSelected ? 'text-slate-800' : 'text-gray-400'}`} />
      </div>
      <div className="flex-1 text-left">
        <div className="font-medium text-gray-900">{benefit.name}</div>
        <div className="text-sm text-gray-500">{benefit.description}</div>
        <div className="text-sm font-medium text-slate-700 mt-1">
          Up to ${benefit.monthlyValue}/month in savings
        </div>
      </div>
    </button>
  );
}