import React, { useState } from 'react';
import ComparisonTable from './ComparisonTable';
import PlanFilter from './PlanFilter';
import { Plan, FilterCriteria } from '../../types/plans';

export default function PlanComparisonTool() {
  const [filters, setFilters] = useState<FilterCriteria>({
    maxPrice: 200,
    includesDental: false,
    includesVision: false,
    includesPrescription: false,
  });

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Compare Medicare Plans</h3>
        <p className="text-gray-600">
          Select your preferences to see a side-by-side comparison of plans that match your needs
        </p>
      </div>

      <PlanFilter filters={filters} onFilterChange={setFilters} />
      <ComparisonTable filters={filters} />
    </div>
  );
}