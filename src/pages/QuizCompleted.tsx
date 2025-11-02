import React from 'react';
import { useNavigate } from 'react-router-dom';


interface QuizCompletedParams {
    total: number;
    score: number;
}

const QuizCompleted: React.FC<QuizCompletedParams> = ({ total, score}) => {
const navigate = useNavigate();


    return (
      <div className="text-center">
        <p className="text-xl font-semibold mb-4">Quiz completed!</p>
        <p className="text-lg font-medium text-gray-800">
          You scored <span className="text-blue-600 font-bold">{score}</span>{' '}
          out of <span className="font-bold">{total}</span>
        </p>
        <div className="flex flex col sm:flex-row justify-center gap-4 mt-4">
          <button
            onClick={() => navigate('/')}
            className="w-full sm:w-auto px-20 py-6 bg-white hover:bg-green-50 text-gray-700 rounded-2xl shadow-lg font-semibold text-xl transition transform hover:-translate-y-1 hover:shadow-xl"
          >
            Go To Quiz
          </button>
          <br />
          <button
            onClick={() => navigate('/stats')}
            className="w-full sm:w-auto px-20 py-6 bg-white hover:bg-blue-50 text-gray-700 rounded-2xl shadow-lg font-semibold text-xl transition transform hover:-translate-y-1 hover:shadow-xl mt-4"
          >
            Go To Stats
          </button>
        </div>
      </div>
    );

}

export default QuizCompleted;