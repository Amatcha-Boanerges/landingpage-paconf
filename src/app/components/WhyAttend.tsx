'use client'; // Enables client-side rendering in Next.js (required for interactivity)

import Image from 'next/image'; // Secure image optimization via Next.js

export default function WhyAttend() {
  // Static array of card data — ensures no direct user input (protects from XSS and injection)
  const cards = [
    {
      text: 'Seeks to elevate your professional game of delivering outstanding results',
      image: '/images/attend1.jpg',
      bgColor: 'bg-primary', //(tw)See Tailwind colors(tailwind.config.ts)
    },
    {
      text: 'Wants to broaden your scope of work beyond the borders of Ghana',
      image: '/images/attend2.jpg',
      bgColor: 'bg-secondary', //(tw)
    },
    {
      text: 'Is looking to equip yourself with insights, tools and relevant skills for the modern place of work',
      image: '/images/attend3.jpg',
      bgColor: 'bg-primary', //(tw)
    },
    {
      text: 'Seeks to transform your way of work to keep you relevant to your executives',
      image: '/images/attend4.jpg',
      bgColor: 'bg-secondary', //(tw)
    },
    {
      text: 'Seeks to add value to your professional and personal life',
      image: '/images/attend5.jpg',
      bgColor: 'bg-primary', //(tw)
    },
  ];

  return (
    // Section container with dark background and white text for accessibility
    <section id="whyattend" className="bg-pa-background px-4 py-16 text-white md:px-8">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Section heading */}
        <header className="space-y-4 text-left">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Why attend the  <span className="text-secondary">2025 PA Conference</span>
            </h2>
          </div>
          <p className="max-w-3xl text-xl text-gray-200 md:text-2xl">
            The PA Conference is for you if you are a Personal, Executive, Administrative, Business,
            or Project Assistant who:
          </p>
        </header>

        {/* Loop through card data to render each image + text pair */}
        <div className="space-y-0">
          {cards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col items-stretch gap-7 rounded-3xl bg-[#05183E] p-4 shadow-md transition-transform hover:scale-[1.01] md:flex-row"
            >
              {/* Text Section - Takes 1/3 of the width on medium+ screens
                  Uses conditional class to alternate position based on index */}
              <div
                className={`flex min-h-[250px] w-full items-center rounded-3xl p-6 text-left text-2xl font-bold text-white md:w-1/3 md:text-3xl ${card.bgColor} ${
                  index % 2 === 0 ? 'md:order-1' : 'md:order-2'
                }`}
              >
                {card.text}
              </div>

              {/* Image Section - Takes 2/3 of the width
                  Alternates image position just like the text */}
              <div
                className={`min-h-[250px] w-full md:w-2/3 ${
                  index % 2 === 0 ? 'md:order-2' : 'md:order-1'
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
                  className="h-full w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
