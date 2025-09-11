import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TrustCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  stat: string;
  statLabel: string;
}

export default function TrustCard({ icon: Icon, title, description, stat, statLabel }: TrustCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-primary/10 rounded-xl">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="font-bold text-gray-900">{title}</h3>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span className="font-semibold text-primary">{stat}</span>
            <span>•</span>
            <span>{statLabel}</span>
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}