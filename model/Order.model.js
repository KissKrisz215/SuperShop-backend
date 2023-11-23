const mongoose = require("mongoose");

const cartItemSchema = new mongoose.Schema({
  prices: {
    discount: Number,
    originalPrice: Number,
    price: Number,
  },
  image: [String],
  tag: [String],
  status: String,
  _id: mongoose.Schema.Types.ObjectId,
  sku: String,
  barcode: String,
  productId: String,
  title: {
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
  __v: Number,
  createdAt: Date,
  updatedAt: Date,
  id: String,
  variant: {
    discount: Number,
    originalPrice: Number,
    price: Number,
  },
  price: Number,
  originalPrice: Number,
  quantity: Number,
  itemTotal: Number,
});

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  id: {
    type: String,
    unique: true,
    required: true,
    maxlength: 4,
    default: function () {
      const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      let id = "";
      for (let i = 0; i < 4; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
      }
      return id;
    },
  },
  firstName: String,
  lastName: String,
  discount: Number,
  email: {
    required: true,
    type: String,
    lowercase: true,
    trim: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
  coupon: String,
  couponCode: String,
  shipping: {
    type: String,
    required: true,
  },
  payment: {
    paymentMethod: String,
    details: {
      cardNumber: String,
      cvc: String,
      expiryDate: String,
    },
  },
  phone: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  totalAmount: Number,
  shippingCost: Number,
  products: [cartItemSchema],
  date: {
    type: Date,
    default: Date.now,
  },
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
