import Image from "next/image";
import React from "react";
import FurnitureCollectionData from "@/data/FurnitureCollectionData.json";
import Button from "@/components/Global/Buttons";

const FurnitureCollection = () => {
  return (
  <section className="py-[80px] px-4">
  <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
    
    {/* Heading */}
    <div className="flex justify-center items-center">
      <div className="max-w-[811px] flex flex-col gap-3.5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919] text-center">
          Our Furniture Collection
        </h2>
        <p className="text-base sm:text-lg md:text-xl font-poppins text-[#A3A3A3] text-center">
          Explore our premium collection of modern furniture, thoughtfully
          designed to elevate your living spaces. Find the perfect piece for
          your home, whether it&apos;s a cozy sofa, elegant bookshelf, or a
          functional dining table.
        </p>
      </div>
    </div>

    {/* Cards */}
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
          <h3 className="mt-4 text-lg sm:text-xl md:text-2xl font-belleza">{data.title}</h3>
          <p className="mt-2 text-gray-500 font-poppins max-w-[300px] text-sm sm:text-base">
            {data.description}
          </p>
        </div>
      ))}
    </div>

    {/* Button */}
    <div className="flex justify-center">
      <Button text={"Explore More"} variant="Brown" />
    </div>
  </div>
</section>


  );
};

export default FurnitureCollection;
