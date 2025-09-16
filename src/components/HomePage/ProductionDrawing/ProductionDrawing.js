import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import ArrowBtn from "./ArrowBtn";

const images = [
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
  "/images/global/image 88.png",
];

const ProductionDrawing = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-[60px] px-4 bg-[#F6F4EE] overflow-hidden">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] overflow-hidden">
        <div className="flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919] text-center">
            Production Drawing
          </h2>
        </div>

        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          spaceBetween={200}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          modules={[EffectCoverflow]}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 200,
            },
            640: {
              slidesPerView: 1.2,
              spaceBetween: 200,
            },
            1024: {
              slidesPerView: "auto",
              spaceBetween: 200,
            },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className=" lg:!w-[650px]
                     h-[250px] sm:h-[350px] md:h-[450px] lg:h-[592px] 
                     bg-white rounded-xl overflow-hidden"
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                width={300}
                height={400}
                className="object-contain w-full h-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>

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

export default ProductionDrawing;
