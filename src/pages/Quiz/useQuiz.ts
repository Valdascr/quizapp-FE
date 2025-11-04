import { useEffect, useState, useMemo } from "react";
import { Question } from '../../types/QuizTypes';
import { getQuestionsByCategory, submitQuizResult } from '../../services/api';

export const useQuiz = (categoryId: string | undefined) => {
  const [questions, setQuestion] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  useEffect(() => {
    console.log('categoryId', categoryId);
    if (categoryId) {
      setCurrentIndex(0);
      setQuestion([]);
      getQuestionsByCategory(parseInt(categoryId))
        .then((res) => setQuestion(res.data))
        .catch((err) => console.error('Error get questions:', err));
    }
  }, [categoryId]);

  const handleAnswerSelect = (selectedId: number) => {
    const correct = questions[currentIndex].answers.find((a) => a.is_correct);

    setIsCorrect(correct?.id === selectedAnswer);

    setSelectedAnswer(selectedId);
    setUserAnswers((prev) => [...prev, selectedId]);

    if (correct && selectedId === correct.id) {
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
        .catch((err) => console.error('Get error send results:', err));
    }
  }, [isQuizFinished, questions, userAnswers, categoryId]);

  const correctAnswersCount = useMemo(() => {
    return questions.reduce((acc, question, index) => {
      const correct = question.answers.find((a) => a.is_correct);
      const userAnswerId = userAnswers[index];
      if (correct && correct.id === userAnswerId) {
        return acc + 1;
      }
      return acc;
    }, 0);
  }, [questions, userAnswers]);

  return {
    questions,
    currentIndex,
    selectedAnswer,
    isCorrect,
    isQuizFinished,
    correctAnswersCount,
    handleAnswerSelect,
    handlerNextQuestion,
  };
};