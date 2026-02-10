import React, { useEffect, useState } from "react";
import LinearBgHeading from "../LinearBgHeading";
import Image from "next/image";

// ✅ Custom hook for screen size detection
const useMediaQuery = (maxWidth) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const handleResize = () => setMatches(window.innerWidth <= maxWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [maxWidth]);

  return matches;
};

const WoodenMachinery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const isMobileOrTablet = useMediaQuery(1024);

  const handleToggle = (idx) => {
    if (isMobileOrTablet) {
      setActiveIndex((prev) => (prev === idx ? null : idx));
    }
  };

  const rows = [
    [
      {
        img: "/images/global/image 28.png",
        title: "Sliding Table Saw",
        description: `A sliding table saw is a powerful woodworking tool designed for making precise cuts in large sheets of material.`,
      },
      {
        img: "/images/global/image 51.png",
        title: "Double-Sided Planer",
        description: `A double-sided planer, also known as a
dual-sided planer or double surfacer, is a
woodworking machine designed for
precision thicknessing and surfacing of
lumber or wood boards. Unlike a single-
sided planer that processes one side of a
board at a time, a double-sided planer
has two cutting heads – one on the top
and one on the bottom. This dual-sided
configuration allows the machine to
simultaneously plane both surfaces of the
wood, ensuring uniform thickness and a
smooth finish on both sides.`,
      },
    ],
    [
      {
        img: "/images/global/image 30.png",
        title: "Clamp Carrier Machine",
        description: `A clamp carrier machine, also
known as a clamp carrier press or
a woodworking clamp carrier, uses
a series of clamps to hold and
flatten wood or other materials
while they are being glued,
laminated, or otherwise worked.
The machine typically rotates to
allow the operator to load and
unload materials while others are
clamping.`,
      },
      {
        img: "/images/global/image 23.png",
        title: "Mortiser Machine Taiwan",
        description: `A mortiser machine, especially
those from Taiwan, creates
mortise holes and tenons used
in woodworking for creating
strong, durable joints. The
machine typically uses a chisel
bit and a drilling action to cut
the desired shape and depth of
the mortise. The process
involves setting the depth and
width of the mortise, securing
the workpiece, and then
lowering the chisel to make the
cuts.`,
      },
      {
        img: "/images/global/image 32.png",
        title: "Wide Belt Sander",
        description: `A wide belt sander uses a wide,
abrasive belt to sand flat
surfaces like wood panels and
doors. It feeds the material
through the belt using a
conveyor belt, allowing for
efficient and uniform sanding.
The machine features adjustable
infeed speed, sanding belt
guidance, and easy belt change
capabilities.`,
      },
    ],
    [
      {
        img: "/images/global/image 34.png",
        title: "Round End Tenoner",
        description: `A round end tenoner is a
woodworking machine used to
create rounded or angled
tenons (projections) on the
ends of wood pieces. It
typically involves adjusting
the machine's settings to
control the shape, size, and
angle of the tenon, and then
securely clamping the
workpiece in place before
running it through the cutting
heads.`,
      },
      {
        img: "/images/global/image 33.png",
        title: "Straight-Line Rip Saw",
        description: `A straight-line rip saw is
used to create a straight,
clean edge on lumber by
cutting along the stock's
length, perpendicular to the
grain. The saw's blade
moves vertically and
horizontally to make the cut,
and the machine is designed
to feed the wood through
the blade, ensuring a
straight cut.`,
      },
    ],
  ];

  return (
    <section>
      <LinearBgHeading text="WOODEN MACHINERY" />
      <div className="py-[80px] px-4">
        <div className="max-w-[1280px] mx-auto flex flex-col gap-[60px]">
          {rows.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`grid ${row.length === 3
                  ? "grid-cols-1 sm:grid-cols-2 md:grid-cols-3"
                  : "grid-cols-1 sm:grid-cols-2"
                } gap-6 sm:gap-10`}
            >
              {row.map((item, i) => {
                const idx = `${rowIndex}-${i}`;
                const isActive = activeIndex === idx;

                return (
                  <figure
                    key={idx}
                    tabIndex={0}
                    role="button"
                    aria-pressed={isActive}
                    onClick={() => handleToggle(idx)}
                    onKeyDown={(e) => e.key === "Enter" && handleToggle(idx)}
                    className="relative group flex flex-col gap-4 sm:gap-[30px] cursor-pointer outline-none"
                  >
                    {/* Image with overlay */}
                    <div className="relative aspect-[4/3] w-full">
                      <Image
                        src={item.img}
                        fill
                        alt={item.title}
                        className="object-cover  "
                      />
                      <div
                        className={`absolute inset-0 flex flex-col justify-center items-center text-center bg-black/60 px-4 transition-all duration-300
                          ${isMobileOrTablet
                            ? isActive
                              ? "opacity-100"
                              : "opacity-0"
                            : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <h4
                          className={`font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-white mb-2 transition-all duration-300
                            ${isMobileOrTablet
                              ? isActive
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                              : "group-hover:translate-y-0 group-hover:opacity-100 translate-y-4 opacity-0"
                            }`}
                        >
                          {item.title}
                        </h4>
                        <p
                          className={`text-white text-[12px] sm:text-base lg:text-lg transition-all duration-300 max-w-[90%] 
    max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-white/30
                            ${isMobileOrTablet
                              ? isActive
                                ? "translate-y-0 opacity-100"
                                : "translate-y-4 opacity-0"
                              : "group-hover:translate-y-0 group-hover:opacity-100 translate-y-4 opacity-0"
                            }`}
                            style={{ scrollbarWidth: "none" }}
                        >
                          {item.description}
                        </p>
                      </div>
                    </div>

                    {/* Title shown below (hidden when overlay active) */}
                    <figcaption
                      className={`flex justify-center transition-all duration-300
                        ${isMobileOrTablet
                          ? isActive
                            ? "opacity-0 translate-y-2"
                            : "opacity-100"
                          : "opacity-100 group-hover:opacity-0 group-hover:translate-y-2"
                        }`}
                    >
                      <p className="font-belleza text-[18px] sm:text-[26px] lg:text-[34px] text-[#191919] text-center px-2">
                        {item.title}
                      </p>
                    </figcaption>
                  </figure>
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
