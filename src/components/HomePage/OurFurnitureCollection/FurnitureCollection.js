import Image from "next/image";
import React from "react";
import FurnitureCollectionData from "@/data/FurnitureCollectionData.json";
import Button from "@/components/Global/Buttons";
import Link from "next/link";

const FurnitureCollection = () => {
  return (
  <section className="py-[80px] px-4">
  <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
    
    <div className="flex justify-center items-center">
      <div className="max-w-[811px] flex flex-col gap-3.5">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-belleza  text-[#2f2a28] uppercase text-center">
          Our Furniture Collection
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-poppins text-[#42393B] text-center">
          Explore our premium collection of modern furniture, thoughtfully
          designed to elevate your living spaces. Find the perfect piece for
          your home, whether it&apos;s a cozy sofa, elegant bookshelf, or a
          functional dining table.
        </p>
      </div>
    </div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {FurnitureCollectionData.map((data, index) => (
        <div key={index} className=" flex flex-col items-center text-center">
          <div className="relative w-full h-[400px]">
            <Image
            src={data.image}
            alt={data.title}
            fill
            className="w-full h-[400px] object-contain"
          />
          </div>
          <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-belleza text-[#42393B]">{data.title}</h3>
          <p className="mt-2 text-[#42393B] font-poppins max-w-[300px] text-[12px] sm:text-base">
            {data.description}
          </p>
        </div>
      ))}
    </div>

    <div className="flex justify-center">
      <Link href="/collection">
      <Button text={"Explore Collection"} variant="Brown" />
      </Link>
    </div>
  </div>
</section>


  );
};

export default FurnitureCollection;
