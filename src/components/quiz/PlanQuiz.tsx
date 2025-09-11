import React, { useState, useEffect } from 'react';
import { QUIZ_QUESTIONS } from '../../data/quizQuestions';
import { QuizResult, UserInfo } from '../../types/quiz';
import QuizQuestion from './QuizQuestion';
import QuizResultView from './QuizResult';
import QualificationForm from './QualificationForm';
import { Shield, Check, ChevronDown } from 'lucide-react';
import { useQuizAnalytics } from '../../hooks/useQuizAnalytics';
import { useQuizTracking } from '../../hooks/useQuizTracking';
import CalendlyModal from '../scheduling/CalendlyModal';

export default function PlanQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [result, setResult] = useState<QuizResult>({ medigap: 0, advantage: 0 });
  const [isComplete, setIsComplete] = useState(false);
  const [isQualified, setIsQualified] = useState(false);
  const [isSchedulingOpen, setIsSchedulingOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const [answers, setAnswers] = useState<Record<string, any>>({});
  const analytics = useQuizAnalytics();
  const { saveProgress, loadProgress, clearProgress } = useQuizTracking();

  // Load saved progress on mount
  useEffect(() => {
    const savedProgress = loadProgress();
    if (savedProgress) {
      setCurrentQuestion(savedProgress.currentQuestion);
      setAnswers(savedProgress.answers);
    }
  }, [loadProgress]);

  const handleAnswer = (score: { medigap: number; advantage: number }, selectedAnswer: string, action?: string) => {
    const questionId = QUIZ_QUESTIONS[currentQuestion].id;
    const newAnswers = { ...answers, [questionId]: selectedAnswer };
    setAnswers(newAnswers);

    analytics.trackQuizAnswer(
      QUIZ_QUESTIONS[currentQuestion].id,
      selectedAnswer,
      QUIZ_QUESTIONS[currentQuestion].text
    );

    if (action === 'qualify') {
      setIsQualified(true);
      setIsComplete(true);
      clearProgress(); // Clear progress when qualified
      return;
    }

    const newResult = {
      medigap: result.medigap + score.medigap,
      advantage: result.advantage + score.advantage,
    };
    setResult(newResult);

    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      const nextQuestion = currentQuestion + 1;
      setCurrentQuestion(nextQuestion);
      saveProgress(nextQuestion, newAnswers);
    } else {
      setIsComplete(true);
      clearProgress(); // Clear progress when complete
      analytics.trackQuizComplete(newResult);
    }
  };

  const resetQuiz = () => {
    analytics.trackQuizRestart();
    setCurrentQuestion(0);
    setResult({ medigap: 0, advantage: 0 });
    setAnswers({});
    setIsComplete(false);
    setIsQualified(false);
    clearProgress();
  };

  const handleConsultationRequest = () => {
    analytics.trackConsultationRequest(result);
    setIsSchedulingOpen(true);
    clearProgress();
  };

  return (
    <>
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-slate-900 p-6 flex items-center justify-between group"
            >
              <div className="flex items-center gap-4">
                <div className="p-2 bg-primary/20 rounded-lg">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white">Medicare Plan Quiz</h2>
                  <p className="text-gray-300">Find your perfect Medicare plan match</p>
                </div>
              </div>
              <ChevronDown 
                className={`w-6 h-6 text-white transition-transform duration-300 ${
                  isExpanded ? 'rotate-180' : ''
                }`} 
              />
            </button>

            <div className={`transition-all duration-300 ease-in-out ${
              isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
            }`}>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Find Your Perfect Medicare Plan Match
                    </h3>
                    <p className="text-gray-600 mb-8 text-lg">
                      Take our quick quiz to discover whether a Medicare Advantage or Medigap Supplement plan better suits your needs.
                    </p>
                    
                    <div className="space-y-4">
                      {[
                        "Personalized plan recommendations",
                        "Compare costs and coverage",
                        "Understand your options clearly",
                        "Get expert guidance"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="bg-primary/20 rounded-full p-1">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="bg-slate-50 rounded-xl p-8 shadow-inner">
                      {isQualified ? (
                        <QualificationForm onSubmit={handleConsultationRequest} />
                      ) : !isComplete ? (
                        <>
                          <div className="mb-6">
                            <div className="flex justify-between text-sm mb-2">
                              <span className="font-semibold text-slate-700">Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}</span>
                              <span className="font-semibold text-primary">{Math.round(((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                            </div>
                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary transition-all duration-500 ease-out"
                                style={{ width: `${((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                              />
                            </div>
                          </div>
                          <QuizQuestion
                            question={QUIZ_QUESTIONS[currentQuestion]}
                            onAnswer={handleAnswer}
                          />
                        </>
                      ) : (
                        <QuizResultView 
                          result={result} 
                          onReset={resetQuiz}
                          onConsultationRequest={handleConsultationRequest}
                          onSchedule={() => setIsSchedulingOpen(true)}
                        />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal 
        isOpen={isSchedulingOpen}
        onClose={() => setIsSchedulingOpen(false)}
      />
    </>
  );
}