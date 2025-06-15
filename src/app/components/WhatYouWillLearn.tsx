import Image from "next/image";
const learn1 = "/images/learn1.jpg";

export default function WhatYouWillLearn() {
  return (
    <section className="w-full bg-[#05183E] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-4">
        {/* Text Section */}
        <div className="w-full md:w-2/3 text-white">
          <h2 className="text-4xl md:text-3xl font-bold mb-4">
            Here's what you will <span className="text-[#2EC4B6]">learn</span>
          </h2>
          <ul className="list-disc list-inside space-y-5 text-base md:text-lg">
            <li>Building a corporate image from the unseen seat</li>
            <li>Public Speaking – A relevant cross-border skill for success</li>
            <li>Growth ingredients of a PA/EA for international appeal</li>
            <li>Where do I go from here – The Career Path of a PA/EA</li>
            <li>Creating relevance at the highest level as a PA/EA</li>
            <li>The Digital Tools available to the PA/EA for international relevance</li>
            <li>Managing the Multi-dimensional needs of an International Executive</li>
            <li>Managing the Multiple Demands on the PA/EA for Mental Health</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 min-h-[250px]">
          <Image
            src={learn1}
            alt="Woman attending conference"
            width={800}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

