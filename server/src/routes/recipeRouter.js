'use strict';

const express = require('express');
const recipeController = require('../controllers/recipeController');
// const authMiddleware = require('../middleware/authMiddleware');
const recipeRouter = express.Router();

// Основные CRUD операции для рецептов
recipeRouter.get('/', recipeController.getAllRecipes);
// recipeRouter.post('/', recipeController.createRecipe); // authMiddleware,
// recipeRouter.get('/:recipeId', recipeController.getRecipeById);
// recipeRouter.put('/:recipeId', recipeController.updateRecipe); // authMiddleware,
// recipeRouter.delete('/:recipeId', recipeController.deleteRecipe); // authMiddleware,

// // Специфичные роуты для рецептов
// recipeRouter.get('/user/me', recipeController.getUserRecipes); // authMiddleware,
// recipeRouter.get('/search/title', recipeController.searchRecipesByTitle);
// recipeRouter.get(
//   '/search/ingredients',
//   recipeController.searchRecipesByIngredients,
// );

module.exports = recipeRouter;
