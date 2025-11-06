'use client';
import Header from '../components/home/HomeHeader';
import Animation from '../components/home/Animation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: '',
    remember: false,
    agree: false,
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

        {/* CONTENU : FORMULAIRE */}
        <div className="relative z-30 flex items-center justify-center w-full p-4">
          <motion.div
            className="mt-12 w-full max-w-lg rounded-2xl p-8 shadow-2xl relative border border-blue-400 
                       backdrop-blur-xl bg-white/10"  // 👈 ici : fond transparent
            animate={{ boxShadow: ['0 0 10px #3b82f6', '0 0 25px #3b82f6', '0 0 10px #3b82f6'] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <h2 className="text-2xl font-semibold text-white mb-1 text-center">Create account</h2>
            <p className="text-gray-300 text-sm mb-6 text-center">
              For business, band or celebrity.
            </p>

            {/* FORMULAIRE */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  name="firstName"
                  type="text"
                  placeholder="First name"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                  onChange={handleChange}
                />
                <input
                  name="lastName"
                  type="text"
                  placeholder="Last name"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="email"
                  type="email"
                  placeholder="Email or phone number"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                  onChange={handleChange}
                />
                <input
                  name="dob"
                  type="date"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onChange={handleChange}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                  onChange={handleChange}
                />
                <input
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm password"
                  className="border border-blue-300/50 bg-white/20 text-white rounded-lg p-2 w-full 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-300"
                  onChange={handleChange}
                />
              </div>

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

              <label className="flex items-center gap-2 text-sm text-gray-200">
                <input
                  name="agree"
                  type="checkbox"
                  onChange={handleChange}
                  className="accent-blue-500"
                />
                I agree to all the{' '}
                <a href="#" className="text-blue-400 hover:underline">
                  Terms
                </a>{' '}
                and{' '}
                <a href="#" className="text-blue-400 hover:underline">
                  Privacy policy
                </a>
              </label>

              <button
                type="submit"
                className="w-full bg-blue-600/80 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Create account
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-gray-900/70 text-white p-2 rounded-lg hover:bg-gray-800/80 transition-colors"
              >
                <FaGoogle /> Sign in with Google
              </button>

              <p className="text-center text-sm mt-4 text-gray-300">
                Don’t have an account?{' '}
                <a href="/login" className="text-blue-400 hover:underline">
                  Log In
                </a>
              </p>
            </form>

            {/* Icônes stores */}
            <div className="flex justify-center gap-3 mt-6">
              <img
                src="/images/google-play.png"
                alt="Google Play"
                className="w-28 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
              />
              <img
                src="/images/app-store.png"
                alt="App Store"
                className="w-28 rounded-2xl shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
