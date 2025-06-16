'use client';
import React from 'react';
import { AlertCircle, Clock, Zap } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="py-20 bg-[#F7F8FA]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-20">
            <AlertCircle className="w-16 h-16 text-[#c62f9d] mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C]">
              Sound Familiar?
            </h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Overwhelmed */}
            <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center mb-6">
                  <Clock className="w-8 h-8 text-[#c62f9d] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Overwhelmed</h3>
                </div>
                <div className="space-y-4 text-[#1C1C1C] text-base md:text-lg">
                  <p>You&apos;re efficient and dependable, but stuck in logistics instead of work that gets noticed.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You want to do more than just manage calendars and meetings.</li>
                    <li>You crave a bigger role with global relevance.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 font-semibold text-[#c62f9d]">
                You&apos;re ready to grow, but no one handed you the map.
              </p>
            </div>

            {/* Stuck */}
            <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center mb-6">
                  <Zap className="w-8 h-8 text-[#22a796] mr-3" />
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Stagnant</h3>
                </div>
                <div className="space-y-4 text-[#1C1C1C] text-base md:text-lg">
                  <p>You&apos;re capable, but your role feels routine and stagnant.</p>
                  <ul className="list-disc list-inside space-y-2">
                    <li>You sense you need to evolve—but don&apos;t know how.</li>
                    <li>You want meaning, confidence, and career direction.</li>
                  </ul>
                </div>
              </div>
              <p className="mt-6 font-semibold text-[#22a796]">
                You need to become a strategic partner, not just a task handler.
              </p>
            </div>
          </div>

          {/* Closing Line */}
          <div className="mt-20 text-center">
            <p className="text-xl font-semibold text-[#1C1C1C]">
              The PA Conference was built to answer that need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}