const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  books: [new Schema({
    bookName: String,
    recipeIds: [Number],
  })],
});

module.exports = mongoose.model('User', UserSchema);
