const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String, required: true },
  books: [new Schema({
    bookname: String,
    recipeIds: [Number],
  })],
});

module.exports = mongoose.model('User', UserSchema);
