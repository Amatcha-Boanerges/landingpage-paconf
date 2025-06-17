// app/_components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#05183E] text-white py-10 px-4 text-center">
      <div className="flex justify-center pt-6 sm:pt-8">
        <Image
          src="/PA_conference_logo.png"
          alt="Hero Image"
          width={600}
          height={233}
          priority
          className="w-full max-w-xs sm:max-w-md md:max-w-lg"
        />
      </div>

      <div className="mt-8 px-4 sm:px-10 md:px-20 lg:px-40 font-bold">
        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl leading-tight">
          GROWTH FOR CROSS BORDER REFERENCE
        </div>

        <div className="mt-14 text-2xl sm:text-4xl md:text-6xl text-primary">
          17th - 18th JULY 2025
        </div>

        <div className="mt-2 text-2xl sm:text-4xl md:text-6xl text-secondary">
          LABADI BEACH HOTEL
        </div>
      </div>
    </section>
  );
}