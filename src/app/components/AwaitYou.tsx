'use client';

export default function AwaitYou() {
  return (
    <section
      id="AwaitYou"
      className="bg-pa-background px-4 py-10 text-center text-white"
    >
      <section className="w-full flex flex-col items-center justify-center">
        <div className="w-full max-w-[1200px] px-6">
          {/* #1: Header */}
          <div className="relative z-30 -mb-12 w-full px-10">
            <div className="mx-auto w-full max-w-5xl rounded-3xl bg-primary px-6 py-10 text-center">
              <h2 className="text-[28px] font-extrabold leading-tight sm:text-[32px]">
                What Awaits You
              </h2>
            </div>
          </div>

          {/* #2: Highlights */}
          <div className="rounded-t-[30px] bg-secondary px-6 py-16 text-center">
            <p className="text-[30px] font-bold leading-relaxed sm:text-[40px]">
              Keynote | Plenary Speaker | Panel Discussion <br />
              Concurrent Sessions | Lots Of Learning | More Fun
            </p>
          </div>

          {/* Bottom Segment */}
          <div className="-mt-[8px] rounded-b-[30px] bg-primary px-6 py-10 text-center">
            <h3 className="text-[15px] font-bold leading-relaxed text-white sm:text-[20px]">
              Events speakers are drawn from:
            </h3>
            <p className="text-[15px] font-bold leading-relaxed text-white sm:text-[20px]">
              Ghana, United States of America and United Arab Emirates
            </p>
          </div>

          {/* Video */}
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
      </section>
    </section>
  );
}