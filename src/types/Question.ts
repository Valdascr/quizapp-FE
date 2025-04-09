export type Question = {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
};

export type Answer = {
    questionId: number;
    selectedOption: string;
}