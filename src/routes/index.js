const { Router } = require("express");
const Controller = require("../config/database");
const route = Router();
const controller = new Controller();

route.get("/", controller.finalizarMontaje);

route.post("/", controller.agregarAuto);

module.exports = route;
