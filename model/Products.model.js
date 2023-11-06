const mongoose = require("mongoose");

const productVariantSchema = new mongoose.Schema({
  id: String,
  price: Number,
  originalPrice: Number,
  quantity: Number,
  discount: Number,
  productId: String,
  barcode: String,
  image: String,
});

const productSchema = new mongoose.Schema({
  prices: {
    discount: Number,
    originalPrice: Number,
    price: Number,
  },
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  image: [String],
  tag: [String],
  variants: [productVariantSchema],
  status: String,
  slug: String,
  sku: String,
  barcode: String,
  productId: String,
  title: {
    en: String,
  },
  description: {
    en: String,
  },
  category: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
    name: {
      en: String,
    },
  },
  stock: Number,
  isCombination: Boolean,
  createdAt: Date,
  updatedAt: Date,
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
