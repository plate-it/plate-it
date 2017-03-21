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
  getOneUser: (req, res) => {
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
  getAllUsers: (req, res) => {
    User.find({})
    .exec((err, users) => {
      res.status(200).send(users);
    });
  },
  createBook: (req, res) => {
    const bookname = req.body.bookname;
    const recipeIds = JSON.parse(req.body.recipeIds);
    const username = req.params.username;
    const newBook = {
      bookname,
      recipeIds,
    };
    User.findOne({ username })
    .exec((err, user) => {
      if (err) {
        res.send(err);
      } else {
        user.books.push(newBook);
        user.save((err2, savedUser) => {
          if (err2) {
            res.send(err2);
          } else {
            res.send(savedUser);
          }
        });
      }
    });
  },
  getOneBook: (req, res) => {
    const bookname = req.params.bookname;
    const username = req.params.username;
    User.findOne({ username })
    .exec((err, user) => {
      if (err) {
        res.status(500).send(err);
      } else {
        let match = false;
        for (let i = 0; i < user.books.length; i += 1) {
          if (bookname === user.books[i].bookname) {
            res.status(200).send(user.books[i]);
            match = true;
            break;
          }
        }
        if (!match) {
          res.status(500).send('Book not found');
        }
      }
    });
  },
};
