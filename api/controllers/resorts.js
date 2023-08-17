const Resort = require("../models/Resort");

const index = async (req, res) => {
  try {
    const resorts = await Resort.getAll();
    res.status(200).json(resorts);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Server error" });
  }
};

const show = async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const resort = await Resort.getOne(id);
    res.status(200).json(resort);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  index,
  show,
};
