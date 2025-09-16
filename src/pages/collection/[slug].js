import MainLayout from "@/Layouts/MainLayout";
import CollectionHero from "@/components/CollectionPage/CollectionHero";
import CollectionsGroup from "@/components/CollectionPage/CollectionsGroup";

const CollectionInnerPage = ({ products, category }) => {
  return (
    <>
      <CollectionHero category={category} />

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
    const categoryId = params.slug;

    const prodRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/products?per_page=10`
    );
    if (!prodRes.ok) throw new Error(`Failed to fetch products: ${prodRes.status}`);
    const prodData = await prodRes.json();

    const category = prodData?.category ?? null;

    const products = Array.isArray(prodData?.data)
      ? prodData.data.map((p) => ({
          id: p.id,
          title: p.title ?? p.name ?? "Untitled",
          image_url: p.images?.[0] ?? "/images/placeholder.png",
          price: p.price ?? null,
          size: p.size ?? null,
          tag: p.tag ?? null,
        }))
      : [];

    return { props: { category, products } };
  } catch (error) {
    console.error("❌ Error fetching collection products:", error);
    return { props: { category: null, products: [] } };
  }
}

export default CollectionInnerPage;
