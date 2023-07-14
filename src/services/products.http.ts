import {
  create,
  readAllProducts,
  readProductById
} from "../controllers/products.controllers";

export const getAll = (_req, res): void => {
  readAllProducts()
    .then((response) => {
      return res.status(200).json({ items: response.length, response });
    })
    .catch((error) => {
      return res.status(500).json({ message: error.message });
    });
};

export const getById = (req, res): void => {
  const id = Number(req.params.id);

  readProductById(id)
    .then((response) => {
      response !== null
        ? res.status(200).json({ response })
        : res.status(404).send(`Product with id: ${id} doesn't exist`);
      // .json({ mesasage: `Product with id: ${id} doesn't exist` });
    })
    .catch((error) => res.status(500).json({ error: error.message }));
};

export const post = (req, res): void => {
  const data = req.body;

  if (Object.keys(data)?.length === 0)
    res.status(400).json({ message: "Missing data" });

  if (
    data.name === undefined ||
    data.name.lengt === 0 ||
    data.description === undefined ||
    data.description.length === 0 ||
    data.price === undefined ||
    isNaN(Number(data.price))
  ) {
    return res.status(400).json({
      message: "At least these  fields must be completed",
      fields: {
        name: "string",
        description: "string",
        price: "number"
      }
    });
  }

  create(data)
    .then((response) => {
      if (response !== null)
        return res.status(201).json({
          message: `Product created with id: ${response.id}`,
          response
        });
    })
    .catch((error) => res.status(500).json({ message: error.message }));
};
