'use client';
import Header from '../components/home/HomeHeader';
import Animation from '../components/home/Animation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <div>
      {/* HEADER */}
      <header className="bg-white shadow-sm relative z-50">
        <Header />
      </header>

      {/* CONTAINER PRINCIPAL */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* FOND BLEU FLOU */}
        <div className="absolute inset-0 z-0">
          <div className="w-full h-full bg-[#0b1f3a]" />
        </div>

        {/* ANIMATION 3D */}
        <div className="absolute inset-0 z-10">
          <Animation />
        </div>

        {/* FILTRE FLOU */}
        <div className="absolute inset-0 z-20 backdrop-blur-md bg-[#0b1f3a]/25" />

        {/* FORMULAIRE DE LOGIN */}
        <div className="relative z-30 flex items-center justify-center w-full p-4">
          <motion.div
            className="mt-12 w-full max-w-md rounded-2xl p-8 shadow-2xl relative border border-blue-400 
                       backdrop-blur-xl bg-white/10"
            animate={{ boxShadow: ['0 0 10px #3b82f6', '0 0 25px #3b82f6', '0 0 10px #3b82f6'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <h2 className="text-2xl font-semibold text-white mb-1 text-center">Welcome back</h2>
            <p className="text-gray-300 text-sm mb-6 text-center">
              Log in to continue to your account
            </p>

            {/* FORM */}
            <form className="space-y-4">
              <input
                name="email"
                type="email"
                placeholder="Email or phone number"
                className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                onChange={handleChange}
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                onChange={handleChange}
              />

              <div className="flex items-center justify-between text-sm text-gray-200">
                <label className="flex items-center gap-2">
                  <input
                    name="remember"
                    type="checkbox"
                    onChange={handleChange}
                    className="accent-blue-500"
                  />
                  Remember me
                </label>
                <a href="#" className="text-blue-400 hover:underline">
                  Forgot password?
                </a>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600/80 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Log In
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-900/70 text-white p-2 rounded-lg hover:bg-gray-800/80 transition-colors"
              >
                <FaGoogle /> Sign in with Google
              </button>

              <p className="text-center text-sm mt-4 text-gray-300">
                Don’t have an account?{' '}
                <a href="/signUp" className="text-blue-400 hover:underline">
                  Create one
                </a>
              </p>
            </form>


          </motion.div>
        </div>
      </div>
    </div>
  );
}
