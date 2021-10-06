const express = require("express");
const router = express.Router();
const Product = require("../models/product");

router.get("/products", async (req, res) => {
  try {
    const products = await Product.find({});
    return res.json(products);
  } catch (err) {
    console.log("error in finding the prouducts", err);
  }
});

router.post("/products", async (req, res) => {
  const product = await Product.create(req.body);

  return res.json(product);
});

module.exports = router;
