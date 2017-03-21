const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipeName: { type: String },
  username: { type: String },
  ingredients: [String],
  directions: [String],
  photos: [String],
  rating: { type: Number },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
