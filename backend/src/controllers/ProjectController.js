const models = require("../tables");

const getProjectByName = async (req, res) => {
  try {
    const projectName = req.params.name;

    // Utiliser le gestionnaire de données pour récupérer les informations du projet
    const projectInfo = await models.project.getProject(projectName);

    const projectData = projectInfo[0];

    // Envoyer les informations du projet en réponse
    res.send({
      project: projectData,
    });
  } catch (err) {
    console.error(err);
    res.status(422).send({ error: err.message });
  }
};

module.exports = {
  getProjectByName,
};
