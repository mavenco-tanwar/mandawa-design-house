import ConceptOfDrawing from "@/components/HomePage/ConceptOfDrawing/ConceptOfDrawing";
import DesigningSoftware from "@/components/HomePage/DesigningSoftware/DesigningSoftware";
import FurnitureDesigning from "@/components/HomePage/FurnitureDesigning/FurnitureDesigning";
import Hero from "@/components/HomePage/Hero/Hero";
import MandawaHomeImage from "@/components/HomePage/MandawaHomeImage/MandawaHomeImage";
import ManufacturingSection from "@/components/HomePage/ManufacturingSection/ManufacturingSection";
import OrganizationChart from "@/components/HomePage/OrganizationChart/OrganizationChart";
import OurClients from "@/components/HomePage/OurClients/OurClients";
import FurnitureCollection from "@/components/HomePage/OurFurnitureCollection/FurnitureCollection";
import OurSetUp from "@/components/HomePage/OurSetUp/OurSetUp";
import OurUnits from "@/components/HomePage/OurUnits/OurUnits";
import ProductionDrawing from "@/components/HomePage/ProductionDrawing/ProductionDrawing";
import VisionMission from "@/components/HomePage/VisionMission/VisionMission";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import WoodenMachinery from "@/components/HomePage/WoodenMachinery/WoodenMachinery";

import MainLayout from "@/Layouts/MainLayout";


 function Home() {
  return (
   <>
   <Hero/>
   <MandawaHomeImage/>
    <VisionMission/>
   <FurnitureCollection/>
   <OrganizationChart/>
   <OurUnits/>
    <ManufacturingSection/>
    <WoodenMachinery/>
   <OurSetUp/>
   <FurnitureDesigning/>
   <ConceptOfDrawing/>
   <ProductionDrawing/>
   <DesigningSoftware/>
   <OurClients/>
   <WhyChooseUs/>   
   </>
  );
}


Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};


export default Home