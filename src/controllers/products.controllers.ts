import Product from "../models/product.model";
// import type { ProductCreationAttributes } from "../types";
import { v4 as uuidv4 } from "uuid";
import type { ProductAttributes, ProductCreationAttributes } from "../types";
// import type { Product } from "../types";

export const readAllProducts = async (): Promise<ProductAttributes[]> =>
  await Product.findAll();

export const readProductById = async (
  id: number
): Promise<ProductAttributes | null> =>
  await Product.findOne({ where: { id } });

export const create = async (
  product: ProductCreationAttributes
): Promise<ProductAttributes | null> => {
  return await Product.create({ ...product, id: uuidv4() });
};
