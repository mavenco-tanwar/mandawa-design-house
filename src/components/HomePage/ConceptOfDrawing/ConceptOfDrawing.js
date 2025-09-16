import Image from "next/image";
import React from "react";

const ConceptOfDrawing = () => {
  return (
    <section className="py-[80px] px-4">
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[60px]">
    <div className="flex justify-center">
      <h2 className="text-4xl sm:text-5xl md:text-6xl font-belleza text-[#191919] text-center">
        Concept of Drawing
      </h2>
    </div>
    <div className="relative w-full h-[200px] sm:h-[250px] md:h-[330px]">
      <Image
        src={"/images/global/image 42.png"}
        fill
        alt="Concept of Drawing"
        className="object-contain"
      />
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
      <div className="flex items-center justify-center">
        <Image
          src={"/images/global/image 43.png"}
          width={300}
          height={440}
          alt="chair"
          className="w-full max-w-[400px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/global/image 44.png"}
          width={300}
          height={440}
          alt="table"
          className="w-full max-w-[400px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/global/image 45.png"}
          width={300}
          height={440}
          alt="side drawer"
          className="w-full max-w-[400px] h-auto"
        />
      </div>
    </div>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <div className="flex items-center justify-center">
        <Image
          src={"/images/global/image 46.png"}
          width={620}
          height={440}
          alt="dining table"
          className="w-full max-w-[620px] h-auto"
        />
      </div>
      <div className="flex items-center justify-center">
        <Image
          src={"/images/global/image 47.png"}
          width={620}
          height={440}
          alt="bed"
          className="w-full max-w-[620px] h-auto"
        />
      </div>
    </div>
  </div>
</section>

  );
};

export default ConceptOfDrawing;
