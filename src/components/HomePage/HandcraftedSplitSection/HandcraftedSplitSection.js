import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Global/Buttons";

export default function HandcraftedSplitSection() {
  return (
    <>
      <section className="px-5 md:px-0 md:pl-14 py-12 md:py-24">
        {/* <div className="w-full h-px bg-[#D8D5CF] mb-8" /> */}
        {/* TOP HEADING */}
        {/* <div className="text-center mx-auto mb-5 md:mb-10">
        <h2 className="uppercase tracking-wide text-xl md:text-2xl   text-[#42393B]">
          Handcrafted Indian Furniture for Homes & Businesses Worldwide
        </h2>
      </div> */}

        {/* SUB COPY */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 text-center items-center md:text-left mb-5">
        <p className="uppercase tracking-widest text-md md:text-[12px] md:text-center">
          For those who value authenticity.
        </p>
        <p className="uppercase tracking-widest text-md md:text-[12px] md:text-center">
          B2B furniture for brands that choose depth over mass production.
        </p>
      </div> */}
        {/* IMAGE CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 items-center">
          {/* LEFT CARD */}
          {/* <div className="relative overflow-hidden shadow-2xl">
          <Image
            src="/images/homePageImages/HandicraftedOne.jpeg"
            alt="Handcrafted Bed"
            width={800}
            height={600}
            className="w-full h-[550px] object-cover object-[50%_70%]"
          />
          <Link
            href="/collection"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white uppercase text-center underline tracking-widest text-lg"
          >
            Browse Collection
          </Link>
        </div> */}
          <div>
            <h4 className="md:text-left text-[24px] md:text-[48px] text-[#000] mb-4">SHOP<br />
              THE ART OF<br />
              REFINED LIVING</h4>
            <hr className="border-t border-gray-300 my-5 md:my-10" />
            <hr className="border-t border-gray-300 mb-5 md:mb-10" />

            <p className="uppercase tracking-widest text-[12px] md:w-[300px] mb-5 md:mb-10">
              B2B furniture for brands that choose depth over mass production.
            </p>
            <Link href="/collection">
              <Button
                text="Collection"
                variant="Brown"
              />
            </Link>
          </div>
          {/* RIGHT CARD */}
          <div className="relative overflow-hidden shadow-2xl">
            <Image
              src="/images/homePageImages/HandicraftedTwo.jpeg"
              alt="B2B Custom Furniture"
              width={735}
              height={544}
              className="w-full h-[550px] object-cover object-[30%_70%]"
            />

            {/* CTA */}
            {/* <Link
            href="/contact-us"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center underline uppercase tracking-widest text-lg"
          >
            Contact for B2B & Custom Orders
          </Link> */}
          </div>
        </div>
      </section>
      <section className="px-5 md:px-0 md:pr-14 pb-12 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24 items-center">
          <div className="relative overflow-hidden shadow-2xl">
            <Image
              src="/images/homePageImages/CRAFTSMANSHIP.jpeg"
              alt="B2B Custom Furniture"
              width={735}
              height={544}
              className="w-full h-[550px] object-cover object-[30%_70%]"
            />
          </div>
          <div>
            <h4 className="text-left text-[24px] md:text-[48px] text-[#000] mb-4">CRAFTSMANSHIP - WHERE HERITAGE MEETS SKILL</h4>
            <hr className="border-t border-gray-300 my-5 md:my-10" />
            <p className="uppercase tracking-widest text-[12px] md:w-[500px] mb-5">
              At Mandawa Design House, wood is shaped into furniture through craft, patience, and intention.
            </p>
            <p className="uppercase tracking-widest text-[12px] md:w-[500px] mb-5">
              From vintage-inspired designs to custom creations, each piece is made to order—carrying detail, depth, and a story of its own.
            </p>
            <p className="uppercase tracking-widest text-[12px] md:w-[500px] mb-5">
              Our furniture is crafted by experienced artisans using traditional hand tools and time-honoured techniques. Every piece reflects the imperfections that make handcrafted furniture truly unique.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
