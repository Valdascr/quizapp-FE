import React, { useState } from 'react';
import { register, RegisterData } from '../services/api';
import { useNavigate } from 'react-router-dom';

const Register: React.FC = () => {
  const [form, setForm] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const { user } = await register(form);
      console.log('register user?!:', user);
      navigate('/');
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registretion failed');
    }
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white px-12 py-10 rounded shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl mb-4 font-bold text-center">Register</h2>
        {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}
        <input
          name="name"
          type="name"
          placeholder="Name"
          className="w-full p-2 border mb-3 rounded"
          value={form.name ?? ''}
          onChange={handleChange}
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-2 border mb-3 rounded"
          value={form.email ?? ''}
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-2 border mb-4 rounded"
          value={form.password ?? ''}
          onChange={handleChange}
        />
        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          className="w-full p-2 border mb-4 rounded"
          value={form.password_confirmation ?? ''}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
