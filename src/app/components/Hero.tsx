// app/_components/Hero.tsx
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="bg-secondary text-white py-10 px-4 text-center">
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