// app/_components/Hero.tsx
'use client'; // Enables client-side rendering in Next.js (required for interactivity)
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="hero" className="bg-pa-background px-4 py-10 text-center text-white">
      <div className="flex justify-center pt-[25px]">
        <Image src="/PA_conference_logo.png" alt="Hero Image" width={600} height={233} priority />
      </div>

      <div className="pl-[240px] pr-[240px] pt-[50px] text-center text-8xl font-bold leading-[100%]">
        GROWTH FOR CROSS BORDER REFERENCE
        <div className="pt-[50px] text-6xl text-primary">17th - 18th JULY 2025</div>
        <div className="text-6xl text-secondary">LABADI BEACH HOTEL</div>
      </div>
    </section>
  );
}
