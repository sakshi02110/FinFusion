const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const passport = require("passport");

// @route   POST /api/auth/signup
// @desc    Register a new user
// @access  Public
router.get("/LogIn", (req, res) => {
    res.send("form");
})
// router.post("/SignUp", async (req, res) => {
//     const { username, email, password } = req.body;

//     try {
//         let user = await User.findOne({ email });
//         if (user) {
//             return res.status(400).json({ message: "User already exists" });
//         }

//         user = new User({
//             username,
//             email,
//             password,
//         });

//         const salt = await bcrypt.genSalt(10);
//         user.password = await bcrypt.hash(password, salt);

//         await user.save();

//         const payload = {
//             user: {
//                 id: user.id,
//             },
//         };

//         jwt.sign(
//             payload,
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token });
//             }
//         );
//     } catch (err) {
//         console.error(err.message);
//         res.status(500).json({ message: "Server error" });
//     }
// });

// // @route   POST /api/auth/login
// // @desc    Login user
// // @access  Public
// router.post("/LogIn", (req, res, next) => {
//     passport.authenticate("local", (err, user, info) => {
//         if (err) {
//             return res.status(500).json({ message: "Server error" });
//         }
//         if (!user) {
//             return res.status(400).json({ message: info.message });
//         }

//         const payload = {
//             user: {
//                 id: user.id,
//             },
//         };

//         jwt.sign(
//             payload,
//             process.env.JWT_SECRET,
//             { expiresIn: "1h" },
//             (err, token) => {
//                 if (err) throw err;
//                 res.json({ token });
//             }
//         );
//     })(req, res, next);
// });

module.exports = router;