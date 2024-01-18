const { Sequelize } = require("sequelize");

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    fullname: {
      type: Sequelize.STRING,
    },
    developerRole: {
      type: Sequelize.STRING,
    },
    programmingLang: {
      type: Sequelize.ARRAY(Sequelize.STRING),
    },
    communicationChannel: {
      type: Sequelize.STRING,
    },
    availability: {
      type: Sequelize.STRING,
    },
  });

  return User;
};
