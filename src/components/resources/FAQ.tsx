import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What's the difference between Medicare Advantage and Medigap?",
    answer: "Medicare Advantage (Part C) plans are bundled alternatives to Original Medicare, often with lower premiums and extra benefits. Medigap (supplement) plans help cover out-of-pocket costs for Original Medicare, but they don't include extras like dental or vision."
  },
  {
    question: "Can I keep my current doctors?",
    answer: "If keeping your doctors is a priority, Medigap plans typically allow broader access. Some Medicare Advantage plans require in-network providers, so we'll help you check availability by ZIP code."
  },
  {
    question: "When can I enroll or switch plans?",
    answer: "You can enroll during your Initial Enrollment Period around age 65, or during the Annual Enrollment Period (Oct 15 – Dec 7). Special Enrollment Periods may also apply based on life events."
  },
  {
    question: "Does Medicare cover dental, vision, or hearing?",
    answer: "Original Medicare doesn't cover dental, vision, or hearing. Many Medicare Advantage plans do — including $0 options with DVH benefits. We'll help you check what's available in your area."
  },
  {
    question: "How much does Medicare actually cost?",
    answer: "Costs vary based on your plan, location, and income. Some people qualify for $0/month Advantage plans, while others may prefer fixed-cost Supplement plans. A licensed agent can help walk you through your options."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto my-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden bg-white"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors"
            >
              <span className="font-semibold text-lg text-gray-900">{faq.question}</span>
              <motion.div
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </motion.div>
            </button>

            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 pt-0 text-gray-700 bg-gray-50">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
}