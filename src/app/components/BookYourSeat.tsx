//*SECURITY & STAKEHOLDER NOTES AT BOTTOM*

"use client"; // Enables client-side rendering in Next.js — necessary for interactivity like hover states or navigation

export default function SectionDivider() {
  return (
    // Main container with a safe, hardcoded gradient background — no user input involved
    <div className="w-full h-[85px] flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#849ac0_0%,_#849ac0_10%,_#C62F9D_50%,_#C62F9D_100%)]">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
        target="_blank" // Ensures external link opens in a new tab
        rel="noopener noreferrer" // Security best practice: prevents `window.opener` exploits (tab-nabbing)
        className="text-white font-semibold border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#C62F9D] transition duration-300"
      >
        Book Your Seat
      </a>
    </div>
  );
}

//Security Adherence Notes:

// rel="noopener noreferrer": Prevents reverse tabnabbing when opening external links in a new tab.

//  Hardcoded link: No dynamic inputs — avoids injection vulnerabilities or manipulation of the anchor URL.

//  Static content: No user-generated HTML or script — protects against XSS.

//  Tailwind CSS styling: Fully class-based with no inline scripts or dynamic styling risks.

//  Client component: Interactivity (hover, transition) is safe because it's entirely style-based — no untrusted JS execution.

//565 Stakeholder Notes:

//  Trusted external link – The button only goes to a Google Form hosted by your team. Users can’t change the destination or redirect to fake pages.

//  New tab + security protection – The link opens in a new browser tab and uses safeguards to make sure no one can hijack the page behind the scenes.

//  No user interaction risks – The button is safe to click; it just links out — no forms, no data storage, and no code execution happens here.

//  Safe visual effects – Hover animations are handled by styling rules and don’t involve risky code.

//  Hardcoded and simple – This section is intentionally simple, leaving no room for unintended behaviors or cyber threats.