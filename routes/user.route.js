const { Router } = require("express");
const {
  registerNewUser,
  loginUser,
  getAll,
} = require("../controllers/user.controller");

const router = Router();

router.post("/login", loginUser);
router.post("/register", registerNewUser);

module.exports = router;
