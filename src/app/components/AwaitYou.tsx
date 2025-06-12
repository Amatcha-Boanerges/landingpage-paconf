// app/_components/AwaitYou.tsx
'use client';
import CountdownTimer from './CountdownTimer';

export default function AwaitYou() {
  return (
    <section id="AwaitYou" className="bg-primary text-white py-10 px-4 text-center">
      {/* Section:What Awaits You */}
      <section className="flex flex-col items-center justify-center w-full">

        {/* #1: Header */}
        <div className="z-30 -mb-12 rounded-t-[30px] px-6 py-10 text-center w-[80%] sm:w-[70%]"
          style={{ backgroundColor: '#d23c9d' }}>
          <h2 className="text-[32px] sm:text-[36px] font-extrabold leading-tight">
            What Awaits You
          </h2>
        </div>

        {/* #2: Highlights */}
        <div className="rounded-t-[30px] bg-[#21b191] px-6 py-16 text-center w-full max-w-[1200px] mx-auto">
          <p className="text-[30px] sm:text-[40px] font-bold leading-relaxed">
            Keynote | Plenary Speaker | Panel Discussion <br />
            Concurrent Sessions | Lots Of Learning | More Fun
          </p>
        </div>

        {/* #3: Countdown */}
        <CountdownTimer />


        <div className="w-full max-w-[1200px] mx-auto px-4 py-10 flex justify-center">
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/iCxM6Kvwycs"
              title="PA Conference 2025 Promo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>





      </section>
    </section>
  );
}
