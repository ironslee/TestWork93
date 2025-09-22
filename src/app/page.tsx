import ProductCard from "@/components/shared/ProductCard/ProductCard";
import type { ProductsResponse } from "@/features/products/types";

async function getProducts() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=12`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) throw new Error("Failed to load products");

  return (await res.json()) as ProductsResponse;
}

export default async function HomePage() {
  const data = await getProducts();
  return (
    <>
      <h2 className="sectionTitle">Latest Products</h2>
      <div className="grid">
        {data.products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
