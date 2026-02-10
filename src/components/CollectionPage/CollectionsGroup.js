import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const CollectionsGroup = ({ collections = [], type = "collection", title }) => {
  const isMobile = useMediaQuery("(max-width: 1024px)");
  const [activeIndex, setActiveIndex] = React.useState(null);

  const handleInteraction = (index) => {
    if (isMobile) {
      setActiveIndex(activeIndex === index ? null : index);
    }
  };

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
    <section className="bg-[#fff] w-full px-4 sm:px-6 lg:px-8">
          <div className="w-full h-px bg-[#D8D5CF] mb-5 md:mb-10" />
      <h2 className="uppercase tracking-wide text-[18px] md:text-[22px]  text-[#000] mx-auto text-center mb-5 md:mb-10">
         {title}
        </h2>
      <div className="py-3 md:py-6 md:p-[0px]">
        <div className="max-w-[1280px] m-auto flex flex-col gap-[40px] sm:gap-[50px] md:gap-[60px]">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
            {collections.map((item, index) => {
              const imageSrc = item.image_url ?? "/images/placeholder.png";
              const title = item.title ?? "Untitled";

              return (
                <Link
                  key={item.id ?? index}
                  href={type === "collection" ? `/collection/${item.id}` : `/collection/product/${item.id}`}
                  aria-label={title}
                >
                  <div
                    className="relative flex flex-col gap-[15px] sm:gap-[20px] cursor-pointer group"
                    onClick={() => handleInteraction(index)}
                  >
                    <div className="relative w-full aspect-[4/5]  ">
                      <Image
                        src={imageSrc}
                        fill
                        sizes="(max-width: 768px) 100vw, 
             (max-width: 1200px) 50vw, 
             33vw"
                        alt={type === "product" ? `Product: ${title}` : `Image of ${title}`}
                        className="object-cover shadow-[0_4px_8px_#0000004d]  "
                        priority={index < 3}
                      />

                      {/* Overlay */}
                      <div
                        className={`absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 
        transition-all duration-300
        ${isMobile
                            ? activeIndex === index
                              ? "opacity-100"
                              : "opacity-0"
                            : "opacity-0 group-hover:opacity-100"
                          }`}
                      >
                        <div className="text-center text-white px-2">
                          {/* Title */}
                          <h4
                            className={`transition-all duration-300 font-belleza text-[12px]
            ${isMobile
                                ? activeIndex === index
                                  ? "translate-y-0"
                                  : "translate-y-3"
                                : "group-hover:translate-y-0 translate-y-3"
                              }`}
                          >
                            {title}
                          </h4>

                          {/* Tag (static on mobile) */}
                          {/* {type === "product" && (
                            <p className="font-poppins text-[12px] md:text-[12px] mt-2">
                              {item.tag ? item.tag : ""}
                            </p>
                          )} */}

                          {/* Size (static on mobile) */}
                          {type === "product" && (
                            <p className="font-poppins text-[12px] md:text-[12px] mt-2">
                              {item.size ? item.size : ""}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>


                    <div
                      className={`flex flex-col items-center relative transition-all duration-300
                        ${isMobile
                          ? activeIndex === index
                            ? "bottom-3 opacity-0"
                            : "bottom-0 opacity-100"
                          : "bottom-0 opacity-100 group-hover:bottom-3 group-hover:opacity-0"
                        }`}
                    >
                      {/* {type === "product" && (
                        <p className="text-gray-600 font-poppins text-[12px] md:text-[12px] mt-2">
                          {item.tag ? `${item.tag}` : ""}
                        </p>
                      )} */}
                      <p className="font-belleza text-[12px] text-[#191919] text-center">
                        {title}
                      </p>

                      {type === "product" && (
                        <p className="text-gray-600 font-poppins text-[12px] md:text-[12px] mt-2">
                          {item.size ? `${item.size}` : ""}
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
