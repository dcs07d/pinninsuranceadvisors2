export interface QuizOption {
  text: string;
  score: {
    medigap: number;
    advantage: number;
  };
  action?: 'qualify' | 'continue';
}

export interface QuizQuestion {
  id: string;
  text: string;
  type: 'branching' | 'single';
  options: QuizOption[];
}

export interface QuizResult {
  medigap: number;
  advantage: number;
}

export interface UserInfo {
  name: string;
  dob: string;
  zip: string;
  phone: string;
  email: string;
}