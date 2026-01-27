import Image from "next/image";
import React from "react";

const ContactHero = ({title, imageUrl}) => {
  return (
    // <section className="py-[60px] px-4">
    //   <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
    //     <div className="flex justify-center items-center">
    //       <h1 className="font-belleza text-5xl md:text-5xl lg:text-6xl text-[#3FA291] text-center">
    //         {title}
    //       </h1>
    //     </div>

    //     <div className="relative hidden lg:block w-full h-[330px] sm:h-[330px] md:h-[330px] shadow-[0_4px_8px_#0000004d] rounded-lg">
    //       <Image
    //         src={imageUrl}
    //         alt="Contact page hero"
    //         fill
    //         className="object-cover rounded-lg"
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden relative h-[90vh] w-full mt-[-108px]">
      {/* Background Image */}
      <Image
        src="/images/global/contacthero.png" // place image in public/images
        alt="Contact"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay (optional, helps text pop) */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Centered Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white font-serif text-[48px] sm:text-[64px] md:text-[120px] tracking-[0.25em] uppercase">
          Contact Us
        </h1>
      </div>
    </section>
  );
};

export default ContactHero;
