import Product from "../models/product.model";
import type { ProductAttributes } from "../types";

export const readAllProducts = async (): Promise<ProductAttributes[]> => {
  const response: ProductAttributes[] = await Product.findAll();

  return response;
};
