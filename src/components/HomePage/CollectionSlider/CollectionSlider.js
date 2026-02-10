import React, { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import Image from "next/image";
import Link from "next/link";
import ArrowBtn from "@/components/CollectionPage/ProductSlider/ArrowBtn";

const CollectionSlider = ({ collections = [], title = "Our Collections" }) => {
  const swiperRef = useRef(null);
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

  if (!collections.length) return null;

  return (
    <section className="pb-[40px] pt-0 md:py-[80px] px-4 overflow-hidden">
      <div className="max-w-[1280px] m-auto flex flex-col gap-[60px] overflow-hidden">
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-belleza  text-[#2f2a28] uppercase text-center">
            {title}
          </h2>
        </div>

        <Swiper
          centeredSlides={false}
          loop={true}
          spaceBetween={40}
          modules={[EffectCoverflow]}
          className="w-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 1.3, spaceBetween: 20 },
            640: { slidesPerView: 1.2, spaceBetween: 40 },
            1024: { slidesPerView: "auto", spaceBetween: 40 },
          }}
        >
          {collections.map((collection, index) => {
            const imageSrc = collection.image_url ?? "/images/placeholder.png";
            const collectionTitle = collection.title ?? "Untitled";

            return (
              <SwiperSlide
                key={collection.id ?? index}
                className="lg:!w-[290px] h-[330px] bg-white overflow-hidden"
              >
                <Link href={`/collection/${collection.id}`} passHref>
                  <div
                    className="relative flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer group"
                    onClick={() => handleInteraction(index)}
                  >
                    {/* Image with overlay */}
                    <div className="relative w-[290px] h-[330px]">
                      <Image
                        src={imageSrc}
                        fill
                        alt={collectionTitle}
                        className="object-cover"
                      />
                      <div
                        className={`absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-black/50 
                          transition-all duration-300
                          ${
                            isMobile
                              ? activeIndex === index
                                ? "opacity-100"
                                : "opacity-0"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <div className="flex flex-col gap-2 items-center">
                          <h4
                            className={`transition-all duration-300 font-belleza text-[24px] md:text-[28px] text-white text-center px-2
                              ${
                                isMobile
                                  ? activeIndex === index
                                    ? "translate-y-0"
                                    : "translate-y-3"
                                  : "group-hover:translate-y-0 translate-y-3"
                              }`}
                          >
                            {collectionTitle}
                          </h4>
                          {collection.description && (
                            <p className="font-poppins text-white/80 text-[12px] md:text-[14px] text-center px-4 mt-2">
                              {collection.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>

                    <div
                      className={`flex flex-col items-center relative transition-all duration-300
                        ${
                          isMobile
                            ? activeIndex === index
                              ? "bottom-3 opacity-0"
                              : "bottom-0 opacity-100"
                            : "bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0"
                        }`}
                    >
                      <p className="font-belleza text-[20px] md:text-[24px] text-[#191919] text-center">
                        {collectionTitle}
                      </p>
                      {collection.product_count !== undefined && (
                        <span className="font-poppins text-[12px] md:text-[14px] text-gray-600 mt-1">
                          {collection.product_count} {collection.product_count === 1 ? 'item' : 'items'}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          })}
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

export default CollectionSlider;