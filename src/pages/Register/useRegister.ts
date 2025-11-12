import { useState } from 'react';
import { register, RegisterData } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const useRegister = () => {
  const [form, setForm] = useState<RegisterData>({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        password: form.password,
        password_confirmation: form.password_confirmation,
      };

      await register(payload);

      setSuccess('User registered successfully! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } catch (err: any) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };
  return {
    form,
    error,
    success,
    handleChange,
    handleSubmit,
  };
};