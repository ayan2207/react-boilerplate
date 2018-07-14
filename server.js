const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const chalk = require("chalk");
var pjson = require("./package.json");
const PORT = 5050;

app.use(express.static("./build"));

app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./build", "index.html"));
});

app.listen(PORT);
console.info(chalk.white.bgBlue("==> 🌎 Serving build files...\nListening on port " + PORT));
