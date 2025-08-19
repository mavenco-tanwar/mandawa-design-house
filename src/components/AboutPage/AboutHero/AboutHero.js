import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="py-[80px] px-4 bg-white">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-[40px] items-center">
          <div className="flex flex-col gap-3.5 text-left">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919]">
              About
            </h2>
            <p className="font-poppins text-base md:text-lg text-[#666666]">
              Mandawa Design House is a premier exporter of exquisite furniture
              crafted from wood, marble, metal, & rattan. Based in India, we are
              dedicated to blend timeless craftsmanship with contemporary &
              artistic furniture designs, delivering durable & luxury furniture
              pieces to our clients across the globe.
            </p>
            <p className="font-poppins text-base md:text-lg text-[#666666]">
              At Mandawa Design House, we believe that furniture should tell a
              story — of quality, creativity, and conscious living. Specializing
              in high-quality, customized furniture, we bring visions to life
              through meticulous craftsmanship and timeless design.
            </p>
            <p className="font-poppins text-base md:text-lg text-[#666666]">
              Our collaborations span across global wholesalers, retailers, and
              interior designers, enabling us to create collections that
              seamlessly blend international trends with traditional artisanal
              techniques. Each piece reflects a unique harmony of modern
              aesthetics and handcrafted soul. Rooted in our core values of
              sustainability and ethical sourcing, we are committed to making
              responsible choices — from the materials we select to the
              communities we support. With Mandawa Design House, {`you're`} not
              just choosing furniture, {`you're`} choosing a more thoughtful way
              to live and design.
            </p>
          </div>

          <div className="flex gap-2 xl:h-[600PX]">
            <div className="relative h-[600px] flex-1">
              <Image
                src={"/images/global/About-Us.png"}
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
