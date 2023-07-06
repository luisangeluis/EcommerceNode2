import { Router } from "express";
import * as productServices from "../services/Products.http";

const router = Router();

router.route("/").get(productServices.getAll);

export default router;
