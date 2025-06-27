'use client';
import React from 'react';
import { AlertCircle, Clock, Zap } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section className="bg-[#F7F8FA] py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          {/* Heading */}
          <div className="mb-20 text-center">
            <AlertCircle className="mx-auto mb-6 h-16 w-16 text-[#c62f9d]" />
            <h2 className="text-3xl font-bold text-[#1C1C1C] md:text-5xl">Sound Familiar?</h2>
          </div>

          {/* Grid */}
          <div className="grid gap-12 md:grid-cols-2">
            {/* Overwhelmed */}
            <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-10 shadow-lg">
              <div>
                <div className="mb-6 flex items-center">
                  <Clock className="mr-3 h-8 w-8 text-[#c62f9d]" />
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Overwhelmed</h3>
                </div>
                <div className="space-y-4 text-base text-[#1C1C1C] md:text-lg">
                  <p>
                    You&apos;re efficient and dependable, but stuck in logistics instead of work
                    that gets noticed.
                  </p>
                  <ul className="list-inside list-disc space-y-2">
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
            <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-10 shadow-lg">
              <div>
                <div className="mb-6 flex items-center">
                  <Zap className="mr-3 h-8 w-8 text-[#22a796]" />
                  <h3 className="text-2xl font-bold text-[#1C1C1C]">Stagnant</h3>
                </div>
                <div className="space-y-4 text-base text-[#1C1C1C] md:text-lg">
                  <p>You&apos;re capable, but your role feels routine and stagnant.</p>
                  <ul className="list-inside list-disc space-y-2">
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
