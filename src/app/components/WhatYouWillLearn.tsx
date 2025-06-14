import React from 'react';
import { CheckCircle, Zap, TrendingUp } from 'lucide-react';

export default function WhatYouWillLearn() {
  return (
    <section className="py-20 bg-pa-background text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Why This Conference is <span className="text-primary">Different</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Most PA training is theoretical and outdated. We deliver practical, modern strategies you can implement immediately to build a corporate image from the unseen seat, improve Public Speaking, develop relevant cross-border skill for success.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#c62f9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Proven Tactics</h3>
              <p className="opacity-80">
                No theory, just what works in today's business world. Where do I go from here? The Career Path of a PA/EA, Growth ingredients of a PA/EA, Creating relevance at the highest level as a PA/EA
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-[#22a796] rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Develop international relevance</h3>
              <p className="opacity-80">
                Walk away with Tools, templates, playbooks available to the PA/EA you can start using the moment you're back in the office. Managing the Multi-dimensional needs and multiple demands on an International Executive, PA/EA for Mental Health
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c62f9d] to-[#22a796] rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Skills That Get You Promoted</h3>
              <p className="opacity-80">
                Focus on the specific competencies that separate assistants from strategic business partners. 
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#c62f9d] hover:bg-[#a02581] text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg">
              Reserve Your Spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}