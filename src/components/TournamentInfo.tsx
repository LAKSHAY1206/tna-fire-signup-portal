
import React from 'react';
import { CalendarPlus, Users, Check } from "lucide-react";

const TournamentInfo: React.FC = () => {
  return (
    <section className="py-16 bg-esports-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Tournament <span className="text-esports-orange">Information</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about the upcoming Free Fire tournament.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tournament Schedule */}
          <div className="esports-card">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-esports-blue/20 p-3 rounded-full">
                <CalendarPlus className="h-8 w-8 text-esports-blue" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Tournament Schedule</h3>
            <ul className="space-y-3">
              {[
                { phase: "Registration Deadline", date: "May 20, 2025 - 11:59 PM" },
                { phase: "Group Stage", date: "May 25-26, 2025" },
                { phase: "Semi-Finals", date: "June 1, 2025" },
                { phase: "Grand Finals", date: "June 8, 2025" }
              ].map((item, index) => (
                <li key={index} className="flex justify-between border-b border-esports-blue/20 pb-2">
                  <span className="text-esports-orange font-medium">{item.phase}</span>
                  <span className="text-gray-300">{item.date}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Prize Pool */}
          <div className="esports-card">
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="text-5xl font-bold text-white flex justify-center items-center">
                  <span className="text-esports-orange">$</span>
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-esports-red rounded-full"></div>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Prize Pool</h3>
            <div className="space-y-4">
              <div className="bg-esports-dark/50 p-4 rounded-md border-l-4 border-esports-orange">
                <div className="font-bold text-esports-orange">1st Place</div>
                <div className="text-2xl font-bold text-white">$5,000</div>
              </div>
              <div className="bg-esports-dark/50 p-4 rounded-md border-l-4 border-esports-blue">
                <div className="font-bold text-esports-blue">2nd Place</div>
                <div className="text-xl font-bold text-white">$2,500</div>
              </div>
              <div className="bg-esports-dark/50 p-4 rounded-md border-l-4 border-gray-500">
                <div className="font-bold text-gray-400">3rd Place</div>
                <div className="text-lg font-bold text-white">$1,000</div>
              </div>
              <div className="text-center text-gray-300 mt-3">
                Additional in-game rewards for top 10 teams
              </div>
            </div>
          </div>
          
          {/* Rules & Requirements */}
          <div className="esports-card">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-esports-blue/20 p-3 rounded-full">
                <Users className="h-8 w-8 text-esports-blue" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 text-white text-center">Rules & Requirements</h3>
            <ul className="space-y-3 text-gray-300">
              {[
                "Players must be at least 16 years old",
                "Valid Free Fire account required",
                "Teams must have 4 players",
                "All participants must register individually",
                "Custom room passwords will be shared before matches",
                "Tournament will follow standard Free Fire esports rules",
                "Players must be available for all scheduled matches"
              ].map((rule, index) => (
                <li key={index} className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-esports-orange mt-0.5 flex-shrink-0" />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-6">
            Have questions about the tournament? Contact us at{" "}
            <a href="mailto:tournament@tnaesports.com" className="text-esports-orange hover:underline">
              tournament@tnaesports.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default TournamentInfo;
