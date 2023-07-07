import Product from "../models/product.model";
import type { ProductAttributes } from "../types";
// import type { Product } from "../types";

export const readAllProducts = async (): Promise<ProductAttributes[]> => {
  const response = await Product.findAll();

  return response;
};
