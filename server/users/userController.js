const User = require('./userModel');

module.exports = {
  signup: (req, res) => {
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
  getOne: (req, res) => {
    const username = req.params.username;
    User.find({ username })
    .exec((err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  },
  getAll: (req, res) => {
    User.find({})
    .exec((err, users) => {
      res.status(200).send(users);
    });
  },
  createBook: (req, res) => {
    const bookName = req.body.bookName;
    const recipeIds = JSON.parse(req.body.recipeIds);
    const username = req.params.username;
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