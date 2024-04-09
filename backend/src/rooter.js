const express = require("express");

const router = express.Router();

// const projectController = require("./controllers/projectController");
const AbstractManager = require("./models/AbstractManager");

router.get("/project/:id([0-9]+)", AbstractManager.findId);

module.exports = router;
