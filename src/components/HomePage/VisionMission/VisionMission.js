import Image from "next/image";

const VisionMission = () => {
  return (
    <section className="py-[80px] px-4 bg-[#F6F4EE]">
      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-rows-[1fr_480px] xl:grid-rows-1 lg:grid-cols-2 gap-35 xl:gap-20 items-center">
          <div className="flex gap-2 xl:h-[600PX]">
            <div className="relative h-[480px] lg:top-[75px] flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
              <Image
                src={"/images/global/image 40.png"}
                alt="working images"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="flex-1 h-[480px] relative shadow-[0_4px_8px_#0000004d] rounded-lg">
              <Image
                src={"/images/global/image 37.png"}
                alt="machine image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="relative h-[480px] lg:top-[75px] flex-1 shadow-[0_4px_8px_#0000004d] rounded-lg">
            <div className="flex-1 h-[480px] relative">
              <Image
                src={"/images/global/image 35.png"}
                alt="machine image"
                fill
                className="object-cover rounded-lg"
              />
            </div>
            </div>
          </div>
          <div>
            <div className="flex flex-col gap-3.5 text-left mb-10">
              <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Handcrafted by Artists, Not Assembly Lines
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Every piece at Mandawa Design House is handcrafted by trained artisans using traditional woodworking, carving, and painting techniques.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Machines are used only as support tools. The soul of the furniture comes from: - Hand carving and detailing - Hand painting inspired by regional art styles - Natural finishes and traditional methods
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                This ensures that no two pieces are ever exactly the same.
              </p>
            </div>
            <div className="flex flex-col gap-3.5 text-left">
              <h2 className="text-4xl md:text-4xl font-belleza text-[#3FA291]">
                Preserving India’s Disappearing Art Forms
              </h2>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                For centuries, many Indian communities lived through art—woodworking, painting, carving, and visual storytelling.
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Mandawa Design House actively studies, revives, and reinterprets: - Regional Indian art and painting styles - Traditional motifs and cultural narratives - Community-specific craftsmanship techniques
              </p>
              <p className="font-poppins text-base md:text-md text-[#42393B]">
                Through furniture, we help keep these stories alive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>


  );
};

export default VisionMission;
