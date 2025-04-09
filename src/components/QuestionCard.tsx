import React from "react";

type QuestionProps = {
    question: string;
    answers: string[];
    correctAnswer: string;
    onAnswerSelect: (answer: string) => void;
    isCorrect: boolean | null;
    selectedAnswer: string | null;
}

const Question: React.FC<QuestionProps> = ({question, answers, correctAnswer, onAnswerSelect, isCorrect, selectedAnswer}) => {
return (
   <div className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-3">{question}</h2>
      <div className="grid grid-cols-2 gap-2">
        {answers.map((answer, index) => {
          let buttonStyle = "p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition";
          if (selectedAnswer) {
            if (answer === selectedAnswer) {
              buttonStyle = isCorrect ? "p-2 bg-green-500 text-white rounded" : "p-2 bg-red-500 text-white rounded";
            } else if (answer === correctAnswer) {
              buttonStyle = "p-2 bg-green-500 text-white rounded";
            }
          }

          return (
            <button
              key={index}
              className={buttonStyle}
              onClick={() => onAnswerSelect(answer)}
              disabled={!!selectedAnswer}
            >
              {answer}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Question;