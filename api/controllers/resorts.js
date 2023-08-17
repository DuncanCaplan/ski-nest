const Resort = require("../models/Resort");

const index = async (req, res) => {
  try {
    const resorts = await Resort.showAll();
    res.status(200).send(resorts);
  } catch (error) {
    res.status(500).send({ error: "Server error" });
  }
};
