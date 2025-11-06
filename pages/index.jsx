'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Header from '../components/home/HomeHeader';
import MainSection from '../components/home/MainSection';

const HomePage = () => {
  const router = useRouter();



  return (
    <div>

       <header className="bg-white shadow-sm">
        <Header />
      </header>
      <MainSection />

    </div>
  );
};

export default HomePage;
