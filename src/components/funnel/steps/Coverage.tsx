import React from 'react';
import { useFunnel } from '../FunnelContext';
import { Shield, Heart, Pill } from 'lucide-react';

const coverageOptions = [
  {
    id: 'original',
    title: 'Original Medicare',
    description: 'Basic coverage for hospital and medical services',
    icon: Shield
  },
  {
    id: 'advantage',
    title: 'Medicare Advantage',
    description: 'All-in-one alternative to Original Medicare',
    icon: Heart
  },
  {
    id: 'prescription',
    title: 'Prescription Drug Coverage',
    description: 'Add drug coverage to your plan',
    icon: Pill
  }
];

export default function Coverage() {
  const { goNext, updateFormData } = useFunnel();
  
  const handleSelect = (coverageType: string) => {
    updateFormData({ coverageType });
    goNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Coverage Type</h2>
        <p className="text-gray-600">Select the type of Medicare coverage you're interested in</p>
      </div>

      <div className="space-y-4">
        {coverageOptions.map(({ id, title, description, icon: Icon }) => (
          <button
            key={id}
            onClick={() => handleSelect(id)}
            className="w-full flex items-start gap-4 p-4 border border-gray-200 rounded-xl hover:border-purple-500 hover:bg-purple-50 transition-colors text-left"
          >
            <Icon className="w-6 h-6 text-purple-600 mt-1" />
            <div>
              <h3 className="font-medium text-gray-900">{title}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}