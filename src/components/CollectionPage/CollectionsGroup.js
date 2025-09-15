import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CollectionsGroup = ({ collections = [], type = "collection" }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

  // ✅ Fallback when no collections
  if (!collections || collections.length === 0) {
    return (
      <section className="bg-[#F6F4EE] py-20 text-center">
        <p className="text-lg text-gray-600 font-poppins">
          {type === "collection"
            ? "No collections available at the moment."
            : "No products found in this collection."}
        </p>
      </section>
    );
  }

  return (
    <section className="bg-[#F6F4EE]">
      <div className="py-[60px] px-4 sm:px-6 md:px-8">
        <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
            {collections.map((item, index) => {
              const imageSrc = item.image_url ?? "/images/placeholder.png";
              const title = item.title ?? "Untitled";

              return (
                <Link
                  key={item.id ?? index}
                  href={type === "collection" ? `/collection/${item.id}` : `/product/${item.id}`}
                  aria-label={title}
                >
                  <div
                    className="relative flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer group"
                    onClick={() => handleInteraction(index)}
                  >
                    {/* Image */}
                    <div className="relative w-full aspect-[4/5]">
                      <Image
                        src={imageSrc}
                        fill
                        sizes="(max-width: 768px) 100vw, 
                               (max-width: 1200px) 50vw, 
                               33vw"
                        alt={type === "product" ? `Product: ${title}` : `Image of ${title}`}
                        className="object-cover"
                        priority={index < 3}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 
                          transition-all duration-300
                          ${
                            isMobile
                              ? activeIndex === index
                                ? "opacity-100"
                                : "opacity-0"
                              : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <h4
                          className={`transition-all duration-300 font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-white text-center px-2
                            ${
                              isMobile
                                ? activeIndex === index
                                  ? "translate-y-0"
                                  : "translate-y-3"
                                : "group-hover:translate-y-0 translate-y-3"
                            }`}
                        >
                          {title}
                        </h4>
                      </div>
                    </div>

                    {/* Text below image */}
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
                      <p className="font-belleza text-[18px] sm:text-[24px] md:text-[28px] lg:text-[34px] text-[#191919] text-center">
                        {title}
                      </p>

                      {type === "product" && (
                        <p className="text-gray-600 font-poppins text-lg mt-2">
                          {item.price ? `$${item.price}` : "Price on request"}
                        </p>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionsGroup;
