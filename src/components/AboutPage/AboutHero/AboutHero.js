import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="py-[80px] px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-[40px] items-center">
          <div>
            <div className="flex flex-col gap-3.5 text-left mb-10">
              <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Who We Are
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Mandawa Design House was born from a simple belief: <b>furniture can be a carrier of culture</b>.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Rooted in India’s artistic traditions, we create furniture that reflects history, regional identity, and storytelling. Our work bridges the past and the present—where traditional craftsmanship meets contemporary design needs.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                We do not chase trends. We build pieces that are meant to be lived with, remembered, and passed on.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 text-left">
              <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Our Philosophy: Legacy Over Volume
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                In a world driven by speed and machines, Mandawa Design House chooses <b>time, hands, and intention</b>.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Our goal is not large-scale manufacturing, but <b>meaningful creation</b>. Each project is approached as a long-term contribution to India’s artistic heritage and to the people who keep these traditions alive.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                We believe true luxury lies in authenticity, patience, and cultural depth.
              </p>
            </div>
          </div>
          <div className="flex gap-2 xl:h-[470px]">
            <div className="relative h-[470px] flex-1">
              <Image
                src={"/images/global/image 28.png"}
                alt="working images"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
