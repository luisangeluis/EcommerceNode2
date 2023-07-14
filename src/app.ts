import express from "express";
import productsRoutes from "./routes/products.route";
import db from "./db/db";

const app = express();

app.use(express.json());

db.authenticate()
  .then((_res) => {
    // console.log("database autenticate");
  })
  .catch((error) => {
    console.log(error);
  });

// if (process.env.NODE_ENV === "production") {
//   db.sync()
//     .then(() => {
//       console.log("database synced");
//     })
//     .catch((error) => console.log(error));
// } else {
  db.sync()
    .then(() => {
      // console.log("database synced");

    })
    .catch((error) => console.log(error));
// }

app.use("/api/v1/products", productsRoutes);
// app.use("/route", (_req, res) => {
//   res.send("hola");
// });

export default app;
