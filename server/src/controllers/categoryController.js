const categoryService = require('../services/categoryServices');

class CategoryController {
  #service;

  constructor(service) {
    this.#service = service;
  }

  // Получить все категории
  getAllCategories = async (req, res) => {
    try {
      const categories = await this.#service.getAllCategories();
      res.status(200).json(categories);
    } catch (e) {
      console.error(e);
      res.status(500).json({
        message: e.message,
        text: 'Ошибка при получении списка категорий',
      });
    }
  };

//   // Создать новую категорию
//   createCategory = async (req, res) => {
//     try {
//       const { title, emoji, userId } = req.body;

//       if (!title || title.trim().length === 0) {
//         return res.status(400).json({ message: 'Название категории обязательно' });
//       }

//       const category = await this.#service.createCategory({ title, emoji, userId });
//       res.status(201).json(category);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при создании категории',
//       });
//     }
//   };

//   // Получить категорию по ID
//   getCategoryById = async (req, res) => {
//     try {
//       const category = await this.#service.getCategoryById(req.params.id);
//       if (!category) {
//         return res.status(404).json({ message: 'Категория не найдена' });
//       }
//       res.status(200).json(category);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении категории',
//       });
//     }
//   };

//   // Обновить категорию
//   updateCategory = async (req, res) => {
//     try {
//       const [updatedRows] = await this.#service.updateCategory(req.params.id, req.body);
//       if (updatedRows === 0) {
//         return res.status(404).json({ message: 'Категория не найдена' });
//       }
//       res.status(200).json({ message: 'Категория успешно обновлена' });
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при обновлении категории',
//       });
//     }
//   };

//   // Удалить категорию
//   deleteCategory = async (req, res) => {
//     try {
//       const deletedRows = await this.#service.deleteCategory(req.params.id);
//       if (deletedRows === 0) {
//         return res.status(404).json({ message: 'Категория не найдена' });
//       }
//       res.status(200).json({ message: 'Категория успешно удалена' });
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при удалении категории',
//       });
//     }
//   };

//   // Поиск категорий по названию
//   searchCategories = async (req, res) => {
//     try {
//       const { q: searchTerm } = req.query;

//       if (!searchTerm || searchTerm.trim().length < 2) {
//         return res
//           .status(400)
//           .json({ message: 'Строка поиска должна содержать минимум 2 символа' });
//       }

//       const categories = await this.#service.searchCategoriesByTitle(searchTerm);
//       res.status(200).json(categories);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при поиске категорий',
//       });
//     }
//   };

//   // Получить категорию с продуктами
//   getCategoryWithProducts = async (req, res) => {
//     try {
//       const category = await this.#service.getCategoryWithProducts(req.params.id);
//       if (!category) {
//         return res.status(404).json({ message: 'Категория не найдена' });
//       }
//       res.status(200).json(category);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении категории с продуктами',
//       });
//     }
//   };

//   // Получить категории пользователя с продуктами
//   getUserCategoriesWithProducts = async (req, res) => {
//     try {
//       const userId = req.user.id;
//       const categories = await this.#service.getUserCategoriesWithProducts(userId);
//       res.status(200).json(categories);
//     } catch (e) {
//       console.error(e);
//       res.status(500).json({
//         message: e.message,
//         text: 'Ошибка при получении категорий пользователя',
//       });
//     }
//   };
}

const categoryController = new CategoryController(categoryService);

module.exports = categoryController;
