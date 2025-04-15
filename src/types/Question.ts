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