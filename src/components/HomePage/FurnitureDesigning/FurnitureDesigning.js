import React from "react";
import furnitureDesigningData from "@/data/furnitureDesigningData.json";
import FurnitureDesignCards from "./FurnitureDesignCards";
import Button from "@/components/Global/Buttons";

const FurnitureDesigning = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
  <div className="max-w-[1280px] m-auto flex flex-col gap-[40px]">
    
    {/* Heading & Description */}
    <div className="flex justify-center items-center">
      <div className="max-w-[1035px] flex flex-col gap-3.5">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919] text-center">
          Furniture Designing
        </h2>
        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins text-[#A3A3A3] text-center leading-relaxed">
          Furniture design is a process of planning and creating furniture for homes, offices,
          or other spaces, focusing on aesthetics, functionality, and comfort. It encompasses
          various aspects, including material selection, structural integrity, ergonomics, and
          overall design style. Essentially, furniture designers strive to create objects that
          are both visually appealing and serve a practical purpose in a given environment.
        </p>
      </div>
    </div>

    {/* Cards Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {furnitureDesigningData.map((data, index) => (
        <FurnitureDesignCards key={index} cards={data} />
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

export default FurnitureDesigning;
