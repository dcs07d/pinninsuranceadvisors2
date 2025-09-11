import React from 'react';
import { DollarSign, TrendingUp } from 'lucide-react';

interface SavingsDisplayProps {
  monthlySavings: number;
  yearlySavings: number;
}

export default function SavingsDisplay({ monthlySavings, yearlySavings }: SavingsDisplayProps) {
  return (
    <div className="bg-slate-800 rounded-xl p-6 text-white">
      <div className="flex items-center gap-3 mb-6">
        <DollarSign className="w-8 h-8" />
        <h3 className="text-xl font-semibold">Your Potential Savings</h3>
      </div>
      
      <div className="space-y-4">
        <div>
          <div className="text-gray-300 text-sm mb-1">Monthly Savings</div>
          <div className="text-4xl font-bold">${monthlySavings}</div>
        </div>
        
        <div className="border-t border-slate-700 pt-4">
          <div className="flex items-center gap-2 text-green-400 mb-1">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm">Yearly Total</span>
          </div>
          <div className="text-2xl font-bold">${yearlySavings}</div>
        </div>
      </div>

      <button className="w-full mt-6 bg-primary text-white py-3 rounded-lg hover:bg-primary-dark transition-colors shadow-lg border-4 border-primary-dark">
        Get Your Personalized Quote
      </button>
    </div>
  );
}