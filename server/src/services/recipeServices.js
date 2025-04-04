'use strict';

const dbModels = require('../../db/models');

class RecipeService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  // Получить все рецепты
  getAllRecipes = async (options = {}) => {
    const recipes = await this.#db.Recipe.findAll({
      ...options,
      include: [
        { model: this.#db.User, as: 'User', attributes: ['id', 'name'] }
      ]
    });
    return recipes;
  };

  // Создать новый рецепт
  createRecipe = async (recipeData) => {
    const newRecipe = await this.#db.Recipe.create(recipeData);
    return newRecipe;
  };

  // Получить рецепт по ID
  getRecipeById = async (id) => {
    const recipe = await this.#db.Recipe.findByPk(id, {
      include: [
        { model: this.#db.User, as: 'User', attributes: ['id', 'name'] }
      ]
    });
    return recipe;
  };

  // Обновить рецепт
  updateRecipe = async (id, recipeData) => {
    const [updatedRows] = await this.#db.Recipe.update(recipeData, {
      where: { id }
    });
    return updatedRows;
  };

  // Удалить рецепт
  deleteRecipe = async (id) => {
    const deletedRows = await this.#db.Recipe.destroy({
      where: { id }
    });
    return deletedRows;
  };

  // Получить рецепты пользователя
  getRecipesByUser = async (userId, options = {}) => {
    const recipes = await this.#db.Recipe.findAll({
      where: { userId },
      ...options,
      include: [
        { model: this.#db.User, as: 'User', attributes: ['id', 'name'] }
      ]
    });
    return recipes;
  };

  // Поиск рецептов по названию
  searchRecipesByTitle = async (searchTerm, options = {}) => {
    const recipes = await this.#db.Recipe.findAll({
      where: {
        title: {
          [this.#db.Sequelize.Op.iLike]: `%${searchTerm}%`
        }
      },
      ...options,
      include: [
        { model: this.#db.User, as: 'User', attributes: ['id', 'name'] }
      ]
    });
    return recipes;
  };

  // Поиск рецептов по ингредиентам
  searchRecipesByIngredients = async (searchTerm, options = {}) => {
    const recipes = await this.#db.Recipe.findAll({
      where: {
        ingredients: {
          [this.#db.Sequelize.Op.iLike]: `%${searchTerm}%`
        }
      },
      ...options,
      include: [
        { model: this.#db.User, as: 'User', attributes: ['id', 'name'] }
      ]
    });
    return recipes;
  };
}

const recipeService = new RecipeService(dbModels);

module.exports = recipeService;