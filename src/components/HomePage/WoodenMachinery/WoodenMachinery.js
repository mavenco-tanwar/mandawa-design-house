import React, { useEffect, useState } from "react";
import LinearBgHeading from "../LinearBgHeading";
import Image from "next/image";

const WoodenMachinery = () => {
 const [activeIndex, setActiveIndex] = useState(null);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleToggle = (idx) => {
    if (isMobileOrTablet) {
      setActiveIndex(activeIndex === idx ? null : idx);
    }
  };

  const rows = [
    [
      { img: "/images/global/image 28.png", title: "Sliding Table Saw" },
      { img: "/images/global/image 51.png", title: "Double-Sided Planer" },
    ],
    [
      { img: "/images/global/image 30.png", title: "Clamp Carrier Machine" },
      { img: "/images/global/image 23.png", title: "Mortiser Machine Taiwan" },
      { img: "/images/global/image 32.png", title: "Wide Belt Sander" },
    ],
    [
      { img: "/images/global/image 34.png", title: "Round End Tenoner" },
      { img: "/images/global/image 33.png", title: "Straight-Line Rip Saw" },
    ],
  ];

  return (
    <section>
      <LinearBgHeading text={"WOODEN MACHINERY"} />
      <div className="py-[80px] px-4">
        <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid ${
                row.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
              } gap-6 sm:gap-10`}
            >
              {row.map((item, i) => {
                const idx = `${rowIndex}-${i}`;
                return (
                  <div
                    key={idx}
                    className="relative group flex flex-col gap-4 sm:gap-[30px] cursor-pointer"
                    onClick={() => handleToggle(idx)}
                  >
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.img}
                        fill
                        alt={item.title}
                        className="object-cover"
                      />
                      <div
                        className={`absolute top-0 w-full h-full flex justify-center items-center bg-black/50 transition-all duration-300
                          ${
                            isMobileOrTablet
                              ? activeIndex === idx
                                ? "opacity-100"
                                : "opacity-0"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <h4
                          className={`mt-5 transition-all duration-300 font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-white text-center px-2
                            ${
                              isMobileOrTablet
                                ? activeIndex === idx
                                  ? "mt-0"
                                  : "mt-5"
                                : "group-hover:mt-0"
                            }`}
                        >
                          {item.title}
                        </h4>
                      </div>
                    </div>
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
                      <p className="font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-[#191919] text-center px-2">
                        {item.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WoodenMachinery;
