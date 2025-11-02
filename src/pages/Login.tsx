import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      // const { user } = await login(email, password);
      await signIn(email, password);
      // console.log('Logged user!?', user);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed!?');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm border border-white/40 shadow-xl rounded-2xl px-10 py-12 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Login
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 p-2 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full p-4 bg-white text-gray-700 rounded-2xl shadow-md font-semibold text-lg transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
        >
          Login
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{' '}
          <a
            href="/register"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition"
          >
            Register
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;