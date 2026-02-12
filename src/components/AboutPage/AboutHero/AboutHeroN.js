import Image from "next/image";

const AboutHeroN = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden h-[70vh] sm:h-[80vh] lg:h-[88.8vh] w-full">
        <Image
          src="/images/homePageImages/AboutN.jpeg"
          alt="Mandawa wood craftsmanship"
          fill
          priority
          className="object-cover object-top"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex justify-center px-4">
          <h1 className="text-white   uppercase text-center relative top-[16%]
            text-[26px] sm:text-[64px] md:text-[120px] lg:text-[85px]
            tracking-[0.18em] sm:tracking-[0.25em]">
            About Us
          </h1>
        </div>
      </section>

      {/* CONTENT */}
      <section
        className="py-6 md:py-12 px-4 bg-white"
      >
        <div className="text-center mx-auto mb-5 md:mb-10">
          <h2 className="uppercase tracking-wide text-lg sm:text-xl md:text-3xl   text-[#42393B]">
            ABOUT - MANDAWA DESIGN HOUSE
          </h2>
        </div>

        {/* ABOUT */}
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="px-0 sm:px-6 lg:pl-[0px]">
              <div className="flex flex-col gap-8 text-left">
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Mandawa Design House finds its roots in Mandawa, a small heritage town in the heart of Rajasthan, India—a place often called an open art gallery, where history lives on walls, doors, and carved stone. For centuries, this region has been a quiet custodian of craftsmanship, culture, and enduring beauty.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Born from this land, Mandawa Design House carries forward the spirit of its origins. We honor the heritage, skills, and wooden craftsmanship that emerged here generations ago—shaped by patient hands, refined by time, and guided by tradition. Each piece we create is a reflection of that legacy.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Our purpose is simple yet profound: to keep art and heritage alive through furniture. In a world that moves quickly, we choose to work slowly—respecting the material, the process, and the stories held within the wood.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  People come and go, but what they create remains. Through handcrafted furniture, we aim to leave behind objects of meaning—pieces that carry character, memory, and soul, and continue their journey in homes across the world.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Mandawa Design House is not about mass production. It is about preserving a way of making, honoring where we come from, and creating furniture that endures beyond time.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full shadow ">
              <Image
                src="/images/homePageImages/about_one.jpeg"
                alt="working images"
                fill
                className="object-cover "
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto h-px bg-[#D8D5CF] my-8 mt-11 md:my-16" />

        {/* PHILOSOPHY */}
        <div className="text-center mx-auto mb-5 md:mb-10">
          <h2 className="uppercase tracking-wide text-lg sm:text-xl md:text-3xl   text-[#42393B]">
            OUR PHILOSOPHY
          </h2>
        </div>

        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full shadow ">
              <Image
                src="/images/homePageImages/about_two.jpeg"
                alt="working images"
                fill
                className="object-cover "
              />
            </div>
            <div className="px-0 sm:px-6 lg:pl-[0px]">
              <div className="flex flex-col gap-8 text-left">
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  At Mandawa Design House, we believe furniture is more than form and function. It is a vessel of memory, time, and human touch. Every piece begins with respect—for the material, for the craft, and for the journey that transforms wood into something lasting.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  We choose intention over speed, depth over volume, and authenticity over trends. Our philosophy is rooted in the belief that what is made with care carries meaning, and what carries meaning endures.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  In preserving heritage through furniture, we do not look backward—we carry tradition forward, allowing it to find a place in contemporary living spaces across the world.
                </p>
                                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Our craft is shaped by generations of knowledge passed down through the hands of skilled artisans. Drawing from the rich woodworking traditions of Rajasthan, each piece is made slowly and thoughtfully, using time-honored techniques refined over centuries.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  From the selection of wood to the final finish, every stage is guided by patience and precision. No two pieces are exactly alike—subtle variations are not imperfections, but signatures of the human hand.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Through handcrafted furniture, we keep alive a language of making that values skill, honesty, and character—ensuring that the craft continues, not as a memory, but as a living tradition.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CRAFT */}
        {/* <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="px-0 sm:px-6 lg:pl-[0px]">
              <div className="flex flex-col gap-8 text-left">
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Our craft is shaped by generations of knowledge passed down through the hands of skilled artisans. Drawing from the rich woodworking traditions of Rajasthan, each piece is made slowly and thoughtfully, using time-honored techniques refined over centuries.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  From the selection of wood to the final finish, every stage is guided by patience and precision. No two pieces are exactly alike—subtle variations are not imperfections, but signatures of the human hand.
                </p>
                <p className="uppercase tracking-wide text-[12px] sm:text-base text-center md:text-left md:text-[12px]  ">
                  Through handcrafted furniture, we keep alive a language of making that values skill, honesty, and character—ensuring that the craft continues, not as a memory, but as a living tradition.
                </p>
              </div>
            </div>

            <div className="relative w-full h-[280px] sm:h-[380px] lg:h-full shadow ">
              <Image
                src="/images/homePageImages/about_three.jpeg"
                alt="working images"
                fill
                className="object-cover "
              />
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default AboutHeroN;
