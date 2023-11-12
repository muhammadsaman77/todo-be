const { Router } = require("express");
const {
  RegisterNewUser,
  loginUser,
} = require("../controllers/user.controller");

const router = Router();

router.post("/login", loginUser);
router.post("/register", RegisterNewUser);

module.exports = router;
