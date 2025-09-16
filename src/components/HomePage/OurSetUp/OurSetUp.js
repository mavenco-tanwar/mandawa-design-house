import React, { useEffect, useState } from 'react'
import LinearBgHeading from '../LinearBgHeading'
import Image from 'next/image'

const OurSetUp = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  const items = [
    { title: "Assembly", img: "/images/global/image 35.png" },
    { title: "Sanding", img: "/images/global/image 37.png" },
    { title: "Polishing", img: "/images/global/image 40.png" },
  ];

  return (
    <section>
      <LinearBgHeading text={"OUR SET UP"} />
      <div className="py-[60px] px-4 sm:px-6 md:px-8">
        <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {items.map((item, index) => (
              <div
                key={index}
                className={`relative flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer group`}
                onClick={() => handleInteraction(index)}
              >
                <div className="relative w-full min-h-[350px] sm:min-h-[350px] md:min-h-[380px] lg:min-h-[440px]">
                  <Image
                    src={item.img}
                    fill
                    alt={item.title}
                    className="object-cover"
                  />
                  <div
                    className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 
                      transition-all duration-300
                      ${isMobile
                        ? activeIndex === index
                          ? "opacity-100"
                          : "opacity-0"
                        : "opacity-0 group-hover:opacity-100"}`}
                  >
                    <h4
                      className={`mt-3 transition-all duration-300 font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-white text-center px-2
                        ${isMobile
                          ? activeIndex === index
                            ? "mt-0"
                            : "mt-3"
                          : "group-hover:mt-0"}`}
                    >
                      {item.title}
                    </h4>
                  </div>
                </div>
                <div
                  className={`flex justify-center relative transition-all duration-300
                    ${isMobile
                      ? activeIndex === index
                        ? "bottom-3 opacity-0"
                        : "bottom-0 opacity-100"
                      : "bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0"}`}
                >
                  <p className="font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-[#191919] text-center">
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

export default OurSetUp
