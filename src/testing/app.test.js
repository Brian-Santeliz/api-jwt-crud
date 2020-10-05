const app = require("../../build/app");
const request = require("supertest");
it("testing", (done) => {
  request(app)
    .get("/api/welcome")
    .set("Accept", "application/json")
    .expect("Content-Type", "/json/")
    .expect(200, done());
});

//INVESTIGAR ERROR DE COMO USAR CON ES6 & REGENETATOR RUN TIME
