const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/login", async (req, res) => {
  console.log("yes");
  return res.json({ h: "hi" });
});

module.exports = router;
