import { ComparisonCategory } from '../types/comparison';

export const comparisonData: ComparisonCategory[] = [
  {
    title: "Monthly Costs",
    items: [
      {
        title: "Premium",
        medigap: { 
          text: "Higher monthly premiums ($50-$300+)", 
          isPositive: false 
        },
        advantage: { 
          text: "Often $0 or low premium ($0-$100)", 
          isPositive: true 
        }
      },
      {
        title: "Predictability",
        medigap: { 
          text: "Very predictable monthly costs", 
          isPositive: true 
        },
        advantage: { 
          text: "Can vary month to month", 
          isPositive: false 
        }
      }
    ]
  },
  {
    title: "Coverage & Network",
    items: [
      {
        title: "Provider Choice",
        medigap: { 
          text: "Any provider that accepts Medicare", 
          isPositive: true 
        },
        advantage: { 
          text: "Must use network providers", 
          isPositive: false 
        }
      },
      {
        title: "Referrals",
        medigap: { 
          text: "No referrals needed for specialists", 
          isPositive: true 
        },
        advantage: { 
          text: "May need referrals for specialists", 
          isPositive: false 
        }
      },
      {
        title: "Travel Coverage",
        medigap: { 
          text: "Coverage anywhere in the U.S.", 
          isPositive: true 
        },
        advantage: { 
          text: "Limited to network area", 
          isPositive: false 
        }
      }
    ]
  },
  {
    title: "Additional Benefits",
    items: [
      {
        title: "Dental Coverage",
        medigap: { 
          text: "Not included", 
          isPositive: false 
        },
        advantage: { 
          text: "Often included", 
          isPositive: true 
        }
      },
      {
        title: "Vision Coverage",
        medigap: { 
          text: "Not included", 
          isPositive: false 
        },
        advantage: { 
          text: "Often included", 
          isPositive: true 
        }
      },
      {
        title: "Hearing Benefits",
        medigap: { 
          text: "Not included", 
          isPositive: false 
        },
        advantage: { 
          text: "Often included", 
          isPositive: true 
        }
      },
      {
        title: "Fitness Benefits",
        medigap: { 
          text: "Not included", 
          isPositive: false 
        },
        advantage: { 
          text: "Often includes gym membership", 
          isPositive: true 
        }
      }
    ]
  },
  {
    title: "Prescription Drugs",
    items: [
      {
        title: "Drug Coverage",
        medigap: { 
          text: "Requires separate Part D plan", 
          isPositive: false 
        },
        advantage: { 
          text: "Usually included in plan", 
          isPositive: true 
        }
      },
      {
        title: "Pharmacy Network",
        medigap: { 
          text: "Any pharmacy with Part D plan", 
          isPositive: true 
        },
        advantage: { 
          text: "Must use network pharmacies", 
          isPositive: false 
        }
      }
    ]
  },
  {
    title: "Out-of-Pocket Costs",
    items: [
      {
        title: "Annual Maximum",
        medigap: { 
          text: "No annual out-of-pocket maximum", 
          isPositive: false 
        },
        advantage: { 
          text: "Protected by yearly maximum", 
          isPositive: true 
        }
      },
      {
        title: "Deductibles",
        medigap: { 
          text: "Covers most deductibles", 
          isPositive: true 
        },
        advantage: { 
          text: "May have plan deductibles", 
          isPositive: false 
        }
      },
      {
        title: "Copayments",
        medigap: { 
          text: "Most copays covered", 
          isPositive: true 
        },
        advantage: { 
          text: "Set copays for services", 
          isPositive: false 
        }
      }
    ]
  },
  {
    title: "Plan Stability",
    items: [
      {
        title: "Annual Changes",
        medigap: { 
          text: "Benefits stay the same year to year", 
          isPositive: true 
        },
        advantage: { 
          text: "Benefits can change annually", 
          isPositive: false 
        }
      },
      {
        title: "Guaranteed Renewal",
        medigap: { 
          text: "Guaranteed renewable for life", 
          isPositive: true 
        },
        advantage: { 
          text: "Must renew annually", 
          isPositive: false 
        }
      }
    ]
  }
];