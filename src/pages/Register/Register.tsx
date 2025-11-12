import React from 'react';
import { useRegister } from './useRegister';

const Register: React.FC = () => {
  const { form, error, success, handleChange, handleSubmit } = useRegister();

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white/90 backdrop-blur-sm border border-white/40 shadow-xl rounded-2xl px-10 py-12 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Register
        </h2>

        {error && (
          <div className="mb-4 text-red-600 text-sm text-center bg-red-50 p-2 rounded">
            {error}
          </div>
        )}
        {success && (
          <div className="mb-4 text-green-600 text-sm text-center">
            {success}
          </div>
        )}

        <input
          name="name"
          type="text"
          placeholder="Name"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={form.name ?? ''}
          onChange={handleChange}
        />

        <input
          name="email"
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={form.email ?? ''}
          onChange={handleChange}
        />

        <input
          name="password"
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={form.password ?? ''}
          onChange={handleChange}
        />

        <input
          name="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          className="w-full p-3 mb-6 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-300 transition"
          value={form.password_confirmation ?? ''}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="w-full p-4 bg-white text-gray-700 rounded-2xl shadow-md font-semibold text-lg transition transform hover:-translate-y-0.5 hover:shadow-lg hover:bg-gray-100"
        >
          Register
        </button>

        <p className="text-center text-gray-500 text-sm mt-6">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-indigo-500 hover:text-indigo-600 font-medium transition"
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default Register;
