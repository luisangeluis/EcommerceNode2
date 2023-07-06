import { DataTypes } from "sequelize";
import { Product } from "../types";
import connection from "../db/db";

// const sequelize = connection;

Product.init(
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(128),
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
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize: connection
  }
);

export default Product;
