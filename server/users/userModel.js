const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: { type: String },
  books: [new mongoose.Schema({
    bookname: String,
    recipeIds: [{ type: Schema.Types.ObjectId, ref: 'Recipe' }],
  })],
});

module.exports = mongoose.model('User', UserSchema);
