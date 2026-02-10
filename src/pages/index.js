import ConceptOfDrawing from "@/components/HomePage/ConceptOfDrawing/ConceptOfDrawing";
import DesigningSoftware from "@/components/HomePage/DesigningSoftware/DesigningSoftware";
import FurnitureDesigning from "@/components/HomePage/FurnitureDesigning/FurnitureDesigning";
import Hero from "@/components/HomePage/Hero/Hero";
import MandawaHomeImage from "@/components/HomePage/MandawaHomeImage/MandawaHomeImage";
import ManufacturingSection from "@/components/HomePage/ManufacturingSection/ManufacturingSection";
// import OrganizationChart from "@/components/HomePage/OrganizationChart/OrganizationChart";
import OurClients from "@/components/HomePage/OurClients/OurClients";
import FurnitureCollection from "@/components/HomePage/OurFurnitureCollection/FurnitureCollection";
import OurSetUp from "@/components/HomePage/OurSetUp/OurSetUp";
import OurUnits from "@/components/HomePage/OurUnits/OurUnits";
import ProductionDrawing from "@/components/HomePage/ProductionDrawing/ProductionDrawing";
import VisionMission from "@/components/HomePage/VisionMission/VisionMission";
import WhyChooseUs from "@/components/HomePage/WhyChooseUs/WhyChooseUs";
import WoodenMachinery from "@/components/HomePage/WoodenMachinery/WoodenMachinery";
import AboutHero from '@/components/AboutPage/AboutHero/AboutHero';

import MainLayout from "@/Layouts/MainLayout";
import VisionFuture from "@/components/HomePage/VisionFuture/VisionFuture";
import HandcraftedSplitSection from "@/components/HomePage/HandcraftedSplitSection/HandcraftedSplitSection";
import BuyingProcess from "@/components/HomePage/BuyingProcess/BuyingProcess";
import CollectionsGroup from "@/components/CollectionPage/CollectionsGroup";
import Footer from "@/components/Global/FooterN/FooterN";


 function Home({collections}) {
  return (
   <>
   <MandawaHomeImage/>
   <HandcraftedSplitSection />
{/* <AboutHero /> */}
<hr className="border-t border-gray-300" />
<BuyingProcess />
   {/* <Hero/> */}
    {/* <VisionMission/> */}
   {/* <OrganizationChart/> */}
   {/* <OurUnits/> */}
    {/* <ManufacturingSection/> */}
    {/* <WoodenMachinery/> */}
   {/* <OurSetUp/> */}
   {/* <FurnitureDesigning/> */}
   {/* <ConceptOfDrawing/> */}
   {/* <ProductionDrawing/> */}
   {/* <DesigningSoftware/> */}
   {/* <OurClients/> */}
   {/* <VisionFuture /> */}
   {/* <WhyChooseUs/>    */}
   {/* <FurnitureCollection/> */}
    <CollectionsGroup key={`home-collection-${collections.length}`} collections={collections} type="collection" title="DISCOVER OUR COLLECTION" />
   </>
  );
}


Home.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();

    const collections = (
      Array.isArray(data) ? data : data.data || data.categories || []
    ).map((item) => ({
      id: item.id,
      title: item.name ?? item.title ?? "Untitled",
      image_url: item.image_url ?? "/images/placeholder.png",
    }));

    return {
      props: { collections },
    };
  } catch (err) {
    return {
      props: { collections: [] },
    };
  }
}


export default Home