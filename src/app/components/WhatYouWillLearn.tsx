import React from 'react';
import { CheckCircle, Zap, TrendingUp } from 'lucide-react';

export default function WhatYouWillLearn() {
  return (
    <section className="bg-pa-background py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-5xl">
              Why This Conference is <span className="text-primary">Different</span>
            </h2>
            <p className="mx-auto max-w-3xl text-xl opacity-90">
              Most PA training is theoretical and outdated. We deliver practical, modern strategies
              you can implement immediately to build a corporate image from the unseen seat, improve
              Public Speaking, develop relevant cross-border skill for success.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c62f9d]">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Proven Tactics</h3>
              <p className="opacity-80">
                No theory, just what works in today&apos;s business world. Where do I go from here?
                The Career Path of a PA/EA, Growth ingredients of a PA/EA, Creating relevance at the
                highest level as a PA/EA
              </p>
            </div>

            <div className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#22a796]">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Develop international relevance</h3>
              <p className="opacity-80">
                Walk away with Tools, templates, playbooks available to the PA/EA you can start
                using the moment you&apos;re back in the office. Managing the Multi-dimensional
                needs and multiple demands on an International Executive, PA/EA for Mental Health
              </p>
            </div>

            <div className="p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#c62f9d] to-[#22a796]">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold">Skills That Get You Promoted</h3>
              <p className="opacity-80">
                Focus on the specific competencies that separate assistants from strategic business
                partners.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="rounded-full bg-[#c62f9d] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#a02581]">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
