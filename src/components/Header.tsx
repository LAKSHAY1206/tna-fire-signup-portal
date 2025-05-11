
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header: React.FC = () => {
  return (
    <header className="bg-esports-dark border-b border-esports-blue/20 py-4 px-6 md:px-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 bg-gradient-to-br from-esports-blue to-esports-orange rounded-md flex items-center justify-center animate-pulse-glow">
              <span className="text-white font-bold text-xl">T</span>
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-esports-red rounded-full"></div>
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-esports-blue to-esports-orange bg-clip-text text-transparent">
            TNA ESPORTS
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-white hover:text-esports-orange transition-colors duration-200">
            Home
          </Link>
          <Link to="/" className="text-white hover:text-esports-orange transition-colors duration-200">
            Tournaments
          </Link>
          <Link to="/" className="text-white hover:text-esports-orange transition-colors duration-200">
            Teams
          </Link>
          <Link to="/" className="text-white hover:text-esports-orange transition-colors duration-200">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="hidden md:flex text-white hover:text-esports-orange hover:bg-esports-dark/80"
          >
            Login
          </Button>
          <Button 
            className="bg-esports-orange hover:bg-esports-orange/90 text-white"
          >
            Register
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
