import Image from "next/image";
import { useState } from "react";

const CollectionHero = ({ category }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = category?.banners?.length
    ? category.banners.map((url, i) => ({
        src: url,
        alt: `${category.name} Banner ${i + 1}`,
      }))
    : [
        { src: "/images/global/Slider-Product-01.png", alt: "Dining Table" },
        { src: "/images/global/Slider-Product-02.png", alt: "Bar Stools" },
        { src: "/images/global/Slider-Product-03.png", alt: "Lamp" },
      ];

  return (
    <section className="p-[20px] md:p-[80px] bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex gap-10 xl:gap-[40px] items-center">
          <div className="w-fit md:w-[400px] flex-shrink-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-belleza  text-[#2f2a28] uppercase">
              {category?.name ?? "Our Collection"}
            </h2>
            <p className="mt-4 font-poppins text-[12px] text-[#42393B]">
              {category?.description ?? "More than furniture, this is an experience. Our collection is a testament to the harmony of craft and comfort, created to transform ordinary seating into extraordinary moments of ease."}
            </p>
          </div>

          <div className="flex-1 hidden md:flex gap-[14px] h-[460px]">
            {images.map((img, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(0)}
                className={`relative overflow-hidden   transition-all duration-500 cursor-pointer shadow-[0_4px_8px_#0000004d]   
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
