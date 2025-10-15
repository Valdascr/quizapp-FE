import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };
  return (
    <nav className="bg-gray-800 text-white px-4 py-4 shadow-md ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-lg font-semibold hover:text-gray-300">
          QuizApp
        </Link>
        <ul className="flex gap-8 ">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/stats" className="hover:text-gray-300">
              Stats
            </Link>
          </li>
          {!user ? (
            <>
              <li>
                <Link to="/login" className="hover:text-gray-300">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-gray-300">
                  Register
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <button
                  onClick={() => navigate('/profile')}
                  className="flex items-center gap-1 hover:text-gray-300"
                >
                  <span className="hidden sm:inline">{user.name}</span>
                </button>
              </li>
              <li>
                <button onClick={handleLogout} className="hover:text-gray-300">
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;