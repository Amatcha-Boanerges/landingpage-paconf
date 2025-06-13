// app/_components/AwaitYou.tsx
'use client';

export default function AwaitYou() {
  return (
    <section id="AwaitYou" className="bg-pa-background text-white py-10 px-4 text-center">
      {/* Section:What Awaits You */}
      <section className="flex flex-col items-center justify-center w-full">

        {/* #1: Header */}
        <div className="z-30 -mb-12 rounded-t-[30px] px-6 py-10 text-center w-[50%] sm:w-[64%]"
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

        {/* Pink Bottom Segment - Rounded Bottom Only */}
        <div
          className="rounded-b-[30px] bg-[#d23c9d] px-6 py-10 text-center w-full max-w-[1200px] -mt-[8px]"
        >
          <h3 className="text-white text-[30px] sm:text-[40px] font-bold leading-relaxed">
            Events speakers are drawn from:
          </h3>
          <p className="text-white text-[30px] sm:text-[40px] font-bold leading-relaxed">
            Ghana, United States of America and United Arab Emirates
          </p>
        </div>

        <div className="w-full max-w-[1200px] mx-auto px-4 py-10 flex justify-center">
          <div className="relative w-full pb-[56.25%] h-0">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-xl"
              src="https://www.youtube.com/embed/iCxM6Kvwycs?modestbranding=1&rel=0&showinfo=0"
              title="PA Conference 2025 Promo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none" }}
            ></iframe>
          </div>
        </div>
      </section>
    </section>
  );
}
