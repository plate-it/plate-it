const Recipe = require('./recipeModel');

module.exports = {
  createOneRecipe: (req, res) => {
    const recipeComponents = req.body;

    const newRecipe = new Recipe({
      recipeComponents,
    });
    newRecipe.save((err, recipe) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(201).send(recipe);
      }
    });
  },
  getAllRecipes: (req, res) => {
    Recipe.find({})
    .exec((err, recipes) => {
      res.status(200).send(recipes);
    });
  },
  getOneRecipe: (req, res) => {
    const id = req.params.recipeid;
    Recipe.findOne({ _id: id })
    .exec((err, recipe) => {
      if (err) {
        res.status(500).send(err);
      } else {
        res.status(200).send(recipe);
      }
    });
  },
};
