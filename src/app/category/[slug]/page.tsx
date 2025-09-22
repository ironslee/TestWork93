import ProductCard from "@/components/shared/ProductCard/ProductCard";
import type { ProductsResponse } from "@/features/products/types";

export default async function CategoryPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/category/${slug}`,
    { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    return <div>Category not found</div>;
  }
  const data = (await res.json()) as ProductsResponse;

  return (
    <>
      <h2 className="sectionTitle">{slug}</h2>
      <div className="grid">
        {data.products.slice(0, 12).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
