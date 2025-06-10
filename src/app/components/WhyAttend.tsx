// app/_components/WhyAttend.tsx
import Image from 'next/image';

const reasons = [
  {
    image: '/images/why-attend-1.png',
    text: 'Seeks to elevate your professional game of delivering outstanding results',
    bgColor: 'bg-fuchsia-700',
  },
  {
    image: '/images/why-attend-2.png',
    text: 'Wants to broaden your scope of work beyond the borders of Ghana',
    bgColor: 'bg-teal-600',
  },
  {
    image: '/images/why-attend-3.png',
    text: 'Is looking to equip yourself with insights, tools and relevant skills for the modern place of work',
    bgColor: 'bg-fuchsia-700',
  },
  {
    image: '/images/why-attend-4.png',
    text: 'Seeks to transform your way of work to keep you relevant to your executives',
    bgColor: 'bg-teal-600',
  },
  {
    image: '/images/why-attend-5.png',
    text: 'Seeks to add value to your professional and personal life',
    bgColor: 'bg-fuchsia-700',
  },
  {
    image: '/images/why-attend-6.png',
    text: '',
    bgColor: '',
  },
];

export default function WhyAttend() {
  return (
    <section section id="whyattend" className="bg-secondary text-white py-10 px-4 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-center">
        </div>
        <h1 className="text-3xl md:text-4xl font-extrabold uppercase tracking-wide">
          Build your Why Attend section here
        </h1>
      </div>
    </section>
  );
}
