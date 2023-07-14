// import { UUIDV4 } from "sequelize";
import app from "../src/app";
import request from "supertest";

describe("GET /products", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/api/v1/products").send();
    expect(response.statusCode).toBe(200);
  });

  // test("Should respond with an array", async () => {
  //   const response = await request(app).get("/api/v1/products").send();

  //   expect(response.body.response).toBeInstanceOf(Array);
  // });
});

// describe("POST /products", () => {
//   test("Should respond with 200 status code", async () => {
//     const newProduct = {
//       name: "a product",
//       description: "a product",
//       price: 1
//     };
//     const response = await request(app).post("/api/v1/products").send(newProduct);
//     expect(response.statusCode).toBe(201);
//   });

//   test("Should respond with an object", async () => {
//     const newProduct = {
//       name: "a product",
//       description: "a product",
//       price: 1
//     };
//     const response = await request(app).post("/api/v1/products").send(newProduct);
//     expect(response.body.response).toBeInstanceOf(Object);
//   });
// });
