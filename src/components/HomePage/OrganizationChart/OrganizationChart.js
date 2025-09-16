import Image from "next/image";
import React from "react";

const OrganizationChart = () => {
  return (
   <section
  className="py-[60px] px-4 bg-cover bg-center bg-repeat-y"
  style={{ backgroundImage: "url('/images/global/Group.png')" }}
>
  <div className="max-w-[1280px] mx-auto flex flex-col gap-[40px]">
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-belleza text-[#191919]">
        Organization Chart
      </h2>
    </div>

    <div className="relative w-full min-h-[500px] md:min-h-[800px] lg:min-h-[1000px]">
      <Image
        src="/images/global/organizationChart.png"
        alt="Organization Chart"
        fill
        className="object-contain"
        priority
      />
    </div>
  </div>
</section>

  );
};

export default OrganizationChart;
