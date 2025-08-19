import React, { useEffect, useState } from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const ManufacturingSection = () => {
    const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  const items = [
    { src: "/images/global/image 11.png", title: "C T P & Wood Seasoning" },
    { src: "/images/global/image 22.png", title: "Wood Storage Area" },
    { src: "/images/global/image 26.png", title: "Our Set Up : Manufacturing" }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024); // tablet & mobile
    };
    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (idx) => {
    if (isMobileOrTablet) {
      setActiveIndex(activeIndex === idx ? null : idx);
    }
  };

  return (
    <section>
      <LinearBgHeading text={"MANUFACTURING SECTIONS"} />
      <div className="py-[80px] px-4 bg-[#F6F4EE]">
        <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {items.map((item, idx) => (
              <div
                key={idx}
                className="relative group flex flex-col gap-[30px] cursor-pointer"
                onClick={() => handleToggle(idx)}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] w-full">
                  <Image
                    src={item.src}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />

                  {/* Overlay */}
                  <div
                    className={`absolute top-0 w-full h-full flex justify-center items-center bg-black/50 
                      transition-all duration-300 
                      ${
                        isMobileOrTablet
                          ? activeIndex === idx
                            ? "opacity-100"
                            : "opacity-0"
                          : "opacity-0 group-hover:opacity-100"
                      }`}
                  >
                    <h4
                      className={`transition-all duration-300 font-belleza text-lg sm:text-xl md:text-2xl lg:text-[34px] text-white text-center px-4
                        ${
                          isMobileOrTablet
                            ? activeIndex === idx
                              ? "mt-0"
                              : "mt-5"
                            : "mt-5 group-hover:mt-0"
                        }`}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>

                {/* Static label */}
                <div
                  className={`flex justify-center relative bottom-0 transition-all duration-300 
                    ${
                      isMobileOrTablet
                        ? activeIndex === idx
                          ? "opacity-0 bottom-5"
                          : "opacity-100"
                        : "opacity-100 group-hover:opacity-0 group-hover:bottom-5"
                    }`}
                >
                  <p className="font-belleza text-lg sm:text-xl md:text-2xl lg:text-[34px] text-[#191919] text-center px-4">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ManufacturingSection
