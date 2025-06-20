// app/_components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-[#05183E] text-white py-10 px-4 text-center">

          <div className="pt-[25px] flex justify-center"> 
    
            <Image 
              src="/PA_conference_logo.png"
              alt="Hero Image"
              width={600}
              height={233}
              priority
            />
            </div>
    
            <div className="text-8xl leading-[100%] text-center pt-[50px] pr-[240px] pl-[240px] font-extrabold"> 
            GROWTH FOR CROSS BORDER REFERENCE
            
            <div className="pt-[50px] text-6xl text-[#C62F9D]">
            17th - 18th JULY 2025
            </div>

            <div className="text-6xl text-[#22A696]">
            LABADI BEACH HOTEL
            </div>

          </div>

    </section>
  );
}