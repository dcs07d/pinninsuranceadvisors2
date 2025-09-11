import React from 'react';
import { QuizQuestion as QuizQuestionType } from '../../types/quiz';
import { ChevronRight } from 'lucide-react';

interface QuizQuestionProps {
  question: QuizQuestionType;
  onAnswer: (score: { medigap: number; advantage: number }, selectedAnswer: string, action?: string) => void;
}

export default function QuizQuestion({ question, onAnswer }: QuizQuestionProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-slate-900 leading-tight">
        {question.text}
      </h3>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <button
            key={index}
            onClick={() => onAnswer(option.score, option.text, option.action)}
            className="w-full bg-white text-left p-6 rounded-xl border-2 border-gray-200 hover:border-primary hover:bg-white hover:shadow-md transition-all duration-200 group"
          >
            <div className="flex items-center justify-between gap-4">
              <span className="text-lg text-slate-800 font-medium leading-snug group-hover:text-slate-900 transition-colors">
                {option.text}
              </span>
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}