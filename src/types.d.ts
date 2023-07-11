import type { Optional } from "sequelize";

export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id"> {}
