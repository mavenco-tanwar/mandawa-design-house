import Image from "next/image";

const AboutHeroN = () => {
  return (
    <>
      <section className="relative overflow-hidden relative h-[90vh] w-full mt-[-108px]">
        {/* Background Image */}
        <Image
          src="/images/homePageImages/screen.jpg" // place image in public/images
          alt="Mandawa wood craftsmanship"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay (optional, helps text pop) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-serif text-[48px] sm:text-[64px] md:text-[180px] tracking-[0.25em] uppercase">
            MANDAWA
          </h1>
        </div>
      </section>
      <section className="py-[80px] px-4 bg-white" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
        <div className="text-center mx-auto mb-10">
          <h2 className="uppercase tracking-wide text-xl md:text-3xl font-serif text-[#42393B]">
            ABOUT - MANDAWA DESIGN HOUSE
          </h2>
        </div>
        <div className="mx-auto">
          <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-10 items-center">
            <div className="pl-[80px]">
              <div className="flex flex-col gap-8 text-left">
                {/* <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Our Philosophy: Legacy Over Volume
              </h2> */}
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Mandawa Design House finds its roots in Mandawa, a small heritage town in the heart of Rajasthan, India—a place often called an open art gallery, where history lives on walls, doors, and carved stone. For centuries, this region has been a quiet custodian of craftsmanship, culture, and enduring beauty.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Born from this land, Mandawa Design House carries forward the spirit of its origins. We honor the heritage, skills, and wooden craftsmanship that emerged here generations ago—shaped by patient hands, refined by time, and guided by tradition. Each piece we create is a reflection of that legacy.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Our purpose is simple yet profound: to keep art and heritage alive through furniture. In a world that moves quickly, we choose to work slowly—respecting the material, the process, and the stories held within the wood.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  People come and go, but what they create remains. Through handcrafted furniture, we aim to leave behind objects of meaning—pieces that carry character, memory, and soul, and continue their journey in homes across the world.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Mandawa Design House is not about mass production. It is about preserving a way of making, honoring where we come from, and creating furniture that endures beyond time.
                </p>

              </div>
            </div>
            <div className="flex gap-2 xl:h-full xl:w-[610px]">
              <div className="relative h-full flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
                <Image
                  src={"/images/homePageImages/about_one.jpeg"}
                  alt="working images"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1280px] mx-auto h-px bg-[#D8D5CF] mb-12 mt-18" />
        <div className="text-center mx-auto mb-10">
          <h2 className="uppercase tracking-wide text-xl md:text-3xl font-serif text-[#42393B]">
            OUR PHILOSOPHY
          </h2>
        </div>
        <div className="mx-auto mb-20">
          <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-10 items-center">
            <div className="pl-[80px]">
              <div className="flex flex-col gap-8 text-left">
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  At Mandawa Design House, we believe furniture is more than form and function. It is a vessel of memory, time, and human touch. Every piece begins with respect—for the material, for the craft, and for the journey that transforms wood into something lasting.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  We choose intention over speed, depth over volume, and authenticity over trends. Our philosophy is rooted in the belief that what is made with care carries meaning, and what carries meaning endures.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  In preserving heritage through furniture, we do not look backward—we carry tradition forward, allowing it to find a place in contemporary living spaces across the world.
                </p>
              </div>
            </div>
            <div className="flex gap-2 xl:h-full xl:w-[610px]">
              <div className="relative h-full flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
                <Image
                  src={"/images/homePageImages/about_two.jpeg"}
                  alt="working images"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto">
          <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-10 items-center">
            <div className="pl-[80px]">
              <div className="flex flex-col gap-8 text-left">
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Our craft is shaped by generations of knowledge passed down through the hands of skilled artisans. Drawing from the rich woodworking traditions of Rajasthan, each piece is made slowly and thoughtfully, using time-honored techniques refined over centuries.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  From the selection of wood to the final finish, every stage is guided by patience and precision. No two pieces are exactly alike—subtle variations are not imperfections, but signatures of the human hand.
                </p>
                <p className="uppercase tracking-wide text-xl md:text-lg font-serif text-black text-center">
                  Through handcrafted furniture, we keep alive a language of making that values skill, honesty, and character—ensuring that the craft continues, not as a memory, but as a living tradition.
                </p>
              </div>
            </div>
            <div className="flex gap-2 xl:h-full xl:w-[610px]">
              <div className="relative h-full flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
                <Image
                  src={"/images/homePageImages/about_three.jpeg"}
                  alt="working images"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHeroN;
