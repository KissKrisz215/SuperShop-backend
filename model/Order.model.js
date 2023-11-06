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
  title: String,
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
  username: String,
  firstName: String,
  lastName: String,
  email: {
    required: true,
    type: String,
    lowercase: true,
    trim: true,
  },
  phoneNumber: {
    type: String,
    required: true,
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
  shipping: {
    type: String,
    required: true,
  },
  paymentMethod: {
    type: String,
    required: true,
  },
  cardNumber: String,
  status: String,
  totalAmount: Number,
  cart: [cartItemSchema],
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
