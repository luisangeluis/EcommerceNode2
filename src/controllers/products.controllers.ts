import Product from "../models/product.model";
import type { ProductCreationAttributes } from "../types";
import { v4 as uuidv4 } from "uuid";
// import type { ProductAttributes } from "../types";
// import type { Product } from "../types";

export const readAllProducts = async (): Promise<Product[]> =>
  await Product.findAll();

export const readProductById = async (id: number): Promise<Product | null> =>
  await Product.findOne({ where: { id } });

export const create = async (
  product: ProductCreationAttributes
): Promise<Product | null> => {
  return await Product.create({ ...product, id: uuidv4() });
};
