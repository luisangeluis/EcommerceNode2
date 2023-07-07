export interface ProductAttributes {
  id: string;
  name: string;
  description: string;
  price: number;
  categoryId: string;
}

export type ProductCreationAttributes = Optional<ProductAttributes, "id">;
