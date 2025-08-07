'use client';

import { useState } from 'react';
import FormInput from './FormInput';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';

interface Props {
  type: 'login' | 'register';
}

const AuthForm: React.FC<Props> = ({ type }) => {
  const [inputs, setInputs] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const endpoint = type === 'register' ? '/api/auth/signup' : '/api/auth/login';
      await api.post(endpoint, inputs);
      window.location.href = '/dashboard';
      alert('please log in')
    } catch (err: any) {
      setError(err.response?.data?.message || `${type} failed`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto bg-[#111827] border border-gray-800 shadow-xl rounded-2xl p-8 space-y-6"
    >
      <h2 className="text-2xl font-bold text-center text-white tracking-wide">
        {type === 'register' ? 'Create an Account' : 'Welcome Back'}
      </h2>

      {type === 'register' && (
        <FormInput
          type="text"
          name="username"
          value={inputs.username}
          placeholder="Username"
          onChange={handleChange}
        />
      )}

      <FormInput
        type="email"
        name="email"
        value={inputs.email}
        placeholder="Email"
        onChange={handleChange}
      />
      <FormInput
        type="password"
        name="password"
        value={inputs.password}
        placeholder="Password"
        onChange={handleChange}
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 transition duration-200 text-white rounded-xl font-semibold disabled:opacity-50"
      >
        {loading ? 'Loading...' : type === 'register' ? 'Register' : 'Login'}
      </button>

      {error && (
        <p className="text-red-400 text-sm text-center mt-2 bg-red-950 p-3 rounded-md border border-red-800">
          {error}
        </p>
      )}
    </form>
  );
};

export default AuthForm;
