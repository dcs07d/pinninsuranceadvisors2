import React from 'react';
import { Stethoscope, Eye, Pill, DollarSign } from 'lucide-react';
import { FilterCriteria } from '../../types/plans';

interface PlanFilterProps {
  filters: FilterCriteria;
  onFilterChange: (filters: FilterCriteria) => void;
}

export default function PlanFilter({ filters, onFilterChange }: PlanFilterProps) {
  const handleChange = (key: keyof FilterCriteria, value: boolean | number) => {
    onFilterChange({ ...filters, [key]: value });
  };

  return (
    <div className="mb-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Maximum Monthly Premium
        </label>
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-gray-400" />
          <input
            type="range"
            min="0"
            max="500"
            step="10"
            value={filters.maxPrice}
            onChange={(e) => handleChange('maxPrice', Number(e.target.value))}
            className="w-full"
          />
          <span className="min-w-[80px] text-gray-700">${filters.maxPrice}</span>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => handleChange('includesDental', !filters.includesDental)}
          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
            filters.includesDental
              ? 'border-slate-800 bg-slate-50'
              : 'border-gray-200 hover:border-slate-300'
          }`}
        >
          <Stethoscope className={`w-5 h-5 ${filters.includesDental ? 'text-slate-800' : 'text-gray-400'}`} />
          <span className="font-medium">Dental</span>
        </button>

        <button
          onClick={() => handleChange('includesVision', !filters.includesVision)}
          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
            filters.includesVision
              ? 'border-slate-800 bg-slate-50'
              : 'border-gray-200 hover:border-slate-300'
          }`}
        >
          <Eye className={`w-5 h-5 ${filters.includesVision ? 'text-slate-800' : 'text-gray-400'}`} />
          <span className="font-medium">Vision</span>
        </button>

        <button
          onClick={() => handleChange('includesPrescription', !filters.includesPrescription)}
          className={`flex items-center gap-2 p-3 rounded-lg border-2 transition-colors ${
            filters.includesPrescription
              ? 'border-slate-800 bg-slate-50'
              : 'border-gray-200 hover:border-slate-300'
          }`}
        >
          <Pill className={`w-5 h-5 ${filters.includesPrescription ? 'text-slate-800' : 'text-gray-400'}`} />
          <span className="font-medium">Prescription</span>
        </button>
      </div>
    </div>
  );
}