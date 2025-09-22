import Link from "next/link";
import styles from "./ProductCard.module.scss";
import type { Product } from "@/features/products/types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Image from "next/image";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/product/${product.id}`} className={styles.link} prefetch>
      <article
        className={styles.card}
        role="article"
        aria-label={product.title}
      >
        <Image
          src={product.thumbnail}
          alt={product.title}
          width={400}
          height={300}
          className={styles.img}
          loading="lazy"
        />
        <div className={styles.body}>
          <h3 className={styles.title}>{product.title}</h3>
          <div className={styles.meta}>{product.category.toUpperCase()}</div>
          <div className={styles.price}>{product.price}</div>
          <AddToCartButton
            productId={product.id}
            title={product.title}
            className={styles.btn}
          />
        </div>
      </article>
    </Link>
  );
}
