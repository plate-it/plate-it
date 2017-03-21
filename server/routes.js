const userController = require('./users/userController.js');
const recipeController = require('./recipes/recipeController.js');


module.exports = (app) => {
  app.get('/api/users', userController.getAll);
  app.get('/api/users/:username', userController.getOneUser);
  app.post('/api/signup', userController.signup);

  app.post('/api/users/:username/books', userController.createBook);
  app.get('/api/users/:username/books/:bookname', userController.getOneBook);
  // app.patch('/api/users/:username/books/:bookname', userController.updateBook);

  app.post('/api/users/:username/recipes', recipeController.createOne);
};
