const User = require('./userModel');
const bodyParser = require('body-parser');

module.exports = {
  signup: (req, res) => {
    console.log('BODY HERE', req.body)
    const username = req.body.username;
    const newUser = new User({
      username,
      books: [],
    });
    newUser.save((err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.send(user);
      }
    });
  },
  addBook: (req, res) => {
    const bookName = req.body.bookName;
    const recipeIds = req.body.recipeIds;
    const username = req.body.username;
    User.findOne({ username })
    .exec((err, userProfile) => {
      if (err) {
        res.send(err);
      } else {
        const newBook = new
      }
    });
  },
};