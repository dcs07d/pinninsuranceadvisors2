export interface ComparisonCategory {
  title: string;
  items: {
    title: string;
    medigap: { text: string; isPositive: boolean };
    advantage: { text: string; isPositive: boolean };
  }[];
}