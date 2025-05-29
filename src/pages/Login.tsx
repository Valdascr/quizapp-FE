import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from '../services/api';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const { user } = await login(email, password);
      console.log('Logged user!?', user);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed!?');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-12 py-10 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Login</h2>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;