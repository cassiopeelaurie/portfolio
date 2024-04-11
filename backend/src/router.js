const express = require("express");

const router = express.Router();

const projectController = require("./controllers/projectController");
const formationController = require("./controllers/formationController");
const toolController = require("./controllers/toolController");
const hardSkillController = require("./controllers/hardSkillController");

//PROJECTS

router.get("/project/:name", projectController.getProjectByName);
router.get("/projects", projectController.getProject);

//FORMATIONS

router.get("/formations", formationController.getFormation);

//TOOLS

router.get("/tools", toolController.getAllTools);

//HARD-SKILLS

router.get("/hard-skills", hardSkillController.getAllSkills);

module.exports = router;
