export interface Answer {
  id: number;
  answer_text: string;
  is_correct: boolean;
}
export interface Question {
  id: number;
  question: string;
  answers: Answer[];
}

export interface Category {
  id: number;
  name: string;
}

export interface QuizResult {
  userId: number;
  category_id: number;
  score: number;
  total: number;
}

export interface Result {
  id: number;
  score: number;
  total: number;
  completed_at: string;
  category: { id: number; name: string };
}

export interface Category {
  id: number;
  name: string;
}

export interface Stats {
  totalQuizzes: number;
  averageScore: number;
  totalCorrect: number;
  totalWrong: number;
  lastPlayed: string | null;
}

export interface User {
  id: number;
  name: string;
  email: string;
  created_at: string;
}