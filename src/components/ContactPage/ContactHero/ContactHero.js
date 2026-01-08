import Image from "next/image";
import React from "react";

const ContactHero = ({title, imageUrl}) => {
  return (
    <section className="py-[60px] px-4">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
        <div className="flex justify-center items-center">
          <h1 className="font-belleza text-5xl md:text-5xl lg:text-6xl text-[#3FA291] text-center">
            {title}
          </h1>
        </div>

        <div className="relative hidden lg:block w-full h-[330px] sm:h-[330px] md:h-[330px] shadow-[0_4px_8px_#0000004d] rounded-lg">
          <Image
            src={imageUrl}
            alt="Contact page hero"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
