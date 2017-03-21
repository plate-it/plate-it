const userController = require('./users/userController.js');
const recipeController = require('./recipes/recipeController.js');
const bodyParser = require('body-parser');

module.exports = (app) => {
  app.post('/api/signup', userController.signup);
}