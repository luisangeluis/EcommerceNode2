import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  PrimaryKey
} from "sequelize-typescript";

@Table
export class Product extends Model {
  @Column
  @AllowNull(false)
  @PrimaryKey
  id!: string;

  @Column
  @AllowNull(false)
  name!: string;

  @Column(DataType.TEXT)
  @AllowNull(false)
  description!: string;

  @Column
  @AllowNull(false)
  price!: number;
}
