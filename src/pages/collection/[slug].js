import MainLayout from "@/Layouts/MainLayout";
import CollectionHero from "@/components/CollectionPage/CollectionHero";
import CollectionsGroup from "@/components/CollectionPage/CollectionsGroup";

const CollectionInnerPage = ({ products, category }) => {
  return (
    <>
      <CollectionHero
        title={category?.title ?? "Collection"}
        description={
          category?.description ??
          "Where Comfort Meets Craft — Discover the Art of Sitting Well."
        }
      />

      {products.length > 0 ? (
        <CollectionsGroup collections={products} type="product" />
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
    const categoryId = params.category_id;

    const catRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}`
    );
    if (!catRes.ok) throw new Error(`Failed to fetch category: ${catRes.status}`);
    const catData = await catRes.json();

    const prodRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/products?per_page=10`
    );
    if (!prodRes.ok) throw new Error(`Failed to fetch products: ${prodRes.status}`);
    const prodData = await prodRes.json();

    // Normalize
    const category = catData?.data ?? catData ?? null;
    const products = (prodData?.data ?? []).map((p) => ({
      id: p.id,
      title: p.title ?? p.name ?? "Untitled",
      image: p.images?.[0] ?? "/images/placeholder.png",
      price: p.price ?? null,
    }));

    return { props: { category, products } };
  } catch (error) {
    console.error("❌ Error fetching collection products:", error);
    return { props: { category: null, products: [] } };
  }
}

export default CollectionInnerPage;
