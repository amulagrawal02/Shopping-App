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

router.get("/products/:id", async (req, res) => {
  const product = await Product.findById(req.params.id);
  return res.json(product);
});

// to edit the products data
router.patch("/products/:id", async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body);
  return res.json(product);
});

// to delete the product

router.delete("/products/:id", async (req, res) => {
  console.log(req.params.id);
  await Product.findByIdAndDelete(req.params.id);

  return res.json("deleted");
});

module.exports = router;
