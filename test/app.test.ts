import app from "../src/app";
import request from "supertest";

describe("GET /products", () => {
  test("Should respond with 200 status code", async () => {
    const response = await request(app).get("/products").send();
    expect(response.statusCode).toBe(200);
  });
});
