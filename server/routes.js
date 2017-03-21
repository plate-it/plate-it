const userController = require('./users/userController.js');
const recipeController = require('./recipes/recipeController.js');


module.exports = (app) => {
  app.post('/api/signup', userController.signup);
  app.get('/api/users', userController.getAll);
  app.post('/api/users/:username/books', userController.createBook);
}