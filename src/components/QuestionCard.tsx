import React from "react";
import { Question } from '../types/Question';

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
    <div className="bg-white shadow rounded p-4">
      <h2 className="text-lg font-semibold mb-4">{question.question}</h2>
      <div className="space-y-2">
        {question.answers.map((answer) => {
          const isSelected = selectedAnswer === answer.id;
          const bgColor =
            selectedAnswer === null
              ? 'bg-gray-100'
              : isSelected
              ? answer.is_correct
                ? 'bg-green-300'
                : 'bg-red-300'
              : answer.is_correct
              ? 'bg-green-200'
              : 'bg-gray-100';

          return (
            <button
              key={answer.id}
              onClick={() => onAnswerSelect(answer.id)}
              className={`w-full text-left p-3 rounded ${bgColor} hover:bg-gray-200 transition`}
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