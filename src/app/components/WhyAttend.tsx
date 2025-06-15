//*SECURITY & STAKEHOLDER NOTES AT BOTTOM*

"use client"; // Enables client-side rendering for interactivity (e.g., hover effects)

import Image from "next/image"; // Imports Next.js optimized image component

export default function WhyAttend() {
  // Static array of card content: each object includes text, image path, and background color class
  const cards = [
    {
      text: "Seeks to elevate your professional game of delivering outstanding results",
      image: "/images/attend1.jpg",
      bgColor: "bg-primary", // Class defined in tailwind.config.ts
    },
    {
      text: "Wants to broaden your scope of work beyond the borders of Ghana",
      image: "/images/attend2.jpg",
      bgColor: "bg-secondary",
    },
    {
      text: "Is looking to equip yourself with insights, tools and relevant skills for the modern place of work",
      image: "/images/attend3.jpg",
      bgColor: "bg-primary",
    },
    {
      text: "Seeks to transform your way of work to keep you relevant to your executives",
      image: "/images/attend4.jpg",
      bgColor: "bg-secondary",
    },
    {
      text: "Seeks to add value to your professional and personal life",
      image: "/images/attend5.jpg",
      bgColor: "bg-primary",
    },
  ];

  return (
    // Top-level section for the "Why Attend" content; styled with custom brand background
    <section
      id="whyattend"
      className="bg-[#05183E] text-white py-16 px-4 md:px-8"
    >
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Header with main title and description */}
        <header className="text-left space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Why attend the 2025 PA Conference
            <span className="text-[#2EC4B6]">?</span>
          </h2>
          <p className="text-xl md:text-2xl max-w-3xl text-gray-200">
            The PA Conference is for you if you are a Personal, Executive,
            Administrative, Business, or Project Assistant who:
          </p>
        </header>

        {/* Render each card using the data array */}
        <div className="space-y-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-stretch gap-7 bg-[#05183E] rounded-3xl p-4 shadow-md hover:scale-[1.01] transition-transform"
            >
              {/* Text block: placed left or right depending on row index */}
              <div
                className={`w-full md:w-1/3 min-h-[250px] p-6 flex items-center text-left text-white font-bold text-2xl md:text-3xl rounded-3xl ${card.bgColor} ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                {card.text}
              </div>

              {/* Image block: alternates with text block by using order classes */}
              <div
                className={`w-full md:w-2/3 min-h-[250px] ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
              >
                <Image
                  src={card.image}
                  alt="PA Conference Attendee"
                  width={800}
                  height={500}
                  className="rounded-3xl object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

//Security Adherence Notes:

// No user input is used—prevents injection/XSS risks.

// next/image ensures safe and optimized image rendering (avoids URL/path traversal issues).

//  No external script injection, form handling, or dynamic imports that could compromise content security.

//565 Stakeholder Notes:

//   No user input involved – The text and images are pre-written in the code, so there's no way for a user to enter harmful content or break anything.

//  Safe image loading – We use a secure image method that prevents loading fake or unsafe files, and keeps the site fast.

//  Consistent layout – Alternating image and text positions are controlled by logic in the code — there’s no room for outside interference or bugs.

//  Tailwind CSS – All visual styling is handled with a trusted design framework, so there’s no risk of accidental exposure to unsafe code.

//  Text is fixed and controlled – All the content is hardcoded by the developer, making the component stable and resistant to security threats.