import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="py-[80px] px-4 bg-white" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
      <div className="text-center mx-auto mb-10">
        <h2 className="uppercase tracking-wide text-xl md:text-2xl font-serif text-[#42393B]">
         CRAFTSMANSHIP - WHERE HERITAGE MEETS SKILL 
        </h2>
      </div>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-30 items-center">
          <div className="pb-10 md:pl-[80px]">
            {/* <div className="flex flex-col gap-3.5 text-left mb-10">
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
            </div> */}
            <div className="flex flex-col gap-12 text-left">
              {/* <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Our Philosophy: Legacy Over Volume
              </h2> */}
              <p className="uppercase tracking-wide text-xl md:text-xl font-serif text-black text-center">
                At Mandawa Design House, wood is shaped into furniture through craft, patience, and intention.
              </p>
              <p className="uppercase tracking-wide text-xl md:text-xl font-serif text-black text-center">
                 From vintage-inspired designs to custom creations, each piece is made to order—carrying detail, depth, and a story of its own.
              </p>
              <p className="uppercase tracking-wide text-xl md:text-xl font-serif text-black text-center">
                Our furniture is crafted by experienced artisans using traditional hand tools and time-honoured techniques. Every piece reflects the imperfections that make handcrafted furniture truly unique.
              </p>
            </div>
          </div>
          <div className="flex gap-2 xl:h-[550px] xl:w-[480px]">
            <div className="relative h-[550px] flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
              <Image
                src={"/images/homePageImages/CRAFTSMANSHIP.jpeg"}
                alt="working images"
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

export default AboutHero;
