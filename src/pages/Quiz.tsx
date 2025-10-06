import React, { useEffect, useState } from 'react';
import { Question } from '../types/Question';
import { getQuestionsByCategory, submitQuizResult } from '../services/api';
import QuestionComponent from '../components/QuestionCard';
import { useNavigate, useParams } from 'react-router-dom';

const Quiz: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [questions, setQuestion] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    console.log('categoryId', categoryId);
    if (categoryId) {
      setCurrentIndex(0);
      setQuestion([]);
      getQuestionsByCategory(parseInt(categoryId))
        .then((res) => setQuestion(res.data))
        .catch((err) => console.error('Klaida gaunant klausimus:', err));
    }
  }, [categoryId]);

  const handleAnswerSelect = (selectedIndex: number) => {
    const correct = questions[currentIndex].answers.find((a) => a.is_correct);

    setIsCorrect(correct?.id === selectedAnswer);

    setSelectedAnswer(selectedIndex);
    if (correct && selectedIndex === correct.id) {
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

  const isQuizFinished = currentIndex >= questions.length;

  useEffect(() => {
    if (isQuizFinished && questions.length > 0) {
      const correctCount = questions.filter((q, index) => {
        const correctAnswer = q.answers.find((a) => a.is_correct);
        return correctAnswer?.id === userAnswers[index];
      }).length;
      submitQuizResult(Number(categoryId), correctCount, questions.length)
        .then(() => console.log('Result saves'))
        .catch((err) => console.error('Got error send results:', err));
    }
  }, [isQuizFinished]);

  return (
    <div className="p-6">
      {questions.length > 0 ? (
        <>
          {!isQuizFinished ? (
            <>
              <QuestionComponent
                question={questions[currentIndex]}
                onAnswerSelect={handleAnswerSelect}
                selectedAnswer={selectedAnswer}
                isCorrect={isCorrect}
              />
              <div style={{ minHeight: '50px' }} className="mt-2">
                {selectedAnswer !== null && (
                  <button
                    onClick={handlerNextQuestion}
                    className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <div className="text-center">
              <p className="text-xl font-semibold mb-4">Quiz completed!</p>
              <button
                onClick={() => navigate('/')}
                className="py-4 px-24 text-2xl  bg-green-500 text-white rounded hover:bg-green-600"
              >
                Go To Next Quiz
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
