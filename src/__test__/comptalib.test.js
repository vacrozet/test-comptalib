require("dotenv").config();

const chai = require("chai");
const chaiHttp = require("chai-http");
const mocha = require("mocha");
const db = require("../models");

const describe = mocha.describe;
const { expect } = chai;
chai.use(chaiHttp);

const fileName = "file_test.jpg";

describe("Test for upload endpoint", () => {
  describe("Test route Users", () => {
    it("should return 201 and create user", async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .post("/users")
        .send({ firstName: "Valentin", lastName: "Crozet" });

      expect(res.status).to.equal(201);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("firstName").eql("Valentin");
      expect(res.body).to.have.property("lastName").eql("Crozet");
      expect(res.body).to.have.property("id");
    });
    it("should return 200 and get all users", async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .get("/users")
        .send({ firstName: "Valentin", lastName: "Crozet" });

      expect(res.status).to.equal(200);
      expect(res.body).to.be.a("array");
    });
  });

  describe("Test route societies", () => {
    it("should return 201 and create society", async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .post("/societies")
        .send({ name: "Comptalib" });

      expect(res.status).to.equal(201);
      expect(res.body).to.be.a("object");
      expect(res.body).to.have.property("name").eql("Comptalib");
      expect(res.body).to.have.property("id");
    });
    it("should return 200 and get all societies", async () => {
      const res = await chai
        .request(`http://localhost:${process.env.PORT}`)
        .get("/societies")
        .send({ name: "Comptalib" });

      expect(res.status).to.equal(200);
      expect(res.body).to.be.a("array");
    });
  });
});
