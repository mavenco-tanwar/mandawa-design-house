import Image from "next/image";
import Link from "next/link";

export default function HandcraftedSplitSection() {
  return (
    <section className="max-w-[1400px] mx-auto px-5 md:px-10 py-10">
<div className="w-full h-px bg-[#D8D5CF] mb-8" />
      {/* TOP HEADING */}
      <div className="text-center mx-auto mb-10">
        <h2 className="uppercase tracking-wide text-xl md:text-2xl font-serif text-[#42393B]">
          Handcrafted Indian Furniture for Homes & Businesses Worldwide
        </h2>
      </div>

      {/* SUB COPY */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-24 text-center items-center md:text-left mb-5">
        <p className="uppercase tracking-widest text-md md:text-lg md:text-center">
          For those who value authenticity.
        </p>
        <p className="uppercase tracking-widest text-md md:text-lg md:text-center">
          B2B furniture for brands that choose depth over mass production.
        </p>
      </div>

      {/* IMAGE CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-24">

        {/* LEFT CARD */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/homePageImages/HandicraftedOne.jpeg"
            alt="Handcrafted Bed"
            width={800}
            height={600}
            className="w-full h-[550px] object-cover object-[50%_70%]"
          />

          {/* CTA */}
          <Link
            href="/collection"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white uppercase text-center underline tracking-widest text-lg"
          >
            Browse Collection
          </Link>
        </div>

        {/* RIGHT CARD */}
        <div className="relative overflow-hidden rounded-[32px] shadow-2xl">
          <Image
            src="/images/homePageImages/HandicraftedTwo.jpeg"
            alt="B2B Custom Furniture"
            width={800}
            height={600}
            className="w-full h-[550px] object-cover object-[30%_70%]"
          />

          {/* CTA */}
          <Link
            href="/contact-us"
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center underline uppercase tracking-widest text-lg"
          >
            Contact for B2B & Custom Orders
          </Link>
        </div>

      </div>
    </section>
  );
}
