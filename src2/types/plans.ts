export interface Plan {
  id: string;
  name: string;
  monthlyPremium: number;
  dental: boolean;
  vision: boolean;
  prescription: boolean;
  gym: boolean;
  hearing: boolean;
  transportation: boolean;
}

export interface FilterCriteria {
  maxPrice: number;
  includesDental: boolean;
  includesVision: boolean;
  includesPrescription: boolean;
}