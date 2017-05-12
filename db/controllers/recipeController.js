const Recipes = require('../models/recipeModel.js');

module.exports = {
  saveRecipe({ body }, response) {
    Recipes.findOrCreate({
      where: { title: body.title.blocks[0].text },
      defaults: {
        title: body.title.blocks[0].text,
        recipe: body,
      },
    })
    .then((recipe) => { response.send(recipe); })
    .catch((error) => { response.send(error); });
  },

};
