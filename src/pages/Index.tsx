
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import RegistrationForm from '@/components/RegistrationForm';
import TournamentInfo from '@/components/TournamentInfo';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-esports-dark text-white">
      <Header />
      <Hero />
      <TournamentInfo />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
