
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center justify-center bg-hero-pattern bg-cover bg-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-esports-dark/40 to-esports-dark"></div>
      
      <div className="container mx-auto px-6 py-16 z-10 text-center">
        <div className="animate-slide-in">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
            TNA <span className="text-esports-orange">FREE FIRE</span> TOURNAMENT
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
            Register now to compete in the biggest Free Fire tournament of the year!
            Show your skills and win amazing prizes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="esports-btn text-lg py-6 px-10"
              onClick={() => {
                const formElement = document.getElementById('registration-form');
                formElement?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Register Now
            </Button>
            <Button 
              variant="outline" 
              className="border-2 border-esports-blue bg-transparent text-white hover:bg-esports-blue/20 text-lg py-6 px-10"
            >
              Tournament Details
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-esports-dark to-transparent"></div>
    </div>
  );
};

export default Hero;
