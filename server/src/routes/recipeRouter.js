'use strict';

const express = require('express');
const recipeController = require('../controllers/recipeController');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const recipeRouter = express.Router();


recipeRouter.get('/',verifyAccessToken, recipeController.getAllRecipes);
recipeRouter.post('/', verifyAccessToken,recipeController.createRecipe); 
recipeRouter.get('/:recipeId', recipeController.getRecipeById);
recipeRouter.put('/:recipeId',verifyAccessToken, recipeController.updateRecipe); 
recipeRouter.delete('/:recipeId',verifyAccessToken, recipeController.deleteRecipe); 

recipeRouter.get('/user/me',verifyAccessToken, recipeController.getUserRecipes); 
recipeRouter.get('/search/title', recipeController.searchRecipesByTitle);
recipeRouter.get(
  '/search/ingredients',
  recipeController.searchRecipesByIngredients,
);

module.exports = recipeRouter;
