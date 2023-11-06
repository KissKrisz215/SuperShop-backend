const express = require("express");
const router = express.Router();
const Coupon = require("../model/Coupon.model");

router.get("/", async (req, res) => {
  try {
    const coupons = await Coupon.find({});
    res.json(coupons);
  } catch (error) {
    console.error("Error fetching coupons:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const couponId = req.params.id;

    const coupon = await Coupon.findOne({ couponCode: couponId });

    if (!coupon) {
      return res.status(404).json({ error: "Coupon not found" });
    }

    res.json(coupon);
  } catch (error) {
    console.error("Error fetching coupon:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
