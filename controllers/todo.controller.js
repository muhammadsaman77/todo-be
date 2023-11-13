const { Todo } = require("../models");
const jwt = require("jsonwebtoken");
const { errorResponse } = require("../utils/response");
const { config } = require("dotenv");
config();
module.exports = {
  getAllTodo: (req, res) => {
    const token = req.token;
    jwt.verify(token, process.env.PRIVATE_KEY, async function (err, decoded) {
      if (decoded) {
        try {
          const todos = await Todo.findAll({
            where: {
              userId: decoded.id,
            },
            attributes: ["id", "title", "status"],
          });

          return res.json({
            status: "success",
            data: todos,
          });
        } catch (error) {
          return errorResponse(res, 500, "Internal Server Error");
        }
      }
      return errorResponse(res, 401, "unauthorized");
    });
  },
  getDetailTodoById: async (req, res) => {
    const { id } = req.params;
    if (id) {
      try {
        const todo = await Todo.findOne({
          where: {
            id,
          },
        });
        return res.json({ status: "success", data: todo });
      } catch (error) {
        return errorResponse(res, 500, "Internal Server Error");
      }
    }
    return errorResponse(res, 404, "Todo Not Found");
  },
  addNewTodo: (req, res) => {
    const { title, description } = req.body;
    const token = req.token;
    if (!title || !description) {
      return errorResponse(res, 400, "Invalid Request");
    }
    jwt.verify(token, process.env.PRIVATE_KEY, async function (err, decoded) {
      if (decoded) {
        try {
          await Todo.create({
            title,
            status: false,
            description,
            userId: decoded.id,
          });
          return res.status(201).json({
            status: "success",
            message: "Created Todo Successfully",
          });
        } catch (error) {
          return errorResponse(res, 500, "Internal Server Error");
        }
      }
      return errorResponse(res, 401, "unauthorized");
    });
  },
  updateTodo: async (req, res) => {
    const { id } = req.params;
    const { title, status, description } = req.body;
    if (!id || !title || !status || !description) {
      return errorResponse(res, 400, "Invalid Request");
    }
    try {
      const todo = await Todo.findOne({
        where: {
          id,
        },
      });
      if (todo) {
        await Todo.update(
          { title, status, description },
          {
            where: {
              id,
            },
          }
        );
      }
      res.status(200).json({
        status: "success",
        message: "Todo Data Updated Successfully",
      });
    } catch (error) {
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
  deleteAllTodo: async (req, res) => {
    const token = req.token;
    if (!token) {
      return errorResponse(res, 401, "unauthorized");
    }
    jwt.verify(token, process.env.PRIVATE_KEY, async function (err, decoded) {
      try {
        const todos = await Todo.findAll({
          where: {
            userId: decoded.id,
          },
        });
        await Promise.all(todos.map((todo) => todo.destroy()));
        res.status(200).json({
          status: "success",
          message: "All Related User Todo Data Successfully Deleted",
        });
      } catch (error) {
        return errorResponse(res, 500, "Internal Server Error");
      }
    });
  },
  deleteTodoById: async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return errorResponse(res, 400, "Invalid Request");
    }
    try {
      const todo = await Todo.findOne({
        where: {
          id,
        },
      });
      if (!todo) {
        return errorResponse(res, 404, "Todo Not Found");
      }
      await Todo.destroy();
      res.status.json({
        status: "success",
        message: "Data Todo Berhasil Dihapus",
      });
    } catch (error) {
      return errorResponse(res, 500, "Internal Server Error");
    }
  },
};
