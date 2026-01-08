import Image from "next/image";

const VisionFuture = () => {
  return (
    <section className="py-[80px] px-4 bg-[#FFFFFF]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
          <div>
            <div className="flex flex-col gap-3.5 text-left mb-10">
              <h2 className="text-4xl md:text-6xl font-belleza text-[#3FA291]">
                Vision for the Future
              </h2>
              <p className="font-poppins text-base md:text-lg text-[#42393B]">
                Mandawa Design House exists to ensure that India’s art, history, and craftsmanship do not fade with time.
              </p>
              <div>
                <p className="font-poppins text-base md:text-lg text-[#42393B]">
                  <b>Our vision is to build a global design house that: -</b>
                </p>
                <ul>
                  <li className="font-poppins text-base md:text-lg text-[#42393B]">Preserves cultural heritage through furniture </li>
                  <li className="font-poppins text-base md:text-lg text-[#42393B]">Elevates the lives of artisans and their families</li>
                  <li className="font-poppins text-base md:text-lg text-[#42393B]">Creates timeless pieces with lasting meaning</li>
                </ul>
              </div>
              <p className="font-poppins text-base md:text-lg text-[#42393B]">
                We are not building for seasons. We are building for generations.
              </p>
            </div>
          </div>
          <div className="flex gap-2 xl:h-[600PX]">
            <div className="relative h-[480px] lg:top-[75px] flex-1">
              <Image
                src={"/images/global/image6.png"}
                alt="working images"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 h-[480px] relative">
              <Image
                src={"/images/global/machineImage.png"}
                alt="machine image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default VisionFuture;
