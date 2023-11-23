const express = require("express");
const router = express.Router();
const Product = require("../model/Products.model");

router.get("/all", async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/search", async (req, res) => {
  try {
    const searchValue = req.body.searchValue;

    if (!searchValue) {
      return res.status(400).json({ error: "Search value is required" });
    }

    const products = await Product.find({
      $or: [
        { slug: { $regex: new RegExp(searchValue, "i") } },
        { "title.en": { $regex: new RegExp(searchValue, "i") } },
        { description: { $regex: new RegExp(searchValue, "i") } },
      ],
    });

    if (products.length === 0) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/discounted", async (req, res) => {
  try {
    const discountedProducts = await Product.find({
      "prices.discount": { $gt: 0 },
    });

    res.json(discountedProducts);
  } catch (error) {
    console.error("Error fetching discounted products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/popular", async (req, res) => {
  try {
    const allProducts = await Product.find();
    const popularProducts = allProducts.slice(18, 31);

    res.json(popularProducts);
  } catch (error) {
    console.error("Error fetching popular products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
