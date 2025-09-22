"use client";

import { useAuth } from "@/shared/store/auth.store";
import styles from "./AddToCartButton.module.scss";

type Props = {
  productId: number;
  title: string;
  className?: string;
};

export default function AddToCartButton({
  productId,
  title,
  className,
}: Props) {
  const user = useAuth((s) => s.user);

  if (!user) return null;

  const onAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("ADD_TO_CART", { productId, title });
  };

  return (
    <button
      className={`${styles.btn} ${className ?? ""}`}
      onClick={onAdd}
      type="button"
    >
      Add to cart
    </button>
  );
}
