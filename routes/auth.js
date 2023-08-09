const express = require("express");
const router = express.router();
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bycrpt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    // Get all feilds
    const { name, email, mobile, password } = req.body;

    if (!name || !email || !mobile || !password) {
      res.status(400).json({ error: "All Feilds Are Required" });
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      res.status(409).json({ Error: "User email already exists" });
    }

    const hashPassword = await User.bycrpt.hash(password, 10);
    const user = new User({ name, email, mobile, password });
    await user.save();
  } catch (error) {
    res.status(500).json({ status: false, message: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!email || !password) {
      return res.status.json({ error: "Email and Password Required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: "Invalid Email and password" });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const token =jwt.sign({userId :user._id},"SECRET_KEY")
    res.json({success :true,
      token,
      recuruiterName :user.name,
      user : email
    })
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
