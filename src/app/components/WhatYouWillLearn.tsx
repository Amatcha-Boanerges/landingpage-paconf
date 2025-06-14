import Image from 'next/image';
const learn1 = '/images/learn1.jpg';

export default function WhatYouWillLearn() {
  return (
    <section className="w-full bg-[#05183E] px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-stretch gap-0 md:flex-row">
        {/* Text Section */}
        <div className="w-full text-white md:w-2/3">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            Here&apos;s what you will <span className="text-[#2EC4B6]">learn</span>
          </h2>
          <ul className="list-inside list-disc space-y-5 text-base md:text-lg">
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
        <div className="min-h-[250px] w-full md:w-1/2">
          <Image
            src={learn1}
            alt="Woman attending conference"
            width={800}
            height={500}
            className="h-full w-full rounded-3xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
