const { User } = require("../models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/response");
const { config } = require("dotenv");
config();
module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return errorResponse(res, 400, "Invalid Request");
    }
    try {
      const user = await User.findOne({
        where: {
          email,
        },
      });
      if (!user) {
        return errorResponse(res, 404, "User Not Found");
      }
      bcrypt.compare(password, user.password, function (err, result) {
        if (!result) {
          return errorResponse(res, 404, "Password Not Match");
        }
        const token = jwt.sign(
          { id: user.id, username: user.username, email: user.email },
          process.env.PRIVATE_KEY
        );
        return res.status(200).json({
          message: "user authentication successful",
          token,
        });
      });
    } catch (error) {
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
  registerNewUser: (req, res) => {
    const saltRounds = process.env.SALT;
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return errorResponse(res, 400, "Invalid Request");
    }
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      try {
        const newUser = await User.create({ username, email, password: hash });
        return res.status(201).json({
          message: "Create New User Successfully",
          newUser: newUser,
        });
      } catch (error) {
        return errorResponse(res, 500, "Internal Server Error");
      }
    });
  },
};
