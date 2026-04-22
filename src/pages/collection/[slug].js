import React, { useState, useEffect, useCallback } from "react";
import MainLayout from "@/Layouts/MainLayout";
import CollectionHero from "@/components/CollectionPage/CollectionHero";
import CollectionsGroup from "@/components/CollectionPage/CollectionsGroup";
import InfiniteScrollTrigger from "@/components/Global/InfiniteScrollTrigger";

const CollectionInnerPage = ({ initialProducts, category, categoryId }) => {
  const [products, setProducts] = useState(initialProducts);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [hasMore, setHasMore] = useState(initialProducts.length === 12);

  const loadMoreProducts = useCallback(async () => {
    if (isLoading || !hasMore) return;

    setIsLoading(true);
    try {
      const nextPage = page + 1;
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/products?per_page=12&page=${nextPage}`
      );

      if (!res.ok) throw new Error("Failed to fetch more products");
      
      const prodData = await res.json();
      const newProducts = Array.isArray(prodData?.data)
        ? prodData.data.map((p) => ({
            id: p.id,
            title: p.title ?? p.name ?? "Untitled",
            image_url: p.images?.[0] ?? "/images/placeholder.png",
            price: p.price ?? null,
            size: p.size ?? null,
            tag: p.tag ?? null,
          }))
        : [];

      if (newProducts.length === 0) {
        setHasMore(false);
      } else {
        setProducts((prev) => [...prev, ...newProducts]);
        setPage(nextPage);
        // If we got fewer than 12, there are likely no more
        if (newProducts.length < 12) {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error loading more products:", error);
      setHasMore(false);
    } finally {
      setIsLoading(false);
    }
  }, [categoryId, hasMore, isLoading, page]);

  return (
    <>
      <CollectionHero category={category} />

      {products.length > 0 ? (
        <>
          <CollectionsGroup collections={products} type="product" />
          <InfiniteScrollTrigger 
            onTrigger={loadMoreProducts} 
            hasMore={hasMore} 
            isLoading={isLoading} 
          />
        </>
      ) : (
        <section className="py-20 text-center">
          <p className="text-lg text-gray-600">No products found.</p>
        </section>
      )}
    </>
  );
};

CollectionInnerPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps({ params }) {
  try {
    const categoryId = params.slug;

    const prodRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/products?per_page=12&page=1`
    );
    if (!prodRes.ok) throw new Error(`Failed to fetch products: ${prodRes.status}`);
    const prodData = await prodRes.json();

    const category = prodData?.category ?? null;

    const initialProducts = Array.isArray(prodData?.data)
      ? prodData.data.map((p) => ({
          id: p.id,
          title: p.title ?? p.name ?? "Untitled",
          image_url: p.images?.[0] ?? "/images/placeholder.png",
          price: p.price ?? null,
          size: p.size ?? null,
          tag: p.tag ?? null,
        }))
      : [];

    return { props: { category, initialProducts, categoryId } };
  } catch (error) {
    return { props: { category: null, initialProducts: [], categoryId: params.slug } };
  }
}

export default CollectionInnerPage;
