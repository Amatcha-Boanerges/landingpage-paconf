// app/_components/WhyAttend.tsx

"use client";

import Image from "next/image";

export default function WhyAttend() {
  const cards = [
    {
      text: "Seeks to elevate your professional game of delivering outstanding results",
      image: "/images/attend1.jpg",
      bgColor: "bg-pink-500",
    },
    {
      text: "Wants to broaden your scope of work beyond the borders of Ghana",
      image: "/images/attend2.jpg",
      bgColor: "bg-teal-500",
    },
    {
      text: "Is looking to equip yourself with insights, tools and relevant skills for the modern place of work",
      image: "/images/attend3.jpg",
      bgColor: "bg-pink-500",
    },
    {
      text: "Seeks to transform your way of work to keep you relevant to your executives",
      image: "/images/attend4.jpg",
      bgColor: "bg-teal-500",
    },
    {
      text: "Seeks to add value to your professional and personal life",
      image: "/images/attend5.jpg",
      bgColor: "bg-pink-500",
    },
  ];

  return (
    <section
      id="whyattend"
      className="bg-secondary text-white py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        <header className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
            Why attend the 2025 PA Conference
          </h2>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
            The PA Conference is for you if you are a Personal , Executive,
            Administrative, Business, or Project Assistant who:
          </p>
        </header>

        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-4 bg-white bg-opacity-5 rounded-xl p-4 shadow-md hover:scale-[1.01] transition-transform`}
            >
              <div  className="w-full md:w-1/2">
                <Image
                  src={card.image}
                  alt="PA Conference Attendee"
                  width={600}
                  height={400}
                  className="rounded-lg object-cover w-full h-auto"
                />
              </div>
              <div
                className={`w-full md:w-1/2 p-4 text-left text-white font-semibold rounded-lg ${card.bgColor}`}
              >
                {card.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
