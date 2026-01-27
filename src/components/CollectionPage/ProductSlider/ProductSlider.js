"use client";

import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";
import ArrowBtn from "./ArrowBtn";

const UniversalSlider = ({ items = [], heading = "Related Products" }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Handle click (mobile UX fix)
  const handleClick = (e, index) => {
    if (isMobile && activeIndex !== index) {
      e.preventDefault();     // prevent navigation
      setActiveIndex(index);  // show overlay
    }
  };

  if (!items.length) return null;

  return (
    <section className="pb-[40px] pt-0 md:py-[80px] px-4 overflow-hidden">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-[60px] overflow-hidden">

        {/* Heading */}
        <div className="flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-belleza text-[#3FA291] text-center">
            {heading}
          </h2>
        </div>

        {/* Slider */}
        <Swiper
          loop
          spaceBetween={40}
          centeredSlides={false}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 20 },
            640: { slidesPerView: 1.2, spaceBetween: 40 },
            1024: { slidesPerView: "auto", spaceBetween: 40 },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide
              key={item.id ?? index}
              className="lg:!w-[290px] h-[330px] bg-white overflow-hidden"
            >
              <Link href={item.href}>
                <div
                  onClick={(e) => handleClick(e, index)}
                  className="relative flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer group"
                >
                  {/* Image */}
                  <div className="relative w-[290px] h-[330px]">
                    <Image
                      src={item.image || "/images/placeholder.png"}
                      fill
                      alt={item.title}
                      className="object-cover"
                      priority={index < 2}
                    />

                    {/* Overlay */}
                    <div
                      className={`absolute inset-0 flex flex-col items-center justify-center bg-black/50 transition-all duration-300
                        ${
                          isMobile
                            ? activeIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                            : "opacity-0 group-hover:opacity-100"
                        }`}
                    >
                      <div className="text-center px-3">
                        {item.tag && (
                          <span className="block text-white text-[14px] tracking-wide font-poppins">
                            {item.tag}
                          </span>
                        )}
                        <h4 className="mt-2 text-white font-belleza text-[20px]">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Text */}
                  <div
                    className={`transition-all duration-300
                      ${
                        isMobile
                          ? activeIndex === index
                            ? "opacity-0"
                            : "opacity-100"
                          : "group-hover:opacity-0"
                      }`}
                  >
                    {item.tag && (
                      <span className="font-poppins text-[14px] tracking-wide">
                        {item.tag}
                      </span>
                    )}
                    <p className="font-belleza text-[20px] text-[#191919]">
                      {item.title}
                    </p>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrows */}
        <div className="flex justify-center items-center gap-2">
          <ArrowBtn
            text={"<"}
            variant="Brown"
            onClick={() => swiperRef.current?.slidePrev()}
          />
          <ArrowBtn
            text={">"}
            variant="Brown"
            onClick={() => swiperRef.current?.slideNext()}
          />
        </div>
      </div>
    </section>
  );
};

export default UniversalSlider;
