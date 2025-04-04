'use strict';

const recipeService = require('../services/recipeServices');

class RecipeController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  // Создать новый рецепт
//   createRecipe = async (req, res) => {
//     try {
//       const { title, ingredients, instructions } = req.body;
//       const userId = req.user.id;

//       if (!title || title.trim().length === 0) {
//         return res.status(400).json({ message: 'Название рецепта не может быть пустым' });
//       }
//       if (!ingredients || ingredients.trim().length === 0) {
//         return res.status(400).json({ message: 'Ингредиенты не могут быть пустыми' });
//       }
//       if (!instructions || instructions.trim().length === 0) {
//         return res.status(400).json({ message: 'Инструкции не могут быть пустыми' });
//       }

//       const recipeData = { title, ingredients, instructions, userId };
//       const recipe = await this.#service.createRecipe(recipeData);
//       res.status(201).json(recipe);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при создании рецепта',
//       });
//     }
//   };

  // Получить все рецепты
  getAllRecipes = async (req, res) => {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const recipes = await this.#service.getAllRecipes({
        limit: parseInt(limit, 10),
        offset: parseInt(offset, 10),
      });
      res.status(200).json(recipes);
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: e.message,
        text: 'Ошибка при получении рецептов',
      });
    }
  };

//   // Получить рецепт по ID
//   getRecipeById = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const recipe = await this.#service.getRecipeById(id);

//       if (!recipe) {
//         return res.status(404).json({ message: 'Рецепт не найден' });
//       }
//       res.status(200).json(recipe);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении рецепта',
//       });
//     }
//   };

//   // Обновить рецепт
//   updateRecipe = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const { title, ingredients, instructions } = req.body;
//       const userId = req.user.id;

//       if (title && title.trim().length === 0) {
//         return res.status(400).json({ message: 'Название рецепта не может быть пустым' });
//       }

//       // Проверяем, принадлежит ли рецепт пользователю
//       const recipe = await this.#service.getRecipeById(id);
//       if (!recipe) {
//         return res.status(404).json({ message: 'Рецепт не найден' });
//       }
//       if (recipe.userId !== userId) {
//         return res.status(403).json({ message: 'Недостаточно прав для редактирования рецепта' });
//       }

//       const recipeData = { title, ingredients, instructions };
//       const updatedRows = await this.#service.updateRecipe(id, recipeData);
//       if (updatedRows === 0) {
//         return res.status(404).json({ message: 'Рецепт не найден' });
//       }
//       const updatedRecipe = await this.#service.getRecipeById(id);
//       res.status(200).json(updatedRecipe);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при обновлении рецепта',
//       });
//     }
//   };

//   // Удалить рецепт
//   deleteRecipe = async (req, res) => {
//     try {
//       const { id } = req.params;
//       const userId = req.user.id;

//       // Проверяем, принадлежит ли рецепт пользователю
//       const recipe = await this.#service.getRecipeById(id);
//       if (!recipe) {
//         return res.status(404).json({ message: 'Рецепт не найден' });
//       }
//       if (recipe.userId !== userId && !req.user.isAdmin) {
//         return res.status(403).json({ message: 'Недостаточно прав для удаления рецепта' });
//       }

//       const deletedRows = await this.#service.deleteRecipe(id);
//       if (deletedRows === 0) {
//         return res.status(404).json({ message: 'Рецепт не найден' });
//       }
//       res.status(200).json({ message: 'Рецепт успешно удалён' });
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при удалении рецепта',
//       });
//     }
//   };

//   // Получить рецепты пользователя
//   getUserRecipes = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const { limit = 10, offset = 0 } = req.query;

//       const recipes = await this.#service.getRecipesByUser(userId, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(recipes);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении рецептов пользователя',
//       });
//     }
//   };

//   // Поиск рецептов по названию
//   searchRecipesByTitle = async (req, res) => {
//     try {
//       const { q: searchTerm } = req.query;
//       const { limit = 10, offset = 0 } = req.query;

//       if (!searchTerm || searchTerm.trim().length < 3) {
//         return res.status(400).json({ message: 'Строка поиска должна содержать минимум 3 символа' });
//       }

//       const recipes = await this.#service.searchRecipesByTitle(searchTerm, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(recipes);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при поиске рецептов',
//       });
//     }
//   };

//   // Поиск рецептов по ингредиентам
//   searchRecipesByIngredients = async (req, res) => {
//     try {
//       const { q: searchTerm } = req.query;
//       const { limit = 10, offset = 0 } = req.query;

//       if (!searchTerm || searchTerm.trim().length < 3) {
//         return res.status(400).json({ message: 'Строка поиска должна содержать минимум 3 символа' });
//       }

//       const recipes = await this.#service.searchRecipesByIngredients(searchTerm, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(recipes);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при поиске рецептов по ингредиентам',
//       });
//     }
//   };
}

const recipeController = new RecipeController(recipeService);

module.exports = recipeController;