// app.test.js
const request = require("supertest");
const app = require("./app"); // Import the Express app

describe("GET /", () => {
  it("should return status 200 and the correct response", async () => {
    // Make the GET request to the root route
    const response = await request(app).get("/");

    // Assert the response status code
    expect(response.status).toBe(200);

    // Assert the response text
    expect(response.text).toBe("Hi baby");
  });
});
