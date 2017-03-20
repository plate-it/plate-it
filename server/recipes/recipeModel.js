const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RecipeSchema = new Schema({
  recipename: { type: String },
  userId: { type: Number },
  ingredients: [String],
  directions: [String],
  photos: [String],
  rating: { type: Number },
});

module.exports = mongoose.model('Recipe', RecipeSchema);
