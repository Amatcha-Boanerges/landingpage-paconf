// app/_components/PastAttendees.tsx

const PastAttendees = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading aligned with banner images */}
        <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-[#1C1C1C] mb-20">
              We trained PAs from the following Companies
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">PwC</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">GCB Bank</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">Ghana Cocoa Board</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">CalBank</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">Enterprise Group</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-12 h-12 bg-gray-300 rounded"></div>
                <span className="text-lg font-semibold">University of Ghana</span>
              </div>
            </div>
          </div>

        </div>
    </section>
  );
};

export default PastAttendees;
