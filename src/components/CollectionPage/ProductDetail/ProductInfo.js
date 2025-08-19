import Image from "next/image";
import React from "react";
import Button from "@/components/Global/Buttons";

const ProductInfo = () => {
  return (
    <section className="pb-20 px-4">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(500px,760px)_minmax(400px,460px)] gap-10 lg:gap-[60px]">

          <div className="lg:grid lg:grid-cols-[120px_minmax(300px,580px)] lg:gap-5">

            <div className="relative w-full h-[30vh] sm:h-[50vh] md:h-[75vh] lg:h-[580px] order-1 lg:order-2 bg-[#fff]">
              <Image
                src={"/images/global/productchair.png"}
                fill
                alt="product big image"
                className="object-contain"
                priority
              />
            </div>


            <div className="order-2 lg:order-1 mt-4 lg:mt-0 flex gap-3 overflow-x-auto lg:flex-col lg:overflow-y-auto lg:h-[580px]">
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] flex-shrink-0">
                <Image
                  src={"/images/global/productchair.png"}
                  fill
                  alt="product image"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] flex-shrink-0">
                <Image
                  src={"/images/global/productchair.png"}
                  fill
                  alt="product image"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] flex-shrink-0">
                <Image
                  src={"/images/global/productchair.png"}
                  fill
                  alt="product image"
                  className="object-cover rounded-md"
                />
              </div>
              <div className="relative w-[100px] h-[100px] sm:w-[110px] sm:h-[110px] lg:w-[120px] lg:h-[120px] flex-shrink-0">
                <Image
                  src={"/images/global/productchair.png"}
                  fill
                  alt="product image"
                  className="object-cover rounded-md"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 px-2 lg:px-0">
            <div className="flex flex-col gap-2 pb-5">
              <p className="text-[#666666] font-poppins text-sm">#FIEV-10271</p>
              <h1 className="font-belleza text-2xl sm:text-3xl lg:text-[34px] text-[#191919]">
                BREWSEAT CHAIR
              </h1>
              <h3 className="font-belleza text-xl sm:text-2xl text-[#191919]">
                $ XX/XX
              </h3>
            </div>

            <div className="flex flex-col gap-2 pb-5">
              <p className="text-sm font-poppins text-[#666666]">
                Size- 54(W)x57(D)x84(H)
              </p>
              <p className="text-sm font-poppins text-[#666666]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                fermentum tempus commodo. Morbi placerat nisl vel lacus aliquet,
                eget pretium ante euismod. Pellentesque sed leo tellus. Nam
                tristique ut ante at tristique. Mauris venenatis, risus eu
                cursus viverra, dui odio porttitor nibh, a pulvinar quam nisl
                sed lacus.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-poppins text-[#666666]">
                For enquiry, please contact us
              </p>
              <div className="w-full sm:w-[300px] lg:w-full">
                <Button
                  styles={{ width: "100%" }}
                  text="Contact Us"
                  variant="Brown"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;