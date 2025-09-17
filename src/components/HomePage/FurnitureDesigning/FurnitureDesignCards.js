import Image from "next/image";
import React from "react";

const FurnitureDesignCards = ({ cards }) => {
  return (
    <div className="flex flex-col gap-3.5">
    <div className="relative w-full aspect-[413/426] bg-white">
  <Image
    src={cards.image}
    alt="Products"
    fill
    className="object-contain"
  />
</div>
    </div>
  );
};

export default FurnitureDesignCards;
