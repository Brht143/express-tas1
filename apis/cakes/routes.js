const express = require("express");
const router = express.Router();

const cakes = require("../cakeData");

router.get("/", (req, res) => {
  res.json(cakes);
});

router.get("/:cakeId", (req, res) => {
  const { cakeId } = req.params;
  const cake = cakes.find((_cake) => _cake.id === +cakeId);
  res.json(cake);
});

module.exports = router;
