// Get variables from .env file for database connection
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Create a connection pool to the database
const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

// Try to get a connection to the database
pool
  .getConnection()
  .then((connection) => {
    console.info(`Using database ${DB_NAME}`);

    connection.release();
  })
  .catch((error) => {
    console.warn(
      "Warning:",
      "Failed to establish a database connection.",
      "Please check your database credentials in the .env file if you need a database access."
    );
    console.error("Error message:", error.message);
  });

const models = {};
const ProjectManager = require("./ProjectManager");

models.user = new UserManager();
models.offer = new OfferManager();
models.experience = new ExperienceManager();
models.course = new CourseManager();
models.cv = new CvManager();
models.upload = new UploadManager();
models.userCompetence = new UserCompetenceManager();
models.offerCompetence = new OfferCompetenceManager();
models.competence = new CompetenceManager();

models.user.setDatabase(pool);
models.offer.setDatabase(pool);
models.experience.setDatabase(pool);
models.course.setDatabase(pool);
models.cv.setDatabase(pool);
models.userCompetence.setDatabase(pool);
models.offerCompetence.setDatabase(pool);
models.competence.setDatabase(pool);
models.upload.setDatabase(pool);
// bonus: use a proxy to personalize error message,
// when asking for a non existing model
const handler = {
  get(obj, prop) {
    if (prop in obj) {
      return obj[prop];
    }
    const pascalize = (string) =>
      string.slice(0, 1).toUpperCase() + string.slice(1);
    throw new ReferenceError(
      `models.${prop} is not defined. Did you create ${pascalize(
        prop
      )}Manager.js, and did you register it in backend/src/models/index.js?`
    );
  },
};
module.exports = new Proxy(models, handler);
