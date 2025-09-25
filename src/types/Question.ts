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
