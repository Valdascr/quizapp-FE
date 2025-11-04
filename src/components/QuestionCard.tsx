import React from "react";
import { Question } from '../types/QuizTypes';

interface QuestionComponentProps {
  question: Question;
  selectedAnswer: number | null;
  onAnswerSelect: (id: number) => void;
  isCorrect: boolean | null;
}

const QuestionComponent: React.FC<QuestionComponentProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  isCorrect,
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm shadow-lg rounded-2xl p-8 max-w-3xl mx-auto border border-white/40">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">
        {question.question}
      </h2>

      <div className="space-y-4">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer.id;
          const bgColor =
            selectedAnswer === null
              ? 'bg-gray-50'
              : isSelected
              ? answer.is_correct
                ? 'bg-green-100 border border-green-400 text-green-700'
                : 'bg-red-100 border border-red-400 text-red-700'
              : answer.is_correct
              ? 'bg-green-50 text-green-600'
              : 'bg-gray-50 text-gray-700';

          return (
            <button
              key={answer.id}
              onClick={() => onAnswerSelect(answer.id)}
              className={`w-full text-left p-5 rounded-xl shadow-sm font-medium transition transform hover:-translate-y-0.5 hover:shadow-md ${bgColor}`}
              disabled={selectedAnswer !== null}
            >
              {answer.answer_text}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionComponent;