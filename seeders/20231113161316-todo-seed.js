"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Todos",
      [
        {
          title: "tes 1",
          status: false,
          description: "deskripsi 1",
          userId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "tes 2",
          status: false,
          description: "deskripsi 2",
          userId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "tes 3",
          status: false,
          description: "deskripsi 3",
          userId: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "tes 4",
          status: false,
          description: "deskripsi 4",
          userId: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "tes 5",
          status: false,
          description: "deskripsi 5",
          userId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Todos", null, {});
  },
};
