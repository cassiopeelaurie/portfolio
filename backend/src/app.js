const express = require("express");

const app = express();
const path = require("path");

const cors = require("cors");

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

app.use(express.json());

const router = require("./router");

app.use("/api", router);

const reactBuildPath = path.join(__dirname, "/../../frontend/dist");

app.use(express.static(reactBuildPath));

app.get(
  "*.*",
  express.static(path.join(__dirname, "../public"), { maxAge: "1y" })
);

app.get("*", (_, res) => {
  res.sendFile(path.join(reactBuildPath, "/index.html"));
});

module.exports = app;
