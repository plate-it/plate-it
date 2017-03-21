const Recipe = require('./recipeModel');

module.exports = {
  createOne: (req, res) => {
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
};
