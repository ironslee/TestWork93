"use client";
import Image from "next/image";
import styles from "./ProductImages.module.scss";

import { useState } from "react";

type Props = {
  title: string;
  thumbnail: string;
  images?: string[];
};

export default function ProductImages({
  title,
  thumbnail,
  images = [],
}: Props) {
  const [active, setActive] = useState(images[0] || thumbnail);

  return (
    <div className={styles.wrapper}>
      <Image
        src={active}
        alt={title}
        width={300}
        height={400}
        className={styles.main}
      />

      {images.length > 1 && (
        <div className={styles.thumbs}>
          {images.map((src, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(src)}
              className={`${styles.thumbBtn} ${active === src ? styles.active : ""}`}
              aria-label={`Preview ${i + 1}`}
            >
              <Image
                src={src}
                alt={`${title} preview ${i + 1}`}
                width={60}
                height={80}
                className={styles.thumbImg}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
