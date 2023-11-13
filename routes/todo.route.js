const { Router } = require("express");
const {
  getAllTodo,
  addNewTodo,
  getDetailTodoById,
  updateTodo,
  deleteTodoById,
  deleteAllTodo,
} = require("../controllers/todo.controller");
const AuthMiddleware = require("../middleware/authMiddleware");

const router = Router();

router.get("/", AuthMiddleware, getAllTodo);
router.post("/", AuthMiddleware, addNewTodo);
router.get("/:id", AuthMiddleware, getDetailTodoById);
router.put("/:id", AuthMiddleware, updateTodo);
router.delete("/:id", AuthMiddleware, deleteTodoById);
router.delete("/", AuthMiddleware, deleteAllTodo);
module.exports = router;
