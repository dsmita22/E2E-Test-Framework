const request = require("supertest");
const api = request("http://localhost:3001");

describe("Expense request validation", () => {
  it("/GET expense success", () => {
    api
      .get("/api/expenses")
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
