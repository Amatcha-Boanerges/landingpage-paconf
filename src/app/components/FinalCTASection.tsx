import React from 'react';
import { Calendar, Users, Shield } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Promotion Starts Here
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join 500+ ambitious PAs and forward-thinking managers who are transforming their careers and businesses.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center">
              <Calendar className="w-8 h-8 mb-2 text-yellow-300" />
              <p className="font-semibold">July 17-18, 2025</p>
              <p className="text-sm opacity-80">Accra, Labadi Beach Hotel</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 text-yellow-300" />
              <p className="font-semibold">Limited to 500 Seats</p>
              <p className="text-sm opacity-80">Sold out the last 3 years</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 mb-2 text-yellow-300" />
              <p className="font-semibold">100% Satisfaction</p>
              <p className="text-sm opacity-80">Guaranteed</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-8">
            <div className="text-4xl font-bold mb-2">GHC 4,450</div>
            <p className="text-lg mb-4">Early Bird Price (Save GHC500)</p>
            <p className="text-sm opacity-80 line-through">Regular Price: $4,950</p>
          </div>

          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          >
          <button className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-6 px-12 rounded-full text-xl transition-all hover:scale-105 shadow-2xl mb-6">
            Secure Your Seat Now
          </button>
        </a>
          <p className="text-sm opacity-80">
            Price increases to GHC 4,950 on July 1st
          </p>
        </div>
      </div>
    </section>
  );
}