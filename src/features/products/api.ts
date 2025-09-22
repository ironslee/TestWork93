import { api } from "@/shared/api/axios";
import type { ProductsResponse } from "./types";

export async function fetchProducts(limit = 12) {
  const { data } = await api.get<ProductsResponse>(`/products?limit=${limit}`);
  return data.products;
}
