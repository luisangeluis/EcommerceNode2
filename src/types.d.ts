import type { Optional } from "sequelize";

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id"> {}
