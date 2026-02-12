import Image from "next/image";
import React from "react";

const ContactHero = ({title, imageUrl}) => {
  return (
    // <section className="py-[60px] px-4">
    //   <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
    //     <div className="flex justify-center items-center">
    //       <h1 className="font-belleza text-5xl md:text-5xl lg:text-6xl  text-[#2f2a28] text-center">
    //         {title}
    //       </h1>
    //     </div>

    //     <div className="relative hidden lg:block w-full h-[330px] sm:h-[330px] md:h-[330px] shadow-[0_4px_8px_#0000004d]  ">
    //       <Image
    //         src={imageUrl}
    //         alt="Contact page hero"
    //         fill
    //         className="object-cover  "
    //       />
    //     </div>
    //   </div>
    // </section>
    <section className="relative overflow-hidden h-[70vh] sm:h-[80vh] lg:h-[88.8vh] w-full">
        <Image
          src="/images/global/contactN.png"
          alt="Mandawa wood craftsmanship"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex items-center justify-center px-4">
          <h1 className="
            text-white   uppercase text-center
            text-[24px] sm:text-[64px] md:text-[100px] lg:text-[85px]
            tracking-[0.15em] sm:tracking-[0.25em]
          ">
            Contact Us
          </h1>
        </div>
      </section>
  );
};

export default ContactHero;
