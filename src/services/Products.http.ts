import { readAllProducts } from "../controllers/products.controllers";

export const getAll = (_req, res): void => {
  readAllProducts()
    .then((response) => res.status(200).json({ response }))
    .catch((error) => res.status(400).json({ message: error.message }));
};
