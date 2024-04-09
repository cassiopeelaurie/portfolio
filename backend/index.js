const express = require("express");
require("dotenv").config();

const app = express();

const port = process.env.APP_PORT;

const server = app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
module.exports = server;
