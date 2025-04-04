const express = require('express');
const productController = require('../controllers/productController');
// const authMiddleware = require('../middleware/authMiddleware');
const productRouter = express.Router();

// Получить все продукты
productRouter.get('/', productController.getAllProducts);

// // Создать новый продукт
// productRouter.post('/', productController.createProduct); // authMiddleware,

// // Получить продукт по ID
// productRouter.get('/:id', productController.getProductById);

// // Обновить продукт
// productRouter.put('/:id', productController.updateProduct); // authMiddleware,

// // Удалить продукт
// productRouter.delete('/:id', productController.deleteProduct); // authMiddleware,

// // Получить продукты текущего пользователя
// productRouter.get('/user/me', productController.getUserProducts); // authMiddleware,

// // Получить продукты по категории
// productRouter.get('/categories/:id/products', productController.getProductsByCategory);

// // Получить продукты с истекающим сроком годности
// productRouter.get('/expiring', productController.getExpiringProducts); // authMiddleware,

// // Поиск продуктов по названию
// productRouter.get('/search', productController.searchProducts);

// // Получить продукт с полной информацией (о пользователе и категории)
// productRouter.get('/:id/full', productController.getProductWithDetails);

module.exports = productRouter;
