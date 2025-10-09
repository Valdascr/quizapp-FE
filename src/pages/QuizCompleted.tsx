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
            <p className='text-lg font-medium text-gray-800'>
                You scored <span className='text-blue-600 font-bold'>{score}</span> out of {' '}
                <span className='font-bold'>{total}</span>
            </p>
            <div className="flex flex col sm:flex-row justify-center gap-4 mt-4">
            <button
                onClick={() => navigate('/')}
                className=" py-4 px-24 text-2xl  bg-green-500 text-white rounded hover:bg-green-600"
            >
                Go To Quiz
            </button>
            <br />
            <button
                onClick={() => navigate('/stats')}
                className=" py-4 px-24 text-2xl  bg-blue-500 text-white rounded hover:bg-blue-600"
            >
                Go To Stats
            </button>
            </div>
        </div>
    );

}

export default QuizCompleted;