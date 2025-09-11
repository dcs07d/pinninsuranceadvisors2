import React from 'react';
import PlanQuiz from '../quiz/PlanQuiz';

export default function QuizVideoSection() {
  return (
    <section id="medicare-quiz" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <PlanQuiz />
        </div>
      </div>
    </section>
  );
}