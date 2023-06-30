import { Router } from "express";

const router = Router();

router.route("/route").get((_req, res) => {
  res.send("hola");
});

export default router;
