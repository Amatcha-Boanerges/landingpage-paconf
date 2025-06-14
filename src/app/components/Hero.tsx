
// app/_components/Hero.tsx
'use client';
import Image from 'next/image';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      id="hero"
      className="bg-pa-background px-4 py-10 text-center text-white"
    >
      {/* Responsive Logo */}
      <div className="flex justify-center pt-6">
        <Image
          src="/PA_conference_logo.png"
          alt="Hero Image"
          width={600}
          height={233}
          priority
          className="w-full max-w-md sm:max-w-lg md:max-w-xl"
        />
      </div>

      {/* Title & Details */}
      <div className="mx-auto max-w-6xl pt-12 px-4 sm:px-6 lg:px-8">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>


        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
          GROWTH FOR CROSS BORDER REFERENCE
        </h1>

        <div className="pt-6 text-2xl sm:text-3xl md:text-6xl font-bold text-primary">
          17th - 18th JULY 2025
        </div>

        <div className="text-2xl sm:text-3xl md:text-6xl font-bold text-secondary">
          LABADI BEACH HOTEL
        </div>
      </div>

      {/* Button */}
      <div className="mt-10">
        <Button variant="primary" size="lg">
          Register Now
        </Button>
      </div>
    </section>

    

  );
}
