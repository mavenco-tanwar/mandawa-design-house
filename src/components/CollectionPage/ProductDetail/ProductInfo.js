import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Global/Buttons";
import Link from "next/link";

const ProductInfo = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) return null;

  return (
    <section className="pb-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(500px,760px)_minmax(400px,460px)] gap-10 lg:gap-[60px]">
          {/* Left side - Images */}
          <div className="lg:grid lg:grid-cols-[160px_minmax(300px,1fr)] lg:gap-5">
            <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[75vh] lg:h-[580px] order-1 lg:order-2 bg-[#fff] shadow-[0_4px_8px_#0000004d] rounded-lg">
              <Image
                src={product.images?.[activeIndex] ?? "/images/placeholder.png"}
                fill
                alt={product.title}
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="order-2 lg:order-1 mt-4 lg:mt-0 flex gap-3 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:h-[580px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              {product.images?.map((img, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[160px] lg:h-[160px] flex-shrink-0 cursor-pointer rounded-lg`}
                >
                  <Image
                    src={img}
                    fill
                    alt={`${product.title} ${idx + 1}`}
                    className="object-cover shadow-[0_4px_8px_#0000004d] rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Product Info */}
          <div className="flex flex-col gap-6 px-2 lg:px-0">
            <div className="flex flex-col gap-2 pb-5">
              <p className="text-[#42393B] font-poppins text-sm">{product.tag}</p>
              <h1 className="font-belleza text-2xl sm:text-3xl lg:text-[34px] text-[#3FA291] uppercase">
                {product.title}
              </h1>
              {/* <h3 className="font-belleza text-xl sm:text-2xl text-[#191919]">
                ${product.price ?? "XX/XX"}
              </h3> */}
            </div>

            <div className="flex flex-col gap-2 py-5 border-t border-b border-gray-200">
              <p className="text-sm font-poppins text-[#42393B]">{product.size}</p>
              <p className="text-sm font-poppins text-[#42393B]">
                {product.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-poppins text-[#42393B]">
                For enquiry, please contact us
              </p>
              <div className="w-full sm:w-[300px] lg:w-full">
                <Link href="/contact-us">
                  <Button
                    styles={{ width: "100%" }}
                    text="Contact Us"
                    variant="Brown"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
