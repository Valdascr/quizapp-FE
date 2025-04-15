import React from "react";

type QuestionProps = {
  question: string;
  answers: string[];
  correctAnswer: number;
  onAnswerSelect: (answer: number) => void;
  isCorrect: boolean | null;
  selectedAnswer: number | null;
};

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  correctAnswer,
  onAnswerSelect,
  isCorrect,
  selectedAnswer,
}) => {
  return (
    <div className="px-20 py-6 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">{question}</h2>
      <div className="flex flex-row gap-2">
        {answers.map((answer, index) => {
          let style =
            'p-2 bg-sky-500 text-white rounded hover:bg-sky-400 transition';
          if (selectedAnswer !== null) {
            if (index === selectedAnswer) {
              style = isCorrect
                ? 'p-2 bg-green-500 text-white rounded'
                : 'p-2 bg-red-500 text-white rounded';
            }
          }

          return (
            <button
              key={index}
              className={style}
              onClick={() => onAnswerSelect(index)}
              disabled={selectedAnswer !== null}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionCard;