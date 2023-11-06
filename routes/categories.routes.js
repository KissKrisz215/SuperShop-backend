const router = require("express").Router();
const Category = require("../model/Categories.model");

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
    const allCategories = await Category.find({}).populate("children").exec();
    const category = allCategories.find(
      (cat) => cat._id.toString() === categoryId
    );

    if (category) {
      res.send(category);
    } else {
      res.status(404).send("Category not found");
    }
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
