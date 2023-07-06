import Product from "../models/product.model";
// import type { Product } from "../types";

export const readAllProducts = async (): Promise<Product[]> => {
  const response = await Product.findAll();

  return response;
};
