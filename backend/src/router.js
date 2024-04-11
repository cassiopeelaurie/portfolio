const express = require("express");

const router = express.Router();

const projectController = require("./controllers/projectController");
const formationController = require("./controllers/formationController");

//PROJECTS

router.get("/project/:name", projectController.getProjectByName);
router.get("/projects", projectController.getProject);

//FORMATIONS

router.get("/formations", formationController.getFormation);

//TOOLS

module.exports = router;
