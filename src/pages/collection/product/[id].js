import MainLayout from "@/Layouts/MainLayout";
import BreadCrumb from "@/components/Global/BreadCrumb/BreadCrumb";
import UniversalSlider from "@/components/CollectionPage/ProductSlider/ProductSlider";
import ProductInfo from "@/components/CollectionPage/ProductDetail/ProductInfo";

const ProductPage = ({ product, relatedProducts }) => {
  if (!product) {
    return (
      <div className="py-20 text-center">
        <p className="text-lg text-gray-600">Product not found.</p>
      </div>
    );
  }

  // ✅ Normalize product data for slider
  const relatedProductSlides = relatedProducts.map((item) => ({
    id: item.id,
    title: item.title,
    tag: item.tag || item.category?.name,
    image: item.images?.[0],
    href: `/collection/product/${item.id}`,
  }));

  return (
    <>
      <BreadCrumb
        category={product.category}
        productTitle={product.title}
      />

      <ProductInfo product={product} />

      {/* ✅ Reusable slider */}
      {relatedProductSlides.length > 0 && (
        <UniversalSlider
          heading="Related Products"
          items={relatedProductSlides}
        />
      )}
    </>
  );
};

ProductPage.getLayout = function getLayout(page) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps({ params }) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/products/${params.id}`
    );

    if (!res.ok) throw new Error(`Failed to fetch product: ${res.status}`);

    const data = await res.json();

    return {
      props: {
        product: data?.data?.product ?? null,
        relatedProducts: data?.data?.same_category_products ?? [],
      },
    };
  } catch (error) {
    return {
      props: {
        product: null,
        relatedProducts: [],
      },
    };
  }
}

export default ProductPage;
