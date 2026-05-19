import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Navbar: React.FC = () => {
  const { user, loading, signOut } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    signOut();
    setIsOpen(false);
    navigate('/login');
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-sm border-b border-white/40 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-xl font-bold text-gray-800 hover:text-indigo-500 transition"
          >
            QuizApp
          </Link>

          {/* Desktop menu */}
          <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
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
                    {user.name}
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
                  <Link
                    to="/login"
                    className="hover:text-indigo-500 transition"
                  >
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

          {/* Mobile burger button */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden flex flex-col gap-1.5"
            aria-label="Toggle navigation menu"
          >
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
            <span className="block w-6 h-0.5 bg-gray-800"></span>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <ul className="md:hidden mt-4 flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link
                to="/"
                onClick={closeMenu}
                className="block hover:text-indigo-500 transition"
              >
                Quizzes
              </Link>
            </li>

            <li>
              <Link
                to="/stats"
                onClick={closeMenu}
                className="block hover:text-indigo-500 transition"
              >
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
                    onClick={closeMenu}
                    className="block text-gray-700 font-semibold hover:text-indigo-500 transition"
                  >
                    {user.name}
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
                  <Link
                    to="/login"
                    onClick={closeMenu}
                    className="block hover:text-indigo-500 transition"
                  >
                    Login
                  </Link>
                </li>

                <li>
                  <Link
                    to="/register"
                    onClick={closeMenu}
                    className="block hover:text-indigo-500 transition"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
