import Image from "next/image";
import React from "react";
import Button from "@/components/Global/Buttons";
import Link from "next/link";

const WhyChooseUs = () => {
  return (
  <section className="py-[80px] px-4 bg-[#F6F4EE]">
  <div className="max-w-[1280px] m-auto grid grid-cols-1 md:grid-cols-2 gap-[40px] items-center">
    <div className="relative min-h-[300px] md:min-h-[586px] sm:min-h-[400px]">
      <Image
        src={"/images/global/imageWhyChoose.png"}
        fill
        alt="why choose us"
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-3.5 max-w-[506px]">
        <h3 className="font-belleza text-4xl md:text-6xl sm:text-5xl  text-[#2f2a28]">
          Why Choose Us?
        </h3>
        <p className="font-poppins text-[#42393B] text-[18px] sm:text-[20px]">
          A company, as a client, looks for Quality delivered Fast and at a low Cost.
        </p>
      </div>

      <div className="flex flex-col gap-3.5 pl-6">
        <ul className="list-disc">
          <li className="font-poppins text-xl sm:text-2xl text-[#42393B]">
            We have the experience
          </li>
        </ul>
        <p className="font-poppins text-[#42393B] text-[18px] sm:text-[20px]">
          To provide consistent quality
        </p>
        <p className="font-poppins text-[#42393B] text-[18px] sm:text-[20px]">
          Delivery on time
        </p>
      </div>

      <div className="flex flex-col gap-3.5 pl-6">
        <ul className="list-disc">
          <li className="font-poppins text-xl sm:text-2xl text-[#42393B]">
            We can provide Low Cost product in Bulk through
          </li>
        </ul>
        <p className="font-poppins text-[#42393B] text-[18px] sm:text-[20px]">
          Leveraging our in-house designing capacity
        </p>
        <p className="font-poppins text-[#42393B] text-[18px] sm:text-[20px]">
          Our Hi-tech production set-up and assembly line
        </p>
      </div>
      <div className="">
            <Link href="/contact-us">
              <Button text="Contact Us" className="px-2" variant="Brown" />
            </Link>
          </div>
    </div>
  </div>
</section>

  );
};

export default WhyChooseUs;
