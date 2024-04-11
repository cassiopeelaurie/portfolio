const models = require("../models/index");

const getAllTools = async (req, res) => {
  try {
    const tools = await models.tool.findAll();

    res.send({
      tools,
    });
  } catch (error) {
    console.error(error);
    res.status(422).send({ error: err.message });
  }
};

module.exports = {
  getAllTools,
};
