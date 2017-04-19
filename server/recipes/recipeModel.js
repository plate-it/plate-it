const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  title: Object,
});

module.exports = mongoose.model('Recipe', RecipeSchema);
