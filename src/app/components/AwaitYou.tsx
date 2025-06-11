// app/_components/AwaitYou.tsx
export default function AwaitYou() {
  return (
    <section id="AwaitYou" className="bg-primary text-white py-10 px-4 text-center">
      {/* Section:What aWaits you */}
        <section className="flex flex-col items-center justify-center w-full">
          <div className="z-30 -mb-12 rounded-t-[30px] px-6 py-10 text-center w-[80%] sm:w-[70%]"
            style={{ backgroundColor: '#d23c9d' }}

          >
            <h2 className="text-[32px] sm:text-[36px] font-extrabold leading-tight">
              What aWaits you
            </h2>

          </div>
          {/* middle segment of whataWaits you */}
          <div className="rounded-t-[30px] bg-[#26b9b0] px-6 py-16 text-center w-full max-w-[1200px]"
            style={{ backgroundColor: '#21b191'}}
          >
            <p className="text-[30px] sm:text-[40px] font-bold leading-relaxed">
              Keynote | Plenary Speaker | Panel Discussion <br />
              Concurent Sessions | Lots Of Learning | More Fun

            </p>
          </div>
          {/* Last segment of what await */}
          <div className="rounded-b-[30px] bg-[#d23c9d] px-6 py-12 text-center w-full max-w-[1200px] -mt-[8px]"
            style={{ backgroundColor: '#d23c9d'}}
          >
            <h3 className="text-[18px] sm:text-[20px] font-semibold">
              Events speakers are drawn From:<br />

            </h3>
            <p className="text-[16px] sm:text-[18px] font-medium mt-2">
              Ghana, United States of America, United Arab Emirates.

            </p>

          </div>

        </section>
    </section>
  );
}