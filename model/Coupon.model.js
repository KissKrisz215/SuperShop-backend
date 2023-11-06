const mongoose = require("mongoose");

const discountTypeSchema = new mongoose.Schema({
  type: String,
  value: Number,
});

const couponSchema = new mongoose.Schema({
  status: String,
  _id: String,
  title: {
    en: String,
    de: String,
    hy: String,
    af: String,
    cs: String,
    bn: String,
    az: String,
    ln: String,
    ar: String,
    pt: String,
  },
  couponCode: String,
  endTime: Date,
  minimumAmount: Number,
  productType: String,
  logo: String,
  discountType: discountTypeSchema,
  createdAt: Date,
  updatedAt: Date,
  __v: Number,
});

const Coupon = mongoose.model("Coupon", couponSchema);

module.exports = Coupon;
