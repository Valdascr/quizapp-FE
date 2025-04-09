import React, { useEffect, useState } from 'react';
import { Question } from '../types/Question';
import { fetchQuestions } from '../services/api';
import QuestionComponent from '../components/QuestionCard';
import Status from './Status';

const Quiz: React.FC = () => {
  const [questions, setQuestion] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    fetchQuestions().then(setQuestion);
  }, []);

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer);
    setIsCorrect(answer === questions[currentIndex].correctAnswer);
  };

  const handlerNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentIndex + 1 < questions.length + 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // alert('Quiz completed');
      <Status />;
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz Page</h1>
      {questions.length > 0 ? (
        <>
          <QuestionComponent
            question={questions[currentIndex].question}
            answers={questions[currentIndex].answers}
            correctAnswer={questions[currentIndex].correctAnswer}
            onAnswerSelect={handleAnswerSelect}
            selectedAnswer={selectedAnswer}
            isCorrect={isCorrect}
          />
          {selectedAnswer && (
            <button
              onClick={handlerNextQuestion}
              className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            >
              Next
            </button>
          )}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
