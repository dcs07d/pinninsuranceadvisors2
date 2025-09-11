import React, { useState } from 'react';
import { QuizResult } from '../../types/quiz';
import { ArrowRight, RefreshCcw, Loader2 } from 'lucide-react';
import { saveQuizResponse } from '../../utils/supabase';

interface QuizResultProps {
  result: QuizResult;
  answers: Record<string, string>;
  onReset: () => void;
  onConsultationRequest: () => void;
  onSchedule: () => void;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
}

export default function QuizResultView({ 
  result, 
  answers,
  onReset, 
  onConsultationRequest, 
  onSchedule 
}: QuizResultProps) {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: ''
  });
  const [isSaving, setIsSaving] = useState(false);
  const [showForm, setShowForm] = useState(true);

  const total = result.medigap + result.advantage;
  const medigapPercentage = Math.round((result.medigap / total) * 100);
  const advantagePercentage = Math.round((result.advantage / total) * 100);
  
  const getRecommendation = () => {
    if (medigapPercentage >= 60) {
      return "Based on your answers, a Medigap Supplement plan might be a better fit for you.";
    } else if (advantagePercentage >= 60) {
      return "Based on your answers, a Medicare Advantage plan might be a better fit for you.";
    }
    return "Your preferences show you could benefit from either plan type. Consider discussing your specific needs with an advisor.";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      await saveQuizResponse({
        medigapScore: result.medigap,
        advantageScore: result.advantage,
        recommendedPlan: medigapPercentage >= 60 ? 'Medigap' : 'Advantage',
        answers,
        userInfo
      });

      setShowForm(false);
      onConsultationRequest();
      onSchedule();
    } catch (error) {
      console.error('Error saving quiz response:', error);
      alert('There was an error saving your response. Please try again.');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Results</h3>
        <p className="text-gray-600">{getRecommendation()}</p>
      </div>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-blue-600">Medigap Supplement</span>
            <span className="text-blue-600">{medigapPercentage}%</span>
          </div>
          <div className="h-4 bg-blue-50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-blue-500 transition-all duration-1000 ease-out"
              style={{ width: `${medigapPercentage}%` }}
            />
          </div>
        </div>
        
        <div>
          <div className="flex justify-between text-sm font-medium mb-2">
            <span className="text-green-600">Medicare Advantage</span>
            <span className="text-green-600">{advantagePercentage}%</span>
          </div>
          <div className="h-4 bg-green-50 rounded-full overflow-hidden">
            <div 
              className="h-full bg-green-500 transition-all duration-1000 ease-out"
              style={{ width: `${advantagePercentage}%` }}
            />
          </div>
        </div>
      </div>

      {showForm ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              required
              value={userInfo.name}
              onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={userInfo.email}
              onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              required
              value={userInfo.phone}
              onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <button
              type="button"
              onClick={onReset}
              className="px-6 py-4 border-4 border-gray-200 text-gray-700 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
              Retake Quiz
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-4 bg-primary text-white rounded-xl hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group shadow-lg border-4 border-primary-dark disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  Speak to an Advisor
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </div>
        </form>
      ) : (
        <div className="text-center">
          <p className="text-green-600 font-medium mb-4">
            Thank you! We'll contact you shortly to discuss your Medicare options.
          </p>
        </div>
      )}
    </div>
  );
}