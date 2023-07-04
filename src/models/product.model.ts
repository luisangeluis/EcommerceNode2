import { DataTypes } from "sequelize";
// import { Table, Column, Model, DataType } from "sequelize-typescript";
import connection from "../db/db";

const Product = connection.define("product", {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.NUMBER,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false
  }
});

export default Product;
