import React from "react";
import {Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 text-white px-4 py-4 shadow-md ">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <Link to="/" className="text-lg font-semibold hover:text-gray-300">QuizApp</Link>
            <ul className="flex gap-8 ">
              <li><Link to="/quizzes" className="hover:text-gray-300">Quizzes</Link></li>
              <li><Link to="/stats" className="hover:text-gray-300">Stats</Link></li>
              <li><Link to="/profile" className="hover:text-gray-300">Profile</Link></li>
              <li><Link to="/login" className="hover:text-gray-300">Login</Link></li>
              <li><Link to="/register" className="hover:text-gray-300">Register</Link></li>
            </ul>
          </div>
        </nav>
      );
}

export default Navbar;