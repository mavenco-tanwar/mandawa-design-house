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
    console.log("🚀 Fetching collections...");
    console.log("👉 API URL:", process.env.NEXT_PUBLIC_API_URL);

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

    console.log("👉 Response status:", res.status);

    if (!res.ok) {
      throw new Error(`Failed to fetch categories: ${res.status}`);
    }

    const data = await res.json();

    console.log("👉 Raw API data:", JSON.stringify(data, null, 2));

    // Normalize API response
    const collections = (
      Array.isArray(data) ? data : data.data || data.categories || []
    ).map((item) => ({
      id: item.id,
      title: item.name ?? item.title ?? "Untitled",
      image_url: item.image_url ?? "/images/placeholder.png",
    }));

    console.log("👉 Normalized collections:", collections);

    return {
      props: { collections },
      revalidate: 60,
    };
  } catch (err) {
    console.error("❌ Error fetching collections:", err);
    return { props: { collections: [] } };
  }
}

export default CollectionPage;
