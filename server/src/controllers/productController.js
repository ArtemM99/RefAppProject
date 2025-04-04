
const productService = require('../services/productServices');

class ProductController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  // Создать новый продукт
//   createProduct = async (req, res) => {
//     try {
//       const { name, quantity, expirationDate, categoryId } = req.body;
//       const userId = req.user.id; // Предполагаем, что пользователь аутентифицирован

//       if (!name || name.trim().length === 0) {
//         return res
//           .status(400)
//           .json({ message: 'Название продукта не может быть пустым' });
//       }
//       if (!quantity || quantity <= 0) {
//         return res.status(400).json({ message: 'Количество должно быть больше 0' });
//       }
//       if (!expirationDate) {
//         return res.status(400).json({ message: 'Укажите срок годности' });
//       }
//       if (!categoryId) {
//         return res.status(400).json({ message: 'Укажите категорию' });
//       }

//       const productData = { name, quantity, expirationDate, userId, categoryId };
//       const product = await this.#service.createProduct(productData);
//       res.status(201).json(product);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при создании продукта',
//       });
//     }
//   };

  // Получить все продукты
  getAllProducts = async (req, res) => {
    try {
      const { limit = 10, offset = 0 } = req.query;
      const products = await this.#service.getAllProducts({
        limit: parseInt(limit, 10),
        offset: parseInt(offset, 10),
      });
      res.status(200).json(products);
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: e.message,
        text: 'Ошибка при получении продуктов',
      });
    }
  };

  // Получить продукт по ID
//   getProductById = async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const product = await this.#service.getProductById(productId);

//       if (!product) {
//         return res.status(404).json({ message: 'Продукт не найден' });
//       }
//       res.status(200).json(product);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении продукта',
//       });
//     }
//   };

//   // Обновить продукт
//   updateProduct = async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const { name, quantity, expirationDate, categoryId } = req.body;
//       const userId = req.user.id;

//       if (!name || name.trim().length === 0) {
//         return res
//           .status(400)
//           .json({ message: 'Название продукта не может быть пустым' });
//       }
//       if (quantity !== undefined && quantity <= 0) {
//         return res.status(400).json({ message: 'Количество должно быть больше 0' });
//       }

//       // Проверяем, принадлежит ли продукт пользователю
//       const product = await this.#service.getProductById(productId);
//       if (!product) {
//         return res.status(404).json({ message: 'Продукт не найден' });
//       }
//       if (product.userId !== userId) {
//         return res
//           .status(403)
//           .json({ message: 'Недостаточно прав для редактирования продукта' });
//       }

//       const productData = { name, quantity, expirationDate, categoryId };
//       const updatedRows = await this.#service.updateProduct(productId, productData);
//       if (updatedRows === 0) {
//         return res.status(404).json({ message: 'Продукт не найден' });
//       }
//       const updatedProduct = await this.#service.getProductById(productId);
//       res.status(200).json(updatedProduct);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при обновлении продукта',
//       });
//     }
//   };

//   // Удалить продукт
//   deleteProduct = async (req, res) => {
//     try {
//       const { productId } = req.params;
//       const userId = req.user.id;

//       // Проверяем, принадлежит ли продукт пользователю
//       const product = await this.#service.getProductById(productId);
//       if (!product) {
//         return res.status(404).json({ message: 'Продукт не найден' });
//       }
//       if (product.userId !== userId && !req.user.isAdmin) {
//         return res
//           .status(403)
//           .json({ message: 'Недостаточно прав для удаления продукта' });
//       }

//       const deletedRows = await this.#service.deleteProduct(productId);
//       if (deletedRows === 0) {
//         return res.status(404).json({ message: 'Продукт не найден' });
//       }
//       res.status(200).json({ message: 'Продукт успешно удалён' });
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при удалении продукта',
//       });
//     }
//   };

//   // Получить продукты пользователя
//   getUserProducts = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const { limit = 10, offset = 0 } = req.query;

//       const products = await this.#service.getProductsByUser(userId, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(products);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении продуктов пользователя',
//       });
//     }
//   };

//   // Получить продукты по категории
//   getProductsByCategory = async (req, res) => {
//     try {
//       const { categoryId } = req.params;
//       const { limit = 10, offset = 0 } = req.query;

//       const products = await this.#service.getProductsByCategory(categoryId, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(products);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении продуктов категории',
//       });
//     }
//   };

//   // Получить продукты с истекающим сроком годности
//   getExpiringProducts = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const { days = 7 } = req.query;

//       const products = await this.#service.getExpiringProducts(
//         userId,
//         parseInt(days, 10),
//       );
//       res.status(200).json(products);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении истекающих продуктов',
//       });
//     }
//   };

//   // Поиск продуктов по названию
//   searchProducts = async (req, res) => {
//     try {
//       const { q: searchTerm } = req.query;
//       const { limit = 10, offset = 0 } = req.query;

//       if (!searchTerm || searchTerm.trim().length < 3) {
//         return res
//           .status(400)
//           .json({ message: 'Строка поиска должна содержать минимум 3 символа' });
//       }

//       const products = await this.#service.searchProductsByName(searchTerm, {
//         limit: parseInt(limit, 10),
//         offset: parseInt(offset, 10),
//       });
//       res.status(200).json(products);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при поиске продуктов',
//       });
//     }
//   };
}

const productController = new ProductController(productService);

module.exports = productController;
