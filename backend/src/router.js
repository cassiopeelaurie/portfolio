const express = require("express");

const router = express.Router();

const projectController = require("./controllers/projectController");

router.get("/project/:name", projectController.getProjectByName);
router.get("/projects", projectController.getProject);

router.use((req, res) => {
  res.status(404).send({ error: "Route not found" });
});

module.exports = router;
