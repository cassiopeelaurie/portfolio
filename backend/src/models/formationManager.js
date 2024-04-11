const AbstractManager = require("./AbstractManager");

class FormationManager extends AbstractManager {
  constructor() {
    super({ table: "formation" });
  }

  getFormation(formation) {
    return this.database.query(
      `
      SELECT * from ${this.table} WHERE name = ?
  
    `,
      [formation]
    );
  }
}

module.exports = FormationManager;
