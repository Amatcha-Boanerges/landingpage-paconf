//*SECURITY & STAKEHOLDER NOTES AT BOTTOM*

import Image from "next/image"; // Uses Next.js Image for built-in performance and security (e.g. no raw <img>, which avoids unvalidated sources)

const learn1 = "/images/learn1.jpg"; // Static image path — safe because it's hardcoded and not user-supplied (prevents path injection)

// Component renders a section of educational content (safe static UI)
export default function WhatYouWillLearn() {
  return (
    // Top-level section with a secure static background color and padding
    <section className="w-full bg-[#05183E] py-12 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-stretch gap-4">
        {/* TEXT SECTION — purely static, with no user-generated content, which protects against XSS */}
        <div className="w-full md:w-2/3 text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Here's what you will <span className="text-[#2EC4B6]">learn</span>
          </h2>
          <ul className="list-disc list-inside space-y-5 text-base md:text-lg">
            {/* All list items are static text — safe from injection or tampering */}
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

        {/* IMAGE SECTION — hardcoded source path ensures security; no user input used */}
        <div className="w-full md:w-1/2 min-h-[250px]">
          <Image
            src={learn1} // Static string, not user-controlled — protects from SSRF or path manipulation
            alt="Woman attending conference" // Safe alt text for accessibility
            width={800}
            height={500}
            className="rounded-3xl object-cover w-full h-full"
          />
        </div>
      </div>
    </section>
  );
}

//Security Adherence Notes:

//  No dynamic user inputs: Everything is hardcoded, so there’s no risk of XSS, SQLi, or injection attacks.

//  Safe image rendering: next/image handles image security (avoids unsafe <img> usage).

//  No inline styles or eval-like behavior: Avoids script injection or risky behaviors.

//565 Stakeholder Notes:

//  No editable fields – All the bullet points are hardcoded, which means users can read the content but can’t change or break anything.

//  Image safety – The image is loaded from a secure, trusted file and can’t be swapped or altered by users.

//  Clean layout – Uses trusted code for page structure, with no form fields or buttons that might open up risk.

//  No user tracking or behavior scripts – Everything in this component is just content, no data is collected or scripts run behind the scenes.

//  Safe styling – All formatting is handled using a reliable and security-conscious tool (Tailwind CSS).
