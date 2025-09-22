export type Product = {
  id: number;
  title: string;
  price: number;
  category: string;
  thumbnail: string;
  description?: string;
  images?: string[];
  brand?: string;
  rating?: number;
  stock?: number;
  discountPercentage?: number;
};

export type ProductsResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};
