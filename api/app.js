const express = require("express");
const cors = require("cors");
const resorts = require("./routes/resorts");

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.status(200).send("Hello there!");
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
});

app.use("/resorts", resorts);

module.exports = app;
