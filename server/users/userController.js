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
        res.status(500).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  },
  getOneUser: (req, res) => {
    const { username } = req.params;

    User.findOne({ username })
    .exec((err, user) => {
      if (err) { res.status(500).send({ error: err }); }
      if (user) {
        res.status(200).send(user);
      } else {
        res.status(400).send({ error: 'User not found' });
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
            res.status(500).send(err2);
          } else {
            res.status(201).send(savedUser);
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
          res.status(500).send({ err: 'Book not found' });
        }
      }
    });
  },
};
