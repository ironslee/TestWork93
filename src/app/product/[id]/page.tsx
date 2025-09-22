import styles from "./ProductPage.module.scss";
import AddToCartButton from "@/components/shared/AddToCartButton/AddToCartButton";
import ProductImages from "@/components/shared/ProductImages/ProductImages";
import type { Product } from "@/features/products/types";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`, {
    next: { revalidate: 300 },
  });
  if (!res.ok) return <div>Item not found</div>;
  const product = (await res.json()) as Product;

  return (
    <section className={styles.wrapper}>
      <ProductImages
        title={product.title}
        thumbnail={product.thumbnail}
        images={product.images}
      />

      <div>
        <h1 className={styles.title}>{product.title}</h1>
        <div className={styles.brand}>
          {product.brand} • {product.category}
        </div>
        <div className={styles.price}>${product.price}</div>
        <AddToCartButton
          productId={product.id}
          title={product.title}
          className={styles.btn}
        />
        <h3 className={styles.descTitle}>Description</h3>
        <p>{product.description}</p>
      </div>
    </section>
  );
}
