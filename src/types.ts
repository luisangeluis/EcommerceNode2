import {
  type InferAttributes,
  type InferCreationAttributes,
  Model,
  type CreationOptional
} from "sequelize";

export class Product extends Model<
  InferAttributes<Product>,
  InferCreationAttributes<Product>
> {
  declare id: CreationOptional<string>;
  declare name: string;
  declare description: string;
  declare price: number;
  declare categoryId: string;
}
