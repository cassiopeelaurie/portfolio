const models = require("../models/index");

const getAllSkills = async (req, res) => {
  try {
    const skills = await models.hard_skill.findAll();

    res.json({
      skills,
    });
  } catch (error) {
    console.error(error);
    res.status(422).send({ error: err.message });
  }
};

module.exports = {
  getAllSkills,
};
