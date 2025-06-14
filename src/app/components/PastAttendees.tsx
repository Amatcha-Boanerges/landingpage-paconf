// app/_components/PastAttendees.tsx

const PastAttendees = () => {
  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Heading aligned with banner images */}
        <div className="pl-8 sm:pl-20">
          <h2 className="mb-12 text-[28px] font-extrabold text-[#d23c9d] sm:text-[36px]">
            Past Attendees
          </h2>
        </div>

        <div className="space-y-10">
          {/* Partner Logos */}
          <div className="flex justify-center">
            <img
              src="/images/past-attendees/partners-logos.png"
              alt="Partner Logos"
              className="w-full max-w-4xl object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Client Logos */}
          <div className="flex justify-center">
            <img
              src="/images/past-attendees/clients-logos.png"
              alt="Client Logos"
              className="w-full max-w-4xl object-contain transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PastAttendees;
