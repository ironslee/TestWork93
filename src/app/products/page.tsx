"use client";
import styles from "./ProductsPage.module.scss";
import { useEffect, useState } from "react";
import { api } from "@/shared/api/axios";
import ProductCard from "@/components/shared/ProductCard/ProductCard";
import type { Product } from "@/features/products/types";

const LIMIT = 12;

export default function ProductsPage() {
  const [items, setItems] = useState<Product[]>([]);
  const [skip, setSkip] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [moreLoading, setMoreLoading] = useState(false);
  const [err, setErr] = useState<string | null>(null);

  const load = async (append = false) => {
    const currentSkip = append ? skip + LIMIT : 0;

    try {
      if (append) {
        setMoreLoading(true);
      } else {
        setLoading(true);
      }
      setErr(null);

      const res = await api.get<{
        products: Product[];
        total: number;
        skip: number;
        limit: number;
      }>(`/products?limit=${LIMIT}&skip=${currentSkip}`);

      setTotal(res.data.total);
      setSkip(currentSkip);
      setItems((prev) =>
        append ? [...prev, ...res.data.products] : res.data.products
      );
    } catch {
      setErr("Failed to load products");
    } finally {
      if (append) {
        setMoreLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    load(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) return <div className={styles.wrapper}>Loading…</div>;
  if (err) return <div className={styles.error}>{err}</div>;

  const canLoadMore = items.length < total;

  return (
    <>
      <h2 className="sectionTitle">All Products</h2>
      <div className={styles.grid}>
        {items.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      {canLoadMore && (
        <div className={styles.center}>
          <button
            onClick={() => load(true)}
            disabled={moreLoading}
            className={styles.btn}
          >
            {moreLoading ? "Loading…" : "Load more"}
          </button>
        </div>
      )}
    </>
  );
}
