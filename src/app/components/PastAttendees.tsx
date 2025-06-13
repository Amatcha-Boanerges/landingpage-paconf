// app/_components/PastAttendees.tsx
const PastAttendees = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto text-center">
                <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#d23c9d] mb-12">
                    Past Attendees
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
                    {/* Add logos here */}
                </div>
            </div>
        </section>
    );
};

export default PastAttendees;
