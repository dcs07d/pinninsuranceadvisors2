import React from 'react';
import { LucideIcon, Check } from 'lucide-react';

interface PlanCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export default function PlanCard({ icon: Icon, title, description, features }: PlanCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <Icon className="w-12 h-12 text-slate-700 mb-4" />
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
            <Check size={16} className="text-slate-700" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}