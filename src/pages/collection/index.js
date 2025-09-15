import MainLayout from "@/Layouts/MainLayout";
import React from "react";
import CollectionHero from "@/components/CollectionPage/CollectionHero";
import CollectionsGroup from "@/components/CollectionPage/CollectionsGroup";

const CollectionPage = ({ collections }) => {
  return (
    <>
      <CollectionHero
        title="Our Collection"
        description="Where Comfort Meets Craft — Discover the Art of Sitting Well."
      />
      <CollectionsGroup collections={collections} type="collection" />
    </>
  );
};

CollectionPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

// ✅ Fetch collections at build time
export async function getStaticProps() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories`
    );
    const data = await res.json();

    // handle both API response types
    const collections = Array.isArray(data) ? data : data.data || [];

    return {
      props: { collections },
      revalidate: 60,
    };
  } catch (err) {
    console.error("Error fetching collections:", err);
    return { props: { collections: [] } };
  }
}


export default CollectionPage;
