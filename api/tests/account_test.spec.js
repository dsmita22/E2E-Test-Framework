const request = require("supertest");
const api = request("http://localhost:3002");

describe("Login request validation", () => {
  it("/POST Validate login success", () => {
    api
      .post("/api/users/login")
      .send({
        email: "testauto@gmail.com",
        password: "Password1",
      })
      .expect(200)
      .end(function (err, res) {
        if (err) throw err;
      });
  });
});
