const express = require("express");
const router = express.Router();
const { Value } = require("../models/Value");
router.use((req, res, next) => {
  next();
});

router.get("/value/:alphabet", async (req, res) => {
  const query = req.params.alphabet.toString();
  const entry = await Value.findOne({ letter: query });
  const { letter, value } = entry;
  res.json({ letter, value });
});

module.exports = router;
