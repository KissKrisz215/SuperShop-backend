const router = require("express").Router();
const User = require("../model/User.model");
const Form = require("../model/Form.model");

router.get("/", (req, res, next) => {
  res.json("Everything works here.");
});

module.exports = router;

router.post("/form", async (req, res) => {
  try {
    const { email, username, subject, message } = req.body.formData;

    if (!email || !username || !subject || !message) {
      return res.status(400).json({ message: "Please Provide Input Fields" });
    }

    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(401).json({ message: "User not found!" });
    }

    const existingForm = await Form.findOne({ email });

    if (existingForm) {
      existingForm.username = username;
      existingForm.subject = subject;
      existingForm.message = message;

      await existingForm.save();

      return res.status(200).json({ message: "Form Updated Successfully!" });
    }

    const newForm = new Form({
      userId: existingUser._id,
      username,
      email,
      subject,
      message,
    });

    await newForm.save();

    res.status(200).json({ message: "Form Successfully Submitted!" });
  } catch (error) {
    console.error("Error updating user information:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});
