import Image from "next/image";
import React from "react";
import Button from "@/components/Global/Buttons";
import Link from "next/link";

const MandawaHomeImage = () => {
  return (
    // <section>
    //   <div className="relative min-h-[590px] md:min-h-[745px] w-full">
    //     {/* Background image */}
    //     <Image
    //       src="/images/global/image 5.png"
    //       alt="mandawa design house big image"
    //       fill
    //       priority
    //       className="object-cover object-[40%_50%] md:object-center"
    //     />

    //     {/* Overlay + Center content */}
    //     <div className="absolute inset-0 flex flex-col items-center justify-start gap-4 text-center px-4
    //             pt-24 sm:pt-28 md:pt-36
    //             bg-gradient-to-b from-black/60 via-black/40 to-black/80">
    //       <Image
    //         src="/images/global/image-VM.png"
    //         width={90}
    //         height={90}
    //         alt="mandawa design house Logo"
    //         className="bg-[#F6F4EE] p-[10px] rounded-full"
    //       />

    //       <h3 className="text-white text-[32px] sm:text-[44px] md:text-[80px] font-belleza leading-tight">
    //         Mandawa Design House
    //       </h3>
    //     </div>

    //     {/* Bottom content */}
    //     <div className="absolute bottom-15 md:bottom-28 left-1/2 -translate-x-1/2 w-full px-4">
    //       <div className="max-w-[900px] mx-auto text-center">
    //         <p className="text-white text-xs sm:text-sm md:text-lg mb-2">
    //           <b>Crafting India’s Living Heritage Through Handcrafted Furniture</b>
    //         </p>

    //         <p className="text-white text-xs sm:text-sm md:text-base mb-2">
    //           Mandawa Design House is not a furniture factory. It is a
    //           <b> heritage-driven design house</b> dedicated to preserving India’s
    //           disappearing art forms through handcrafted furniture. Every piece
    //           is created by skilled artists whose hands carry generations of
    //           knowledge, patience, and cultural memory.
    //         </p>

    //         <p className="text-white text-xs sm:text-sm md:text-base">
    //           We work exclusively on <b>bulk, custom, and long-term B2B projects</b> for
    //           clients who value originality, depth, and legacy over mass
    //           production.
    //         </p>
    //       </div>
    //       <div className="flex justify-center mt-10">
    //         <Link href="/contact-us">
    //           <Button text="Discuss a Bulk or Custom Project" className="px-2" variant="whiteSubscribe" />
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="relative h-screen w-full mt-[-108px]">
      {/* Background Image */}
      <Image
        src="/images/homePageImages/hero.png"
        alt="Mandawa Design House Forest"
        fill
        priority
        className="object-cover"
      />

      {/* CENTER LOGO */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <Image
          src="/images/homePageImages/mandawaLogo.png"
          alt="Mandawa Design House"
          width={450}
          height={300}
          className="object-contain w-[450px] max-md:w-[280px]"
        />
      </div>

      {/* BOTTOM TEXT */}
      <div className="absolute bottom-10 md:bottom-14 left-1/2 z-10 w-full -translate-x-1/2 px-6 text-center text-white">
        <p className="text-xs md:text-[22px] tracking-widest">
          ONCE A LIVING TREE, ROOTED IN THE EARTH.
          <br />
          NOW GIVEN A SECOND LIFE, CRAFTED TO BELONG IN YOUR HOME
        </p>
      </div>
    </section>

  );
};

export default MandawaHomeImage;
