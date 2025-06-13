"use client"; // Enables client-side rendering in Next.js (required for interactivity)

export default function SectionDivider() {
  return (
    <div className="w-full h-[85px] flex items-center justify-center bg-[linear-gradient(to_bottom_right,_#849ac0_0%,_#849ac0_10%,_#C62F9D_50%,_#C62F9D_100%)]">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSfRHQWzCp1ppSJcRaqqEdZAvcf7xnqEe-o0iQMoUSBOSkyd-Q/viewform"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-semibold border border-white px-6 py-2 rounded-full hover:bg-white hover:text-[#C62F9D] transition duration-300"
      >
        Book Your Seat
      </a>
    </div>
  );
}
