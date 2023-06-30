import express from "express";
import indexRoutes from "./routes/index.route";

const app = express();
const PORT = 3000;

app.use(indexRoutes);
// app.use("/route", (_req, res) => {
//   res.send("hola");
// });

app.listen(PORT, () => {
  console.log(`Listen on porttt ${PORT}`);
});
