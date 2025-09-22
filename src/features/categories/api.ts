import { Cat } from "./types";

export async function getCategories() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/categories`,
    { next: { revalidate: 300 } }
  );

  if (!res.ok) throw new Error("Failed to load categories");

  return (await res.json()) as Cat[];
}
