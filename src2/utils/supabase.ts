import { createClient } from '@supabase/supabase-js';
import type { Database } from '../types/supabase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

export async function saveQuizResponse(data: {
  medigapScore: number;
  advantageScore: number;
  recommendedPlan: string;
  answers: Record<string, any>;
  userInfo?: Record<string, any>;
}) {
  const { error } = await supabase
    .from('quiz_responses')
    .insert({
      medigap_score: data.medigapScore,
      advantage_score: data.advantageScore,
      recommended_plan: data.recommendedPlan,
      answers: data.answers,
      user_info: data.userInfo
    });

  if (error) {
    console.error('Error saving quiz response:', error);
    throw error;
  }
}

export async function exportQuizResponsesToCSV(): Promise<string> {
  const { data, error } = await supabase
    .from('quiz_responses')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    throw error;
  }

  // Convert data to CSV format
  const headers = [
    'Date',
    'Medigap Score',
    'Advantage Score',
    'Recommended Plan',
    'User Name',
    'User Email',
    'User Phone',
    'Answers'
  ];

  const rows = data.map(response => [
    new Date(response.created_at).toLocaleString(),
    response.medigap_score,
    response.advantage_score,
    response.recommended_plan,
    response.user_info?.name || '',
    response.user_info?.email || '',
    response.user_info?.phone || '',
    JSON.stringify(response.answers)
  ]);

  const csvContent = [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');

  return csvContent;
}