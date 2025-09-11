import React from 'react';
import { useFunnel } from '../FunnelContext';
import { Building2, Stethoscope, DollarSign, Heart } from 'lucide-react';

const preferences = [
  {
    id: 'doctors',
    title: 'Keep Current Doctors',
    icon: Stethoscope
  },
  {
    id: 'hospitals',
    title: 'Specific Hospitals',
    icon: Building2
  },
  {
    id: 'costs',
    title: 'Lower Monthly Costs',
    icon: DollarSign
  },
  {
    id: 'wellness',
    title: 'Wellness Benefits',
    icon: Heart
  }
];

export default function Preferences() {
  const { goNext, updateFormData } = useFunnel();
  const [selected, setSelected] = React.useState<string[]>([]);

  const togglePreference = (id: string) => {
    setSelected(prev => 
      prev.includes(id) 
        ? prev.filter(p => p !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = () => {
    updateFormData({ preferences: selected });
    goNext();
  };

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">What's Most Important to You?</h2>
        <p className="text-gray-600">Select all that apply</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {preferences.map(({ id, title, icon: Icon }) => (
          <button
            key={id}
            onClick={() => togglePreference(id)}
            className={`p-4 border rounded-xl flex flex-col items-center gap-2 transition-colors ${
              selected.includes(id)
                ? 'border-purple-500 bg-purple-50'
                : 'border-gray-200 hover:border-purple-500 hover:bg-purple-50'
            }`}
          >
            <Icon className={`w-6 h-6 ${
              selected.includes(id) ? 'text-purple-600' : 'text-gray-400'
            }`} />
            <span className="text-sm font-medium text-gray-900">{title}</span>
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="w-full bg-rose-500 text-white py-3 rounded-lg hover:bg-rose-600 transition-colors"
      >
        Continue
      </button>
    </div>
  );
}