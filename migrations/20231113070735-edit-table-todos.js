"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Todos", "description", {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
      after: "status",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Todos", "description");
  },
};
