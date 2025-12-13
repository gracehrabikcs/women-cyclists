const express = require("express");
const router = express.Router();
const Cyclist = require("../models/Cyclist");

router.get("/", async (req, res) => {
  try {
    const cyclists = await Cyclist.find();
    res.json(cyclists);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
