const Sequelize = require('sequelize');
const db = require('../db.js');

const Users = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: Sequelize.STRING,
  nickname: Sequelize.STRING,
  email: Sequelize.STRING,
  picture: Sequelize.STRING,
  user_id: Sequelize.STRING,
});

Users.sync();

module.exports = Users;
