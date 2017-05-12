const userController = require('../db/controllers/userController.js');
const recipeController = require('../db/controllers/recipeController.js');

module.exports = (app) => {
  // user routes
  app.post('/api/user', userController.findUser);

  // recipe routes
  app.post('/api/recipes', recipeController.saveRecipe);
};
