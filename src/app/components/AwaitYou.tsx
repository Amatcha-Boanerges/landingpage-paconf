'use client';
import { Target, Brain, Network } from 'lucide-react';

export default function AwaitYou() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-3xl font-bold text-[#1C1C1C] md:text-5xl">
              Go from Assistant to <span className="text-[#c62f9d]">Asset</span> in 2 Days
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-gray-600">
              The only conference that transforms PAs into strategic business partners and how to
              unlock their full potential through Keynote | Plenary Speaker | Panel Discussion
              Concurrent Sessions | Lots Of Learning | More Fun.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-2xl bg-gradient-to-br from-[#c62f9d]/10 to-[#c62f9d]/5 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#c62f9d]">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1C1C1C]">
                Develop a holistic picture for activities, Not Just Tasks
              </h3>
              <p className="text-gray-600">
                Master the frameworks top executives use to identify opportunities, manage
                stakeholders, and deliver results that get you noticed.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#22a796]/10 to-[#22a796]/5 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#22a796]">
                <Brain className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1C1C1C]">Expand your Knowledge</h3>
              <p className="text-gray-600">
                Discover the exact tools and workflows that let you control your routine work and
                focus on high-value strategic initiatives with speakers from Ghana, United States of
                America and United Arab Emirates.
              </p>
            </div>

            <div className="rounded-2xl bg-gradient-to-br from-[#c62f9d]/10 to-[#22a796]/10 p-8 text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#c62f9d] to-[#22a796]">
                <Network className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-4 text-2xl font-bold text-[#1C1C1C]">Build Your Power Network</h3>
              <p className="text-gray-600">
                Connect with PAs from the top 50 companies in Ghana and business leaders who
                understand the value of strategic support.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className="rounded-full bg-[#c62f9d] px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-[#a02581]">
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
