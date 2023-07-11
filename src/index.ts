import express from "express";
import productsRoutes from "./routes/products.route";
import db from "./db/db";

const app = express();
const PORT = 3000;

app.use(express.json());

db.authenticate()
  .then((_res) => {
    console.log("database autenticate");
  })
  .catch((error) => {
    console.log(error);
  });

db.sync()
  .then((_res) => {
    console.log("Db synced");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/v1/products", productsRoutes);
// app.use("/route", (_req, res) => {
//   res.send("hola");
// });

app.listen(PORT, () => {
  console.log(`Listen on porttt ${PORT}`);
});
