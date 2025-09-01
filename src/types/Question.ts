export type Question = {
  id: number;
  question: string;
  answers: string[];
  correct_answer_index: number;
};

export type Answer = {
    questionId: number;
    selectedOption: string;
}

export interface Category {
  id: number;
  name: string;
}

const categories: Category[] = [
  { id: 1, name: 'History' },
  { id: 2, name: 'Science' },
  { id: 3, name: 'Math' },
  { id: 4, name: 'Geography' },
  { id: 5, name: 'Programming' },
  { id: 6, name: 'Art' },
];