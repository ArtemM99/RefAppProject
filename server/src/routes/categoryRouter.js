'use strict';

const express = require('express');
const categoryController = require('../controllers/categoryController');
// const authMiddleware = require('../middleware/authMiddleware');
const categoryRouter = express.Router();

// Получить все категории
categoryRouter.get('/', categoryController.getAllCategories);
// // Получить категории пользователя
// categoryRouter.get('/user', categoryController.getUserCategories); // authMiddleware,
// // Поиск категорий по названию
// categoryRouter.get('/search', categoryController.searchCategories);

// // Создать новую категорию
// categoryRouter.post('/', categoryController.createCategory); // authMiddleware,


// // Получить категорию по ID
// categoryRouter.get('/:categoryId', categoryController.getCategoryById);

// // Обновить категорию
// categoryRouter.put('/:categoryId', categoryController.updateCategory); // authMiddleware,

// // Удалить категорию
// categoryRouter.delete('/:categoryId', categoryController.deleteCategory); // authMiddleware,



// // Получить категорию с продуктами
// categoryRouter.get('/:categoryId/products', categoryController.getCategoryWithProducts);



module.exports = categoryRouter;
