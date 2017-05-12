const Sequelize = require('sequelize');
const db = require('../db.js');
const JSONField = require('sequelize-json');

const Recipes = db.define('recipes', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: Sequelize.STRING,
  recipe: JSONField(db, 'Recipes', 'recipe'),
});

Recipes.sync();

module.exports = Recipes;
