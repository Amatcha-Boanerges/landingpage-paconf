
import Image from "next/image";

export default function AwaitYou() {
  return (
    <header className="bg-[#05183E] shadow-md fixed w-full z-50">
      <div className=" flex items-center justify-between h-16 text-white pl-[25px]">
    
         <Image 
          src="/header_logo.png"
          alt="Hero Image"
          width={125}
          height={42}
          priority
          />
       

        </div>
        </header>
  );
}