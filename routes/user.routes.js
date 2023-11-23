const router = require("express").Router();
const Order = require("../model/Order.model");
const User = require("../model/User.model");
const jwt = require("jsonwebtoken");
const jwtSecret = process.env.JWT_SECRET;
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

router.get("/", (req, res) => {
  res.send("User Route");
});

router.put("/update", async (req, res) => {
  try {
    const { userId } = req.user;
    const updatedUserData = req.body;

    if (updatedUserData.email) {
      const existingUser = await User.findOne({ email: updatedUserData.email });

      if (existingUser && existingUser._id.toString() !== userId) {
        return res
          .status(400)
          .json({ error: "Email address is already in use" });
      }
    }

    if (updatedUserData.phoneNumber) {
      const phoneNumberRegex = /^\d{10}$/;

      if (!phoneNumberRegex.test(updatedUserData.phoneNumber)) {
        return res.status(400).json({ error: "Invalid phone number format" });
      }

      const existingUserWithPhoneNumber = await User.findOne({
        phoneNumber: updatedUserData.phoneNumber,
      });

      if (
        existingUserWithPhoneNumber &&
        existingUserWithPhoneNumber._id.toString() !== userId
      ) {
        return res
          .status(400)
          .json({ error: "Phone number is already in use" });
      }
    }

    await User.findByIdAndUpdate(userId, updatedUserData);

    res.json({ message: "User information updated successfully" });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.put("/changepassword", async (req, res) => {
  try {
    const userId = req.user.id;

    const newPassword = req.body.newPassword;

    await User.findByIdAndUpdate(userId, { password: user.password });

    res.json({ message: "Password changed successfully" });
  } catch (error) {
    console.error("Error changing user password:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/order", async (req, res) => {
  try {
    const userId = req.user.userId;

    const {
      phone,
      country,
      address,
      city,
      zipCode,
      shipping,
      payment,
      products,
      firstName,
      lastName,
      email,
      coupon,
      activatedCoupon,
    } = req.body;

    if (
      !phone ||
      !country ||
      !address ||
      !city ||
      !zipCode ||
      !shipping ||
      !payment ||
      !products ||
      !firstName ||
      !lastName ||
      !email
    ) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    if (products.length < 1) {
      return res.status(400).json({ message: "Shopping Cart is empty!" });
    }

    if (payment.paymentMethod !== "card" && payment.paymentMethod !== "cash") {
      return res.status(400).json({ message: "Invalid payment method" });
    }

    if (shipping !== "fedex" && shipping !== "UPS") {
      return res.status(400).json({ message: "Invalid shipping method" });
    }

    const phoneNumberRegex = /^\d{10,12}$/;
    if (!phoneNumberRegex.test(phone)) {
      return res.status(400).json({ message: "Invalid phone number format!" });
    }
    let totalAmount = products.reduce(
      (accumulator, current) => current.prices.price + accumulator,
      0
    );

    let shippingCost;

    if (shipping === "fedex") {
      shippingCost = 20;
    } else if (shipping === "UPS") {
      shippingCost = 60;
    }

    if (shipping === "fedex") {
      totalAmount += 20;
    } else if (shipping === "UPS") {
      totalAmount += 60;
    }

    const newOrder = new Order({
      phone,
      country,
      address,
      city,
      zipCode,
      shipping,
      payment,
      products,
      firstName,
      lastName,
      email,
      coupon,
      activatedCoupon,
      userId,
      totalAmount,
      shippingCost,
    });

    await newOrder.save();

    res
      .status(201)
      .json({ message: "Order created successfully", orderId: newOrder._id });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/orders", async (req, res) => {
  try {
    const token = req.header("x-auth-token");

    if (!token) {
      return res
        .status(401)
        .json({ message: "No authentication token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const orders = await Order.find({ userId });

    if (!orders || orders.length === 0) {
      return res
        .status(404)
        .json({ message: "No orders found for the given userId" });
    }

    res.status(200).json(orders);
  } catch (error) {
    console.error("Error retrieving orders:", error);
    if (error.name === "JsonWebTokenError") {
      return res.status(401).json({ message: "Invalid authentication token" });
    }
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/order/:id", async (req, res) => {
  try {
    const userId = req.user.userId;
    const orderId = req.params.id;
    console.log("OrderId:", orderId);

    if (!ObjectId.isValid(orderId)) {
      return res.status(400).json({ message: "Invalid Order ID format" });
    }

    const order = await Order.findOne({
      _id: new ObjectId(orderId),
      userId: userId,
    });

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error("Error retrieving order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
