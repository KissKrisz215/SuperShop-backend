const router = require("express").Router();
const Order = require("../model/Order.model");
const User = require("../model/User.model");

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
      phoneNumber,
      country,
      address,
      city,
      zipCode,
      shipping,
      paymentMethod,
    } = req.body;

    if (
      !phoneNumber ||
      !country ||
      !address ||
      !city ||
      !zipCode ||
      !shipping ||
      !paymentMethod
    ) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    if (paymentMethod !== "card" && paymentMethod !== "cash") {
      return res.status(400).json({ message: "Invalid payment method" });
    }

    if (shipping !== "FedEx" && shipping !== "UPS") {
      return res.status(400).json({ message: "Invalid shipping method" });
    }

    const newOrder = new Order({
      userId: userId,
      phoneNumber,
      country,
      address,
      city,
      zipCode,
      shipping,
      paymentMethod,
      id: req.body.id,
      cart: req.body.cart,
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });

    await newOrder.save();

    res.status(201).json({ message: "Order created successfully" });
  } catch (error) {
    console.error("Error creating order:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
