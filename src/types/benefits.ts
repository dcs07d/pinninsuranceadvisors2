export interface Benefit {
  id: string;
  name: string;
  icon: React.ElementType;
  monthlyValue: number;
  description: string;
}

export interface SelectedBenefits {
  [key: string]: boolean;
}