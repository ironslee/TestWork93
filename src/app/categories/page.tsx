import Link from "next/link";
import styles from "./CategoriesPage.module.scss";
import { getCategories } from "@/features/categories/api";
import { Cat } from "@/features/categories/types";

export default async function CategoriesPage() {
  const cats = await getCategories();
  const slugOf = (cat: Cat) => (typeof cat === "string" ? cat : cat.slug);
  const labelOf = (cat: Cat) =>
    typeof cat === "string" ? cat : (cat.name ?? cat.slug);

  return (
    <>
      <h2 className="sectionTitle">Categories</h2>
      <ul className={styles.list}>
        {cats.map((cat, i) => {
          const slug = slugOf(cat);
          return (
            <li key={`${slug}-${i}`}>
              <Link
                href={`/category/${encodeURIComponent(slug)}`}
                className={styles.item}
              >
                {labelOf(cat)}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
