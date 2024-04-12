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
  getProjectSkills(project_id) {
    return this.database.query(
      `
      SELECT p.*, GROUP_CONCAT(skills) AS skills
      FROM project p
      LEFT JOIN project_skill ps ON p.id = ps.project_id
      LEFT JOIN skill s ON ps.skill_id = s.id
      WHERE p.id = ?
      GROUP BY p.id

  `,
      [project_id]
    );
  }
}

module.exports = ProjectManager;
