const AbstractManager = require("./AbstractManager");

class ToolManager extends AbstractManager {
  constructor() {
    super({ table: "tool" });
  }

  getTool(tools) {
    return this.database.query(
      `
      SELECT * from ${this.table}
  
    `,
      [tools]
    );
  }
}

module.exports = ToolManager;
