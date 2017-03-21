const Recipe = require('./recipeModel');

module.exports = {
  createOneRecipe: (req, res) => {
    const parsedReq = req.body;
    const username = req.params.username;
    const recipeName = parsedReq.recipeName;
    const ingredients = parsedReq.ingredients || [];
    const directions = parsedReq.directions || [];
    const photos = parsedReq.photos || [];
    const rating = parsedReq.rating || 0;
    const newRecipe = new Recipe({
      recipeName,
      username,
      ingredients,
      directions,
      photos,
      rating,
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
