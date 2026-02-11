import Image from "next/image";

const CollectionHeroN = () => {

  return (
      <section className="relative overflow-hidden h-[70vh] sm:h-[80vh] lg:h-[90vh] w-full lg:mt-[-108px]">
              <Image
                src="/images/homePageImages/collectionN.png"
                alt="Mandawa wood craftsmanship"
                fill
                priority
                className="object-cover"
              />
      
              <div className="absolute inset-0 bg-black/50" />
      
              <div className="absolute inset-0 flex items-center justify-center px-4">
                <h1 className="
                  text-white   uppercase text-center
                  text-[26px] sm:text-[64px] md:text-[85px] lg:text-[85px]
                  tracking-[0.15em] sm:tracking-[0.25em]
                ">
                  OUR COLLECTION
                </h1>
              </div>
            </section>
  );
};

export default CollectionHeroN;
