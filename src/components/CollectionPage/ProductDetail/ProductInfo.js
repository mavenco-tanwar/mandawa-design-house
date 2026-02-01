import Image from "next/image";
import React, { useState } from "react";
import Button from "@/components/Global/Buttons";
import Link from "next/link";

const ProductInfo = ({ product }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) return null;

  return (
    <section className="pb-14 md:pb-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <h1 className="font-belleza text-2xl sm:text-3xl lg:text-[34px] text-[#3FA291] uppercase mb-6 mt-3">
          {product.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(500px,600px)_minmax(400px,620px)] gap-10 lg:gap-[60px]">
          {/* Left side - Images */}
          <div className="lg:grid lg:grid-cols-[110px_minmax(300px,1fr)] lg:gap-5">
            <div className="relative w-full h-[77vh] sm:h-[50vh] md:h-[75vh] lg:h-[480px] order-1 lg:order-2 bg-[#fff] shadow-[0_4px_8px_#0000004d] rounded-lg">
              <Image
                src={product.images?.[activeIndex] ?? "/images/placeholder.png"}
                fill
                alt={product.title}
                className="object-cover rounded-lg"
                priority
              />
            </div>

            <div className="order-2 lg:order-1 mt-4 lg:mt-0 flex gap-3 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:h-[480px] [&::-webkit-scrollbar]:hidden [scrollbar-width:none]">
              {product.images?.map((img, idx) => (
                <div
                  key={idx}
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-[100px] h-[152px] sm:w-[110px] sm:h-[110px] lg:w-[110px] lg:h-[110px] flex-shrink-0 cursor-pointer rounded-lg`}
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
          <div className="flex flex-col justify-between px-2 lg:px-0 gap-10">
            <div className="flex flex-col gap-6 px-2 lg:px-0">
            {/* <div className="flex flex-col gap-2">
              <h3 className="font-belleza text-xl sm:text-2xl text-[#191919]">
                ${product.price ?? "XX/XX"}
              </h3>
            </div> */}

            <div className="flex flex-col gap-2 pb-5 border-b border-gray-200">
              <p className="text-[#42393B] font-poppins text-sm">{product.tag}</p>
              <p className="text-sm font-poppins text-[#42393B]">{product.size}</p>
              <p className="text-sm font-poppins text-[#42393B]">
                {product.description}
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm font-poppins text-[#42393B]">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                100% solid wood construction
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                Handcrafted and hand finished
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                Custom size and finish available
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                Made to order
              </li>

              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gray-900" />
                Worldwide delivery
              </li>
            </ul>
            </div>

            <div className="flex flex-col gap-3">
              <div className="w-full sm:w-[300px] lg:w-full">
                <Link href="/contact-us">
                  <Button
                    styles={{ width: "100%" }}
                    text="Enquire to buy"
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
