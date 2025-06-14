'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  year: number;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialSlider({ testimonials }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="bg-white px-4 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            What Our Attendees Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it—see what attendees achieved after just one conference.
            </p>
        </div>


        <div className="relative">
          {/* Testimonial Card */}
          <div className="flex flex-col items-center rounded-2xl bg-neutral-light p-8 shadow-lg transition-all duration-500 md:flex-row md:space-x-8">
            {/* Image */}
            <div className="mb-6 h-32 w-32 overflow-hidden rounded-full md:mb-0">
              <Image
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                width={128}
                height={128}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <blockquote className="mb-4 text-lg italic text-gray-700">
              &quot;&quot;{currentTestimonial.quote}&quot;&quot;
              </blockquote>
              <div className="font-semibold text-pa-background">
                {currentTestimonial.name}
              </div>
              <div className="text-sm text-gray-600">
                {currentTestimonial.role} at {currentTestimonial.company}
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="mt-6 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 