// app/_components/PastAttendees.tsx


const attendees = [
    { src: '/images/past-attendees/attendee-1.jpg', name: 'Attendee group 01' },
    { src: '/images/past-attendees/attendee-2.jpg', name: 'Attendee group 02' },
    { src: '/images/past-attendees/attendee-3.jpg', name: 'Attendee group 03' },
    { src: '/images/past-attendees/attendee-4.jpg', name: 'Attendee group 04' },
    { src: '/images/past-attendees/attendee-5.jpg', name: 'Attendee group 05' },
    { src: '/images/past-attendees/attendee-6.jpg', name: 'Attendee group 06' },
    { src: '/images/past-attendees/attendee-7.jpg', name: 'Attendee group 07' },
    { src: '/images/past-attendees/attendee-8.jpg', name: 'Attendee group 08' },
    // Add more attendees
];

const PastAttendees = () => {
    return (
        <section className="bg-white py-16 px-4">
            <div className="max-w-[1200px] mx-auto text-left">
                <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#d23c9d] mb-12 pl-4 sm:pl-6">
                    Past Attendees
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 items-center justify-center">
                    {attendees.map((person, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <img
                                src={person.src}
                                alt={person.name}
                                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-md transform transition-transform duration-300 hover:scale-105 hover:-translate-y-1"
                            />

                            <span className="mt-2 text-[14px] font-medium">{person.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PastAttendees;