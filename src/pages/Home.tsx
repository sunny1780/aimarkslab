import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';

interface HomeProps {
  onLoginClick: () => void;
}

const Home: React.FC<HomeProps> = ({ onLoginClick }) => {
  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={onLoginClick} />
      <Hero />
    </div>
  );
};

export default Home;
