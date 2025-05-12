import React, { useEffect, useState } from 'react';
import { Question } from '../types/Question';
import { fetchQuestions } from '../services/api';
import QuestionComponent from '../components/QuestionCard';
import Button from '../components/Button';
import { useNavigate } from 'react-router-dom';

const Quiz: React.FC = () => {
  const [questions, setQuestion] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchQuestions().then(setQuestion);
  }, []);

  const isQuizFinished = currentIndex >= questions.length;

  const handleAnswerSelect = (selectedIndex: number) => {
    const correctIndex = questions[currentIndex].correct_answer_index;

    // console.log('pasirinktas', selectedIndex, '| Teisingas', correctIndex);
    setSelectedAnswer(selectedIndex);
    if (selectedIndex === correctIndex) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  const handlerNextQuestion = () => {
    setSelectedAnswer(null);
    setIsCorrect(null);
    if (currentIndex < questions.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Quiz Page</h1>
      {questions.length > 0 ? (
        <>
          {!isQuizFinished ? (
            <>
              <QuestionComponent
                question={questions[currentIndex].question}
                answers={questions[currentIndex].answers}
                correctAnswer={questions[currentIndex].correct_answer_index}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={selectedAnswer}
                isCorrect={isCorrect}
              />
              {selectedAnswer !== null && (
                <button
                  onClick={handlerNextQuestion}
                  className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                >
                  Next
                </button>
              )}
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">Quiz completed!</p>
              <button
                onClick={() => navigate('/stats')}
                className="py-4 px-24 text-2xl  bg-green-500 text-white rounded hover:bg-green-600"
              >
                Go To Stats
              </button>
            </div>
          )}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
