import Image from "next/image";

const Hero = () => {

  return (
    <section className="pb-[80px] pt-[40px] md:py-[80px]  px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-[60px] text-center">
          <Image
            src="/images/global/heroFlowers.png"
            width={120}
            height={120}
            alt="flower"
            className="w-20  lg:w-20 h-auto"
          />
          <div className="flex flex-col items-center">
            <h1 className="text-5xl md:text-4xl lg:text-5xl font-belleza mb-3.5">
              History of Mandawa Design House
            </h1>
            <p className=" xl:text-lg md:text-base lg:text-lg font-poppins max-w-[700px]">
              From Highland House to Mandawa Design House, a journey shaped by hands, heritage and heart.
            </p>
          </div>
          <Image
            src="/images/global/heroFlowers.png"
            width={80}
            height={80}
            alt="flower"
            className="w-20 hidden md:inline lg:w-20 h-auto"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-[28px]">
          <div className="w-full md:w-[200px] lg:w-[288px] flex-shrink-0">
            <Image
              src={"/images/global/image 4.png"}
              alt="mandawa design house"
              width={288}
              height={500}
              className="w-full h-auto"
            />
          </div>

          <div className="max-w-[625px] flex flex-col gap-5 text-center">
            <div className="flex flex-col gap-3.5">
              <h2 className="text-[#6E2F1B] font-belleza text-base md:text-[12px] lg:text-xl">
                The Story of Highland House.
              </h2>
              <h2 className="text-[#6E2F1B] font-belleza text-base md:text-[12px] lg:text-xl">
                The birthplace of dreams, designs, and destinies.
              </h2>
            </div>

            {[
              "In the golden heart of Rajasthan, where desert winds whisper through painted havelis and ancient forts, lies the town of Mandawa — a place steeped in tradition and craft. It was here that a visionary named Joel Waldman founded Highland House, a humble factory that would quietly shape the future of India’s handicraft industry.",
              "Highland House was more than just a manufacturing unit, it was a cradle of creativity, craftsmanship, and community. It became a beacon for talented artisans from across the region — a place where skills were not only taught but revered, where hands shaped dreams into reality.",
              "Within its buzzing workshops, the scent of wood shavings, the clinking of chisels against marble, and the weaving of rattan filled the air with a sense of purpose. Where craftsmanship was a way of life, and every piece created carried the spirit of Mandawa’s rich heritage.",
            ].map((text, i) => (
              <p key={i} className="font-poppins text-[12px] md:text-base lg:text-[18px] text-[#666666]">
                {text}
              </p>
            ))}
          </div>

          <div className="w-full md:w-[200px] lg:w-[288px] flex-shrink-0">
            <Image
              src={"/images/global/elephant.png"}
              alt="person on an elephant"
              width={288}
              height={500}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col gap-5 text-center">
          {[
            "Generations of artisans, designers and makers found their footing in Highland House. It was a place where mentorship thrived, where hard work was honored, and where the seeds of future brands and businesses were sown.",
            "Though Highland House eventually closed, its spirit did not fade, it spread. The talented individuals who honed their craft within its walls carried their skills across the country and beyond — now leading major brands, managing prestigious factories, and founding successful businesses of their own. Today, many pillars of the Indian handicraft and furniture industry trace their roots back to the lessons learned at Highland House.",
            "Mandawa Design House is proud to be one of them, a living tribute to the legacy of Highland House and the artisans it empowered.",
            "Even though the factory doors have long since shut, the values, vision, and craftsmanship of Highland House live on — in every lovingly crafted piece of furniture, in every artisan’s journey, and in every story built by hand and heart.",
          ].map((text, i) => (
            <p key={i} className="font-poppins text-[12px] md:text-base lg:text-[18px] text-[#666666]">
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>



  );

};

export default Hero;
