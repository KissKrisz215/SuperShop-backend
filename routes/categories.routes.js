const router = require("express").Router();
const Category = require("../model/Categories.model");
const Product = require("../model/Products.model");

router.get("/all", async (req, res) => {
  try {
    const allCategories = await Category.find({}).populate("children").exec();
    res.send(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

router.get("/:id", async (req, res) => {
  const categoryId = req.params.id;

  try {
    const category = await Category.findOne({
      $or: [{ _id: categoryId }, { "children._id": categoryId }],
    })
      .populate("children")
      .exec();

    if (!category) {
      return res.status(404).json({ error: "Category not found" });
    }

    const productsInCategory = await Product.find({ categories: categoryId });

    res.send(productsInCategory);
  } catch (error) {
    console.error("Error fetching category and associated products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
