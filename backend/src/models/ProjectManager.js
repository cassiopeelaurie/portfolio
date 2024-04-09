const AbstractManager = require("./AbstractManager");

class ProjectManager extends AbstractManager {
  constructor() {
    super({ table: "project" });
  }

  getProject(projectName) {
    return this.database.query(
      `
      SELECT * from ${this.table} WHERE name = ?
  
    `,
      [projectName]
    );
  }
}

module.exports = ProjectManager;
