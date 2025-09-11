import { QuizQuestion } from '../types/quiz';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 'medicaid',
    text: "Are you on Medicaid or receive any type of state assistance?",
    type: 'branching',
    options: [
      {
        text: "Yes",
        action: "qualify",
        score: { medigap: 0, advantage: 2 }
      },
      {
        text: "No",
        action: "continue",
        score: { medigap: 0, advantage: 0 }
      }
    ]
  },
  {
    id: 'situation',
    text: "What best describes your current Medicare situation?",
    type: 'single',
    options: [
      {
        text: "I'm new to Medicare",
        score: { medigap: 1, advantage: 1 }
      },
      {
        text: "I'm older than 65 and I'm retiring or losing group coverage (including Cobra)",
        score: { medigap: 1, advantage: 1 }
      },
      {
        text: "I'm turning 65",
        score: { medigap: 1, advantage: 1 }
      },
      {
        text: "I already have Medicare with a Medigap Supplement (Plan F, G, or N)",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "I want a lower rate",
        score: { medigap: 1, advantage: 2 }
      },
      {
        text: "I want an advantage plan",
        score: { medigap: 0, advantage: 2 }
      },
      {
        text: "I already have a Medicare Advantage plan",
        score: { medigap: 0, advantage: 2 }
      },
      {
        text: "I want a supplement plan",
        score: { medigap: 2, advantage: 0 }
      }
    ]
  },
  {
    id: 'doctors',
    text: "How important is it to keep your current doctors?",
    type: 'single',
    options: [
      {
        text: "Very important - I want to keep all my current doctors with no network restrictions",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "I'm flexible and willing to change doctors if needed and I understand some doctors, hospitals, and facilities may not be available to me",
        score: { medigap: 0, advantage: 2 }
      }
    ]
  },
  {
    id: 'travel',
    text: "Do you travel frequently or spend time in different states?",
    type: 'single',
    options: [
      {
        text: "Yes, I travel often or split time between locations",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "No, I mostly stay in my local area",
        score: { medigap: 0, advantage: 2 }
      }
    ]
  },
  {
    id: 'premiums',
    text: "Which best describes you?",
    type: 'single',
    options: [
      {
        text: "I prefer lower monthly premiums, even if it means gaps in coverage or paying more when I use services",
        score: { medigap: 0, advantage: 2 }
      },
      {
        text: "I'm willing to pay higher premiums for 100% without copays, deductibles, or coinsurance",
        score: { medigap: 2, advantage: 0 }
      }
    ]
  },
  {
    id: 'extraBenefits',
    text: "How important are benefits like dental, vision, or hearing coverage?",
    type: 'single',
    options: [
      {
        text: "Very Important",
        score: { medigap: 0, advantage: 2 }
      },
      {
        text: "Somewhat important",
        score: { medigap: 1, advantage: 1 }
      },
      {
        text: "Not Important",
        score: { medigap: 2, advantage: 0 }
      }
    ]
  },
  {
    id: 'referrals',
    text: "How do you feel about getting referrals to see specialists or needing pre-authorization?",
    type: 'single',
    options: [
      {
        text: "I prefer direct access to doctors of my choice without referrals, and no pre-authorization requirements",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "I don't mind getting referrals if needed, I understand some claims may be denied",
        score: { medigap: 0, advantage: 2 }
      }
    ]
  },
  {
    id: 'stability',
    text: "How important is plan stability to you?",
    type: 'single',
    options: [
      {
        text: "I want my benefits to stay the same year after year",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "I'm okay with annual changes including but not limited to cancelation of coverage or change of doctors network",
        score: { medigap: 0, advantage: 2 }
      }
    ]
  },
  {
    id: 'costs',
    text: "How do you prefer to manage your healthcare costs?",
    type: 'single',
    options: [
      {
        text: "I prefer predictable monthly costs with the convenience of no deductibles or copays",
        score: { medigap: 2, advantage: 0 }
      },
      {
        text: "I prefer lower monthly premiums even if it means higher out-of-pocket costs, network restrictions, and prior authorization requirements",
        score: { medigap: 0, advantage: 2 }
      }
    ]
  }
];