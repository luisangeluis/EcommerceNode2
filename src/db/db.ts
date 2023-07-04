import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import type { Dialect } from "sequelize";

dotenv.config();

const dialect = process.env.DB_DIALECT as Dialect;
const host = process.env.DB_HOST as string;
const username = process.env.DB_USER as string;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME as string;
// const port = process.env.DB_PORT;

const connection = new Sequelize(database, username, password, {
  dialect,
  host
});

export default connection;
