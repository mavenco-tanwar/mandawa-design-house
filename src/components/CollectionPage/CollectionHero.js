import Image from "next/image";
import { useState } from "react";

const CollectionHero = ({title, description}) => {
  const images = [
    { src: "/images/global/Slider-Product-01.png", alt: "Dining Table" },
    { src: "/images/global/Slider-Product-02.png", alt: "Bar Stools" },
    { src: "/images/global/Slider-Product-03.png", alt: "Lamp" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="p-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex gap-10 xl:gap-[40px] items-center">
          <div className="w-[400px] flex-shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919]">
              {title}
            </h2>
            <p className="mt-4 font-poppins text-base md:text-lg text-[#666666]">
              {description}
            </p>
          </div>

          <div className="flex-1 flex gap-[14px] h-[460px]">
            {images.map((img, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={`relative overflow-hidden rounded-lg transition-all duration-500 cursor-pointer 
            ${activeIndex === index ? "flex-[3]" : "flex-[1]"}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
