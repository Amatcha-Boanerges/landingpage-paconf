'use client';
import Image from 'next/image';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full bg-pa-background text-white" 
    >
      {/* 🔄 Background Video */}
      {/* <video
        className="absolute top-0 left-0 h-full w-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}

      {/* 🔲 Overlay (optional for darkening video) */}
      {/* <div className="absolute top-0 left-0 h-full w-full bg-black bg-opacity-80 z-10"></div> */}

      {/* 📦 Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-center min-h-screen text-center px-4">
        <div className="mb-6">
          <Image
            src="/PA_conference_logo.png"
            alt="Hero Image"
            width={600}
            height={233}
            priority
            className="w-full max-w-md sm:max-w-lg md:max-w-xl"
          />
        </div>

        <div className="max-w-6xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight tracking-wide">
            GROWTH FOR CROSS BORDER REFERENCE
          </h1>

          <div className="pt-6 text-2xl sm:text-3xl md:text-6xl font-bold text-primary">
            17th - 18th JULY 2025
          </div>

          <div className="text-2xl sm:text-3xl md:text-6xl font-bold text-secondary">
            LABADI BEACH HOTEL
          </div>
        </div>

        <div className="mt-10 flex items-center justify-center">
          <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          >
          <Button variant="primary" size="lg">
            Register Now
          </Button>
        </a>
        </div>
      </div>
    </section>
  );
}