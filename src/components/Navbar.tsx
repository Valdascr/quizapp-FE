import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    navigate('/login');
  };
  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-white/40 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <Link
          to="/"
          className="text-xl font-bold text-gray-800 hover:text-indigo-500 transition"
        >
          QuizApp
        </Link>

        <ul className="flex gap-6 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-indigo-500 transition">
              Quizzes
            </Link>
          </li>
          <li>
            <Link to="/stats" className="hover:text-indigo-500 transition">
              Stats
            </Link>
          </li>
          {loading ? (
            <span className="text-gray-500 text-sm animate-pulse">
              Loading...
            </span>
          ) : user ? (
            <>
              <li>
                <Link
                  to="/profile"
                  className="flex items-center gap-2 text-gray-700 font-semibold hover:text-indigo-500 transition"
                >
                  <span className="hidden sm:inline">{user.name}</span>
                </Link>
              </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-red-500 transition"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="hover:text-indigo-500 transition">
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="/register"
                  className="hover:text-indigo-500 transition"
                >
                  Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;