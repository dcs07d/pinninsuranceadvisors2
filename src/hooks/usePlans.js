import { useState, useEffect } from 'react';
import { Plan, FilterCriteria } from '../types/plans';
// Simulated plan data - in a real app, this would come from an API
const SAMPLE_PLANS = [
    {
        id: '1',
        name: 'Basic Coverage',
        monthlyPremium: 0,
        dental: false,
        vision: false,
        prescription: true,
        gym: false,
        hearing: false,
        transportation: false,
    },
    {
        id: '2',
        name: 'Standard Plus',
        monthlyPremium: 89,
        dental: true,
        vision: true,
        prescription: true,
        gym: true,
        hearing: false,
        transportation: true,
    },
    {
        id: '3',
        name: 'Premium Complete',
        monthlyPremium: 149,
        dental: true,
        vision: true,
        prescription: true,
        gym: true,
        hearing: true,
        transportation: true,
    },
];
export function usePlans(filters) {
    const [plans, setPlans] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        // Simulate API call
        setIsLoading(true);
        setTimeout(() => {
            const filteredPlans = SAMPLE_PLANS.filter((plan) => {
                if (plan.monthlyPremium > filters.maxPrice)
                    return false;
                if (filters.includesDental && !plan.dental)
                    return false;
                if (filters.includesVision && !plan.vision)
                    return false;
                if (filters.includesPrescription && !plan.prescription)
                    return false;
                return true;
            });
            setPlans(filteredPlans);
            setIsLoading(false);
        }, 500);
    }, [filters]);
    return { plans, isLoading };
}
//# sourceMappingURL=usePlans.js.map