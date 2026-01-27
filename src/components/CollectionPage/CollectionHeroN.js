import Image from "next/image";

const CollectionHeroN = () => {

  return (
      <section className="relative overflow-hidden relative h-[90vh] w-full mt-[-108px]">
        {/* Background Image */}
        <Image
          src="/images/homePageImages/collection.jpg" // place image in public/images
          alt="Mandawa wood craftsmanship"
          fill
          priority
          className="object-cover"
        />

        {/* Dark overlay (optional, helps text pop) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Centered Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white font-serif text-[48px] sm:text-[64px] md:text-[100px] tracking-[0.25em] uppercase">
            OUR COLLECTION
          </h1>
        </div>
      </section>
  );
};

export default CollectionHeroN;
