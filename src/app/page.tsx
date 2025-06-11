export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-[#0c1841] text-white">
      <main className="flex flex-col items-center justify-center relative">
        {/* Section:What aWaits you */}
        <section className="flex flex-col items-center justify-center w-full">
          <div className="z-30 -mb-12 rounded-t-[30px] px-6 py-5 text-center w-[80%] sm:w-[70%]"
            style={{ backgroundColor: '#d23c9d' }}

          >
            <h2 className="text-[32px] sm:text-[36px] font-extrabold leading-tight">
              What aWaits you
            </h2>

          </div>
          {/* middle segment of whataWaits you */}
          <div className="z-20 px-6 py-16 text-center w-[90%] sm:w-[85%] rounded-[30px]"
            style={{ backgroundColor: '#21b191'}}
          >
            <p className="text-[20px] sm:text-[24px] font-bold leading-relaxed">
              Keynote | Plenary Speaker | Panel Discussion <br />
              Concurent Sessions | Lots Of Learning | More Fun

            </p>
          </div>
          {/* Last segment of what await */}
          <div className="z-10 -mt-12 px-6 py-6 text-center w-[85%] sm:w-[75%] rounded-b-[30px]"
            style={{ backgroundColor: '#d23c9d'}}
          >
            <h3 className="text-[18px] sm:text-[20px] font-semibold">
              Events speakers are drawn From:<br />

            </h3>

          </div>

        </section>

      </main>

    </div>
  );
}
