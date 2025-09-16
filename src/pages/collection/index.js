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

export async function getStaticProps() {
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
      revalidate: 60,
    };
  } catch (err) {
    return { props: { collections: [] } };
  }
}

export default CollectionPage;
