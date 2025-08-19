import Image from "next/image";

const VisionMission = () => {
  return (
<section className="py-[80px] px-4 bg-[#F6F4EE]">
  <div className="max-w-[1280px] mx-auto">
    <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-10 xl:gap-20 items-center">
      
      {/* Text Section */}
      <div className="flex flex-col gap-3.5 text-left">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-belleza text-[#191919]">
          Mission & Vision
        </h2>
        <p className="font-poppins text-base md:text-lg text-[#666666]">
          As a quality product provider, We aim at achieving sustainable and
          viable growth rate through excellence in all its activities,
          generating optimum profits through total satisfaction of customers,
          suppliers, employees and society.
        </p>
        <p className="font-poppins text-base md:text-lg text-[#666666]">
          To become a cost effective, high quality destination for all our
          customers globally with consistent professionalism and efficiency.
        </p>
        <ul className="flex flex-col gap-3.5 list-disc pl-6 max-w-[492px]">
          <li className="font-poppins text-base md:text-lg text-[#666666]">
            Experienced production team
          </li>
          <li className="font-poppins text-base md:text-lg text-[#666666]">
            Consistent Standards of Quality
          </li>
          <li className="font-poppins text-base md:text-lg text-[#666666]">
            Huge Experience in wood technology & wooden furniture
          </li>
        </ul>
      </div>

      {/* Image Section - Full height & width */}
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

export default VisionMission;
