const AbstractManager = require("./AbstractManager");

class HardSkillManager extends AbstractManager {
  constructor() {
    super({ table: "hard_skill" });
  }

  getSkills(skills) {
    return this.database.query(
      `
      SELECT * from ${this.table}
  
    `,
      [skills]
    );
  }
}

module.exports = HardSkillManager;
