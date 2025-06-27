import React from 'react';
import { Calendar, Users, Shield } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section className="bg-pa-background py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-5xl">Your Promotion Starts Here</h2>
          <p className="mb-8 text-xl opacity-90">
            Join 500+ ambitious PAs and forward-thinking managers who are transforming their careers
            and businesses.
          </p>

          <div className="mb-12 grid gap-6 md:grid-cols-3">
            <div className="flex flex-col items-center">
              <Calendar className="mb-2 h-8 w-8 text-yellow-300" />
              <p className="font-semibold">July 17-18, 2025</p>
              <p className="text-sm opacity-80">Accra, Labadi Beach Hotel</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="mb-2 h-8 w-8 text-yellow-300" />
              <p className="font-semibold">Limited to 500 Seats</p>
              <p className="text-sm opacity-80">Sold out the last 3 years</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="mb-2 h-8 w-8 text-yellow-300" />
              <p className="font-semibold">100% Satisfaction</p>
              <p className="text-sm opacity-80">Guaranteed</p>
            </div>
          </div>

          <div className="mb-8 rounded-2xl bg-white/10 p-8 backdrop-blur-md">
            <div className="mb-2 text-4xl font-bold">GHC 4,450</div>
            <p className="mb-4 text-lg">Early Bird Price (Save GHC500)</p>
            <p className="text-sm line-through opacity-80">Regular Price: $4,950</p>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            <button className="mb-6 rounded-full bg-yellow-400 px-12 py-6 text-xl font-bold text-black shadow-2xl transition-all hover:scale-105 hover:bg-yellow-300">
              Secure Your Seat Now
            </button>
          </a>
          <p className="text-sm opacity-80">Price increases to GHC 4,950 on July 1st</p>
        </div>
      </div>
    </section>
  );
}
