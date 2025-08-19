import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const softwareList = [
  { src: "/images/global/image52.png", name: "Rhinoceros" },
  { src: "/images/global/image53.png", name: "AutoCAD" },
  { src: "/images/global/image54.png", name: "Sketchup" },
  { src: "/images/global/image55.png", name: "5d render" },
  { src: "/images/global/image56.png", name: "Photoshop" },
  { src: "/images/global/image57.png", name: "Adobe Illustrator" },
    { src: "/images/global/image52.png", name: "Rhinoceros" },
  { src: "/images/global/image53.png", name: "AutoCAD" },
  { src: "/images/global/image54.png", name: "Sketchup" },
  { src: "/images/global/image55.png", name: "5d render" },
  { src: "/images/global/image56.png", name: "Photoshop" },
  { src: "/images/global/image57.png", name: "Adobe Illustrator" },
];

export default function DesigningSoftware() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; 

  return (
    <section
      className="bg-no-repeat bg-center bg-cover pb-[80px] md:py-[80px] px-4 overflow-hidden"
      style={{ backgroundImage: "url('/images/global/Group.png')" }}
    >
      <div className="max-w-[1280px] m-auto flex flex-col gap-20 overflow-hidden">
        {/* Title */}
        <div className="flex justify-center">
          <h2 className="md:text-text-6xl sm:text-5xl text-4xl font-belleza text-[#191919] text-center">
            Designing Software
          </h2>
        </div>

        {/* Slider */}
      <Swiper
  modules={[Autoplay]}
  autoplay={{
    delay: 2000,
    disableOnInteraction: false,
  }}
  loop={true}
  speed={500}
    slidesPerView={3} // Always 3 visible
  slidesPerGroup={3} // Move 3 at a time
  spaceBetween={20}
  breakpoints={{
    0: { slidesPerView: 3 },       // Mobile
    640: { slidesPerView: 3 },     // Tablet
    1024: { slidesPerView: 6 },    // Desktop
  }}
  className="w-full"
>
          {softwareList.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center gap-4">
                <Image
                 src={item.src}
  width={100}
  height={100}
  alt={item.name}
  className="w-[70px] sm:w-[80px] md:w-[100px]"
                />
                <p className="font-belleza text-[22px] md:text-[28px] text-[#191919] text-center">
                  {item.name}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
