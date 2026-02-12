import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

import Image from "next/image";
import ArrowBtn from "./ArrowBtn";

const images = [
  "/images/sliderImage/10.webp",
  "/images/sliderImage/7.webp",
  "/images/sliderImage/9.webp",
  "/images/sliderImage/8.webp",
  "/images/sliderImage/11.jpeg",
  "/images/sliderImage/12.jpeg",
  "/images/sliderImage/13.jpeg",
  "/images/sliderImage/14.jpeg",
  "/images/sliderImage/1.webp",
  "/images/sliderImage/2.webp",
  "/images/sliderImage/3.webp",
  "/images/sliderImage/4.webp",
  "/images/sliderImage/5.webp",
  "/images/sliderImage/6.webp",
  "/images/sliderImage/15.jpeg",

];

const ProductionDrawing = () => {
  const swiperRef = useRef(null);

  return (
    <section className="py-[0px] px-4 overflow-hidden">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] overflow-hidden">
        <div className="flex justify-center">
          {/* <h2 className="text-3xl md:text-5xl lg:text-6xl font-belleza  text-[#2f2a28] uppercase text-center">
            Production Drawing
          </h2> */}
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
                     bg-white overflow-hidden"
            >
              <Image
                src={img}
                alt={`Slide ${index}`}
                width={300}
                height={400}
                className="object-cover w-full h-[400px]"
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
