import config from "./config/index";
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.set("json spaces", 2);
app.listen(config.port, () => {
  console.log(`Backend running at port ${config.port}`);
});

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/tournaments/:year", (req, res) => {
  const tournaments = require("./test/data/tournaments.json");
  const result = tournaments[req.params.year]
    ? tournaments[req.params.year]
    : [];
  res.json(result);
});

app.get("/referees", (req, res) => {
  const referees = require("./test/data/referee.json");
  res.json(referees);
});

app.get("/referees/:id", (req, res) => {
  const referees = require("./test/data/referee.json");
  let result = referees.find(
    ref => ref.id === req.params.id
  );
  
  res.json(result);
});

