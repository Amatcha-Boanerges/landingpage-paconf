// app/_components/AwaitYou.tsx
export default function AwaitYou() {
  return (
    <section id="AwaitYou" className="bg-primary text-white py-10 px-4 text-center">
      {/* Section:What aWaits you #1: seg*/}
        <section className="flex flex-col items-center justify-center w-full">
          <div className="z-30 -mb-12 rounded-t-[30px] px-6 py-10 text-center w-[80%] sm:w-[70%]"
            style={{ backgroundColor: '#d23c9d' }}

          >
            <h2 className="text-[32px] sm:text-[36px] font-extrabold leading-tight">
              What aWaits you
            </h2>

          </div>
          {/* #2:segment of whataWaits you */}
          <div className="rounded-t-[30px] bg-[#26b9b0] px-6 py-16 text-center w-full max-w-[1200px]"
            style={{ backgroundColor: '#21b191'}}
          >
            <p className="text-[30px] sm:text-[40px] font-bold leading-relaxed">
              Keynote | Plenary Speaker | Panel Discussion <br />
              Concurent Sessions | Lots Of Learning | More Fun

            </p>
          </div>
          
          {/* #4:countdownd timer segment  */}
          <div className="w-full bg-[#061d49] text-white py-12 flex flex-col items-center"
            style={{ backgroundColor: '#d23c9d'}}
          >
            <h2 className="text-[24px] sm:text-[28px] font-semibold mb-10 text-center">
              Countdown to PA Conferences:<br />

            </h2>
            <div className="flex justify-center gap-6 flex-wrap">
              {/* countdown Unit --- Days */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-4 border-teal-400 flex items-center justify-center text-[32px] sm:text-[40px] font-bold">
                  34
                </div>
                <span className="mt-2 text-[16px] sm:text-[18px] font-medium">Days</span>
              </div>

              {/* countdown Unit Hours */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-4 border-teal-400 flex items-center justify-center text-[32px] sm:text-[40px] font-bold">
                  13
                </div>
                <span className="mt-2 text-[16px] sm:text-[18px] font-medium">Hours</span>

              </div>

              {/* countdownd Unit -Minutes */}
              <div className="flex flex-col items-center">
                  <div className="w-28 h-28 rounded-full border-4 border-teal-400 flex items-center justify-center text-[32px] sm:text-[40px] font-bold">
                    32

                  </div>
                  <span className="mt-2 text-[16px] sm:text-[18px] font-medium">Minutes</span>
              </div>

              {/* countdownd unit -Seconds */}
              <div className="flex flex-col items-center">
                <div className="w-28 h-28 rounded-full border-4 border-teal-400 flex items-center justify-center text-[32px] sm:text-[40px] font-bold">
                  47
                </div>
                <span className="mt-2 text-[16px] sm:text-[18px] font-medium">Seconds</span>

              </div>

            </div>

          </div>

        </section>
    </section>
  );
}