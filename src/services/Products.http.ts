import {
  readAllProducts,
  readProductById
} from "../controllers/products.controllers";

export const getAll = (_req, res): void => {
  readAllProducts()
    .then((response) => {
      return res.status(200).json({ response });
    })
    .catch((error) => {
      return res.status(400).json({ message: error.message });
    });
};

export const getById = (req, res): void => {
  const id = Number(req.params.id);

  readProductById(id)
    .then((response) => {
      response !== null
        ? res.status(200).json({ response })
        : res
            .status(404)
            .json({ mesasage: `Product with id: ${id} doesn't exist` });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};
