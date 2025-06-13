// app/_components/PastAttendees.tsx

const PastAttendees = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto">
                {/* Heading aligned with banner images */}
                <div className="pl-8 sm:pl-20">
                    <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#d23c9d] mb-12">
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
