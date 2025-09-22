import ProductCard from "@/components/shared/ProductCard/ProductCard";
import type { ProductsResponse, Product } from "@/features/products/types";

export default async function HotDealsPage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?limit=100`,
    {
      next: { revalidate: 120 },
    }
  );
  if (!res.ok) throw new Error("Failed to load deals");

  const data = (await res.json()) as ProductsResponse;

  const sorted = [...data.products].sort(
    (a: Product, b: Product) =>
      (b.discountPercentage ?? 0) - (a.discountPercentage ?? 0)
  );
  const top = sorted.slice(0, 12);

  return (
    <>
      <h2 className="sectionTitle">Hot Deals</h2>
      <div className="grid">
        {top.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
