const { Users } = require("../models");
const bcrypt = require("bcrypt");
var jwt = require("jsonwebtoken");
module.exports = {
  loginUser: async (req, res) => {
    const { email, password } = req.body;
    const user = await Users.findOne({
      where: {
        email,
      },
    });
    bcrypt.compare(password, user.password, function (err, result) {
      if (!result) {
        res.status(404).json({
          message: "User Not Found",
        });
        return;
      }
      const token = jwt.sign(
        { username: user.username, email: user.email },
        "sh7a8wj"
      );
      res.status(200).json({
        message: "user authentication successful",
        token,
      });
    });
  },
  RegisterNewUser: (req, res) => {
    const saltRounds = 10;
    const { username, email, password } = req.body;
    bcrypt.hash(password, saltRounds, async function (err, hash) {
      const newUser = await Users.create({ username, email, password: hash });
      res.status(201).json({
        message: "Create New User Successfully",
        newUser: newUser,
      });
    });
  },
};
