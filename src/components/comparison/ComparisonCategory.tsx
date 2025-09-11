import React from 'react';
import { ChevronDown } from 'lucide-react';
import ComparisonRow from './ComparisonRow';
import { ComparisonCategory as CategoryType } from '../../types/comparison';

interface ComparisonCategoryProps {
  category: CategoryType;
  isExpanded: boolean;
  onToggle: () => void;
}

export default function ComparisonCategory({ category, isExpanded, onToggle }: ComparisonCategoryProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full px-4 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
      >
        <h3 className="font-semibold text-gray-900">{category.title}</h3>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'}`}>
        <div className="px-4 pb-4">
          {category.items.map((item, index) => (
            <ComparisonRow key={index} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}