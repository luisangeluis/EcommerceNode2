import Product from "../models/product.model";
// import type { ProductAttributes } from "../types";
// import type { Product } from "../types";

export const readAllProducts = async (): Promise<Product[]> =>
  await Product.findAll();

export const readProductById = async (id: number): Promise<Product | null> =>
  await Product.findOne({ where: { id } });
