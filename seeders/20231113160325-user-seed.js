"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "saman67@gmail.com",
          username: "saman67",
          password:
            "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "fahri293@gmail.com",
          username: "fahri293",
          password:
            "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "lana674@gmail.com",
          username: "lana674",
          password:
            "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "6ntrwsnu@gmail.com",
          username: "6ntrwsnu",
          password:
            "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "arwin1m@gmail.com",
          username: "arwin1m",
          password:
            "$2b$10$FyqXxEj.PBx9zrdBUxtlkujBa24AljiFH54aPSlRU93VxiOp4eyge",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
