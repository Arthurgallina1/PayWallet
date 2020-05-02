const express = require("express");
const routes = express.Router();
const GastosController = require("../Controllers/GastosController");

routes.get("/gastos", GastosController.index);
routes.post("/gastos", GastosController.store);
routes.delete("/gastos", GastosController.delete);

module.exports = routes;
