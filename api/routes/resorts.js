const express = require("express");
const router = express.Router();

const resorts = require("../controllers/resorts");

router.get("/", resorts.index);
router.get("/:id", resorts.show);

module.exports = router;
