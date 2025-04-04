'use strict';

const express = require('express');
const categoryController = require('../controllers/categoryController');
const verifyAccessToken = require('../middlewares/verifyAccessToken');
const categoryRouter = express.Router();

// Получить все категории
categoryRouter.get('/', categoryController.getAllCategories);
// Получить категории пользователя
// categoryRouter.get('/user', verifyAccessToken, categoryController.getUserCategories); // authMiddleware,
// Поиск категорий по названию
categoryRouter.get('/search', categoryController.searchCategories);

// Создать новую категорию
categoryRouter.post('/', verifyAccessToken, categoryController.createCategory); // authMiddleware,

// Получить категорию по ID
categoryRouter.get('/:categoryId', categoryController.getCategoryById);

// Обновить категорию
categoryRouter.put('/:categoryId', verifyAccessToken, categoryController.updateCategory); // authMiddleware,

// Удалить категорию
categoryRouter.delete(
  '/:categoryId',
  verifyAccessToken,
  categoryController.deleteCategory,
); // authMiddleware,

// Получить категорию с продуктами
categoryRouter.get('/:categoryId/products', categoryController.getCategoryWithProducts);

module.exports = categoryRouter;
