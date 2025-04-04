const express = require('express');
const productController = require('../controllers/productController');
const verifyAccessToken = require('../middlewares/verifyAccessToken');

const productRouter = express.Router();

// Получить все продукты
productRouter.get('/', productController.getAllProducts);

// Создать новый продукт
productRouter.post('/', verifyAccessToken, productController.createProduct); // authMiddleware,

// Получить продукт по ID
productRouter.get('/:id', productController.getProductById);

// Обновить продукт
productRouter.put('/:id', verifyAccessToken, productController.updateProduct); // authMiddleware,

// Удалить продукт
productRouter.delete('/:id', verifyAccessToken, productController.deleteProduct); // authMiddleware,

// Получить продукты текущего пользователя
productRouter.get('/user/me', verifyAccessToken, productController.getUserProducts); // authMiddleware,

// Получить продукты по категории
productRouter.get('/categories/:id/products', productController.getProductsByCategory);

// Получить продукты с истекающим сроком годности
productRouter.get('/expiring', verifyAccessToken, productController.getExpiringProducts); // authMiddleware,

// Поиск продуктов по названию
productRouter.get('/search', productController.searchProducts);

module.exports = productRouter;
