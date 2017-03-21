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
  getAll: (req, res) => {
    User.find({})
    .exec((err, users) => {
      res.status(200).send(users);
    });
  },
  addBook: (req, res) => {
    const bookName = req.body.bookName;
    const recipeIds = JSON.parse(req.body.recipeIds);
    const username = req.body.username;
    const newBook = {
      bookName,
      recipeIds,
    };
    User.findOne({ username })
    .exec((err, user) => {
      if (err) {
        res.send(err);
      } else {
        user.books.push(newBook);
        user.save((err, savedUser) => {
          if (err) {
            res.send(err);
          } else {
            res.send(savedUser);
          }
        });
      }
    });
  },
};