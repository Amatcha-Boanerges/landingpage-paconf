"use client"; // Enables client-side rendering in Next.js (required for interactivity)

import Image from "next/image"; // Secure image optimization via Next.js

export default function WhyAttend() {
  // Static array of card data — ensures no direct user input (protects from XSS and injection)
  const cards = [
    {
      text: "Seeks to elevate your professional game of delivering outstanding results",
      image: "/images/attend1.jpg",
      bgColor: "bg-primary", //(tw)See Tailwind colors(tailwind.config.ts)
    },
    {
      text: "Wants to broaden your scope of work beyond the borders of Ghana",
      image: "/images/attend2.jpg",
      bgColor: "bg-secondary", //(tw)
    },
    {
      text: "Is looking to equip yourself with insights, tools and relevant skills for the modern place of work",
      image: "/images/attend3.jpg",
      bgColor: "bg-primary", //(tw)
    },
    {
      text: "Seeks to transform your way of work to keep you relevant to your executives",
      image: "/images/attend4.jpg",
      bgColor: "bg-secondary", //(tw)
    },
    {
      text: "Seeks to add value to your professional and personal life",
      image: "/images/attend5.jpg",
      bgColor: "bg-primary", //(tw)
    },
  ];

  return (
    // Section container with dark background and white text for accessibility
    <section
      id="whyattend"
      className="bg-[#05183E] text-white py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Section heading */}
        <header className="text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-wide">
            Why attend the 2025 PA Conference
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-200">
            The PA Conference is for you if you are a Personal, Executive,
            Administrative, Business, or Project Assistant who:
          </p>
        </header>

        {/* Loop through card data to render each image + text pair */}
        <div className="space-y-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch gap-4 bg-[#05183E] rounded-xl p-4 shadow-md hover:scale-[1.01] transition-transform"
            >
              {/* Text Section - Takes 1/3 of the width on medium+ screens
                  Uses conditional class to alternate position based on index */}
              <div
                className={`w-full md:w-1/3 min-h-[250px] p-6 flex items-center text-left text-white font-bold text-2xl md:text-3xl rounded-lg ${card.bgColor} ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                {card.text}
              </div>

              {/* Image Section - Takes 2/3 of the width
                  Alternates image position just like the text */}
              <div
                className={`w-full md:w-2/3 min-h-[250px] ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                {/* Next.js Image optimization improves security and performance by:
                    - Preventing path traversal attacks
                    - Serving responsive images
                    - Preventing layout shifts */}
                <Image
                  src={card.image}
                  alt="PA Conference Attendee"
                  width={800}
                  height={500}
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
