'use client';
import { Target, Brain, Network } from 'lucide-react';

export default function AwaitYou() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-6">
              Go from Assistant to <span className="text-[#c62f9d]">Asset</span> in 2 Days
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The only conference that transforms PAs into strategic business partners and how to unlock their full potential through Keynote | Plenary Speaker | Panel
              Discussion Concurrent Sessions | Lots Of Learning | More Fun.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-[#c62f9d]/10 to-[#c62f9d]/5 rounded-2xl">
              <div className="w-16 h-16 bg-[#c62f9d] rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Develop a holistic picture for activities, Not Just Tasks</h3>
              <p className="text-gray-600">
                Master the frameworks top executives use to identify opportunities, manage stakeholders, and deliver results that get you noticed. 
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#22a796]/10 to-[#22a796]/5 rounded-2xl">
              <div className="w-16 h-16 bg-[#22a796] rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Expand your Knowledge</h3>
              <p className="text-gray-600">
                Discover the exact tools and workflows that let you control your routine work and focus on high-value strategic initiatives with speakers from Ghana, United States of America and United Arab Emirates.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-[#c62f9d]/10 to-[#22a796]/10 rounded-2xl">
              <div className="w-16 h-16 bg-gradient-to-br from-[#c62f9d] to-[#22a796] rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-[#1C1C1C] mb-4">Build Your Power Network</h3>
              <p className="text-gray-600">
                Connect with PAs from the top 50 companies in Ghana and business leaders who understand the value of strategic support.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className=""
            >
              <button className="bg-[#c62f9d] hover:bg-[#a02581] text-white font-bold py-4 px-8 rounded-full text-lg transition-all hover:scale-105 shadow-lg">
                Transform Your Career Now
              </button>
            </a>

          </div>

          <div className="flex justify-center py-10">
            <div className="relative w-full pb-[56.25%]">
              <iframe
                className="absolute left-0 top-0 h-full w-full rounded-xl shadow-xl"
                src="https://www.youtube.com/embed/iCxM6Kvwycs?modestbranding=1&rel=0&showinfo=0"
                title="PA Conference 2025 Promo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ border: 'none' }}
              ></iframe>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}