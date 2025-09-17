import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const clientLogos = [
  "/images/global/imageClient1.png",
  "/images/global/imageClient2.png",
  "/images/global/imageClient5.png",
  "/images/global/imageClient4.png",
  "/images/global/imageClient6.png",
  "/images/global/imageClient3.png",
  "/images/global/imageClient1.png",
  "/images/global/imageClient2.png",
  "/images/global/imageClient5.png",
  "/images/global/imageClient4.png",
  "/images/global/imageClient6.png",
  "/images/global/imageClient3.png",
];

export default function OurClients() {
  const [mounted, setMounted] = useState(false);
  const swiperRef = useRef(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-[80px] px-4">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px]">
        <div className="flex justify-center">
          <h2 className="text-5xl md:text-6xl font-belleza text-[#191919] text-center">
            Our Clients
          </h2>
        </div>

        {/* Wrapper for hover control */}
        <div
          onMouseEnter={() => swiperRef.current?.autoplay.start()}
          onMouseLeave={() => swiperRef.current?.autoplay.stop()}
        >
          <Swiper
            modules={[Autoplay]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              swiper.autoplay.stop(); // 🔹 stop autoplay initially
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={500}
            slidesPerView={3}
            slidesPerGroup={3}
            spaceBetween={20}
            breakpoints={{
              0: { slidesPerView: 3 },
              640: { slidesPerView: 3 },
              1024: { slidesPerView: 6 },
            }}
            className="w-full"
          >
            {clientLogos.map((src, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <Image
                    src={src}
                    width={160}
                    height={160}
                    alt={`client company logo ${index + 1}`}
                    className="w-[80px] sm:w-[90px] md:w-[100px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
