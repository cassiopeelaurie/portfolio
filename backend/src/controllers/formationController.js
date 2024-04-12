const models = require("../models/index");

const getFormation = async (req, res) => {
  try {
    const formation = await models.formation.findAll();

    res.json({
      formation,
    });
  } catch (error) {
    console.error(error);
    res.status(422).send({ error: err.message });
  }
};

module.exports = {
  getFormation,
};
