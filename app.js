const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.status(200).send("Hi baby");
});

module.exports = app;
