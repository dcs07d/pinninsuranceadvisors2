import { BlogPost } from '../types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Comprehensive Guide: Addressing Common Medicare Pain Points",
    excerpt: "From choosing the right plan to avoiding hidden costs, understanding deadlines, and managing chronic conditions, this guide combines essential insights and actionable solutions to help you make informed decisions about your Medicare coverage.",
    author: "Julian Quantz",
    date: "March 20, 2024",
    category: "Medicare Guide",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=2070",
    content: {
      sections: [
        {
          title: "Understanding Medicare Plan Choices",
          content: "Choosing between Original Medicare, Medicare Advantage, and supplemental plans can be confusing...",
          painPoints: [
            "Too Many Choices: Understanding Medicare Part A, Part B, Part D, and Medicare Advantage.",
            "Complex Terminology: Terms like deductibles, premiums, and copayments can be confusing.",
            "Fear of Missing Out: Concerns about making the wrong choice or facing penalties."
          ],
          solutions: [
            "Simplify the Options: Compare the main features of each plan in plain language.",
            "Use Real-World Scenarios: Show how each plan fits specific needs and budgets.",
            "Personalized Guidance: Offer consultations to address individual concerns."
          ]
        },
        {
          title: "Avoiding Unexpected Medicare Costs",
          content: "Hidden costs can turn an affordable plan into a financial burden...",
          painPoints: [
            "Unclear Costs: Many underestimate out-of-pocket expenses.",
            "Service Exclusions: Some plans don't cover essentials like dental or vision care.",
            "Penalty Concerns: Missing deadlines for Part B and Part D can lead to penalties."
          ],
          solutions: [
            "Cost Transparency: Break down premiums, deductibles, and copayments with clear examples.",
            "Supplemental Coverage: Highlight Medigap and Medicare Advantage as options for additional coverage.",
            "Enrollment Tips: Share key enrollment dates and strategies to avoid penalties."
          ]
        }
      ]
    }
  }
];