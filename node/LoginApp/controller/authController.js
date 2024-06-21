const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const User = require("../model/userModel");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
var _ = require("lodash");
const config = require("../config");
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post("/register", (req, res) => {
  //encrypt password
  let hashPassword = bcrypt.hashSync(req.body.password, 8);
  //   console.log(hashPassword);
  User.create(
    {
      name: req.body.name,
      email: req.body.email,
      password: hashPassword,
      phone: req.body.phone,
      role: req.body.role ? req.body.role : "User",
    },
    (err, data) => {
      if (err) return res.send("Error while registering user:", err.message);
      res.send("Registration Successful!");
    }
  );
});

// Login route
router.post("/login", (req, res) => {
  User.findOne({ email: req.body.email }, (err, user) => {
    if (err)
      return res
        .status(500)
        .json({ auth: false, token: "Error while logging in" });
    if (!user)
      return res
        .status(401)
        .json({ auth: false, token: "Invalid credentials" });

    if (!req.body.password || !user.password) {
      return res
        .status(400)
        .json({ auth: false, token: "Password not provided" });
    }

    const passIsValid = bcrypt.compareSync(req.body.password, user.password);
    if (!passIsValid)
      return res
        .status(401)
        .json({ auth: false, token: "Invalid credentials" });

    // Log the secret to verify it's being imported correctly
    console.log("Secret: ", config.secret);
    if (!config.secret) {
      return res
        .status(500)
        .json({ auth: false, message: "Secret key not provided" });
    }

    let token = jwt.sign({ id: user._id }, config.secret, { expiresIn: 86400 }); // 24 hours
    res.status(200).json({ auth: true, token: token });
  });
});

//get all user
router.get("/users", (req, res) => {
  User.find({}, (err, data) => {
    if (err) throw err;
    res.send(data);
  });
});

//get particular user
router.get("/userInfo", (req, res) => {
  let token = req.headers["x-access-token"];
  if (!token) res.send({ auth: false, token: "No Token Provided" });

  //jwt verify
  jwt.verify(token, config.secret, (err, user) => {
    console.log(user);
    if (err) res.send({ auth: false, token: "Invalid Token" });
    User.findById(user.id, (err, result) => {
      res.send(result);
    });
  });
});

module.exports = router;
