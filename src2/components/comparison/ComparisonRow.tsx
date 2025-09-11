import React from 'react';
import { Check, X } from 'lucide-react';

interface ComparisonRowProps {
  title: string;
  medigap: { text: string; isPositive: boolean };
  advantage: { text: string; isPositive: boolean };
}

export default function ComparisonRow({ title, medigap, advantage }: ComparisonRowProps) {
  return (
    <div className="grid grid-cols-3 gap-4 py-4 border-b border-gray-100 text-sm last:border-b-0">
      <div className="font-medium text-gray-900">{title}</div>
      <div className="flex items-start gap-2">
        {medigap.isPositive ? 
          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> : 
          <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        }
        <span className="text-gray-600">{medigap.text}</span>
      </div>
      <div className="flex items-start gap-2">
        {advantage.isPositive ? 
          <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" /> : 
          <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
        }
        <span className="text-gray-600">{advantage.text}</span>
      </div>
    </div>
  );
}