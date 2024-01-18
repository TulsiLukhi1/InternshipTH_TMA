const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("tasks", {
    title: {
      type: Sequelize.STRING,
    },
    assignedTo: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
    dueDate: {
      type: Sequelize.DATEONLY,
    },
  });

  return User;
};
