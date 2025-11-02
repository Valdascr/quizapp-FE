import React from 'react';
import QuestionComponent from '../../components/QuestionCard';
import { useParams } from 'react-router-dom';
import { useQuiz } from './useQuiz';
import QuizCompleted from '../QuizCompleted';

const Quiz: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const {
    questions,
    currentIndex,
    selectedAnswer,
    isCorrect,
    isQuizFinished,
    correctAnswersCount,
    handleAnswerSelect,
    handlerNextQuestion
  } = useQuiz(categoryId);

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
                    className="mt-6 px-8 py-4 bg-white text-gray-700 rounded-2xl shadow-md font-semibold text-lg transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                )}
              </div>
            </>
          ) : (
            <QuizCompleted
              total={questions.length}
              score={correctAnswersCount}
            />
          )}
        </>
      ) : (
        <p>Loading questions...</p>
      )}
    </div>
  );
};

export default Quiz;
