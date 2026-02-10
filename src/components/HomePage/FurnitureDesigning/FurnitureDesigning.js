import React from "react";
import furnitureDesigningData from "@/data/furnitureDesigningData.json";
import FurnitureDesignCards from "./FurnitureDesignCards";
import Button from "@/components/Global/Buttons";
import Link from "next/link";
import Image from "next/image";

const FurnitureDesigning = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
          <div>
            <div className="max-w-[1035px] flex mb-10 flex-col gap-3.5">
              <h2 className="text-4xl md:text-4xl font-belleza  text-[#2f2a28]">
                Our Specialisation
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B] leading-relaxed">
                We specialise in <b>custom and bulk handcrafted furniture</b>, including: - Furniture for boutique hotels, heritage properties, and resorts - Statement pieces for luxury residential and commercial interiors - Region-inspired collections based on Indian art and culture
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B] leading-relaxed">
                <b>Materials & Techniques</b>: - Seasoned solid wood - Traditional joinery - Hand carving and hand painting - Natural and heritage finishes
              </p>
            </div>
            <div className="max-w-[1035px] flex flex-col gap-3.5">
              <h2 className="text-4xl md:text-4xl font-belleza  text-[#2f2a28]">
                Who We Work With
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B] leading-relaxed">
                We collaborate with: - Boutique and heritage hotels - Interior designers and architects - International buyers and importers - Curators and collectors
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B] leading-relaxed">
                If you value originality, craftsmanship, and cultural integrity, we align.
              </p>
            </div>
          </div>
          <div className="flex gap-2 xl:h-[430px]">
            <div className="relative h-[430px] flex-1 shadow-[0_4px_8px_#0000004d]  ">
              <Image
                src={"/images/global/image 30.png"}
                alt="working images"
                fill
                className="object-cover  "
              />
            </div>
          </div>
        </div>
      </div>
    </section>

  );
};

export default FurnitureDesigning;
