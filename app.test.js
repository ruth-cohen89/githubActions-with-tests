const request = require("supertest");
const app = require("./app");

describe("GET /api", () => {
  it("should return status 200 and the correct response", async () => {
    const response = await request(app).get("/api");
    expect(response.status).toBe(200);
    expect(response.text).toBe("Hi baby");
  });
});
