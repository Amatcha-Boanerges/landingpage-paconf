'use client';
import Image from 'next/image';

const PastAttendees = () => {
  const companies = [
    { name: 'PwC', logo: 'PwC-logo.png' },
    { name: 'GCB Bank', logo: 'gcb-logo.png' },
    { name: 'Ghana Cocoa Board', logo: 'Ghana_Cocoa_Board-logo.jpg' },
    { name: 'CalBank', logo: 'calbank-logo.svg' },
    { name: 'Enterprise Group', logo: 'entreprisegroup-logo.jpeg' },
    { name: 'University of Ghana', logo: 'university-of-ghana-logo.png' },
    { name: 'Wilmar Africa', logo: 'wilmar-logo.png' },
    { name: 'APM Terminals', logo: 'APMTerminals-logo.svg' },
    { name: 'Tema Oil Refinery', logo: 'tor-logo.png' },
    { name: 'Volta River Authority', logo: 'voltariveauthority-logo.png' },
    { name: 'GLICO Group', logo: 'glicolife-logo.webp' },
    { name: 'Letshego Ghana', logo: 'letshego-logo.png' },
    { name: 'Hollard Ghana', logo: 'hollard-logo.jpg' },
    { name: 'First Atlantic Bank', logo: 'Firstatlantic-logo.png' },
  ];

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1200px]">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-20">
            We trained PAs from the following Companies
          </h2>

          {/* Group wrapper for hover control */}
          <div className="relative overflow-hidden w-full group">
            {/* Scrolling strip duplicated for seamless loop */}
            <div className="flex w-max animate-scroll-left group-hover:paused gap-12">
              {[...companies, ...companies, ...companies].map((company, idx) => (
                <div key={`${company.name}-${idx}`} className="relative h-24 w-24 flex-shrink-0">
                  <Image
                    src={`/images/past-attendees/${company.logo}`}
                    alt={`${company.name} Logo`}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastAttendees;