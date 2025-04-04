

const dbModels = require('../../db/models');

class CategoryService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  // Получить все категории
  getAllCategories = async () => {
    const categories = await this.#db.Category.findAll();
    return categories;
  };

  // Создать новую категорию
  createCategory = async (categoryData) => {
    const newCategory = await this.#db.Category.create(categoryData);
    return newCategory;
  };

  // Получить категорию по ID
  getCategoryById = async (id) => {
    const category = await this.#db.Category.findByPk(id);
    return category;
  };

  // Обновить категорию
  updateCategory = async (id, categoryData) => {
    const [updatedRows] = await this.#db.Category.update(categoryData, {
      where: { id },
    });
    return updatedRows;
  };

  // Удалить категорию
  deleteCategory = async (id) => {
    const deletedRows = await this.#db.Category.destroy({
      where: { id },
    });
    return deletedRows;
  };

  

  // Поиск категорий по названию
  searchCategoriesByTitle = async (searchTerm) => {
    const categories = await this.#db.Category.findAll({
      where: {
        title: {
          [this.#db.Sequelize.Op.iLike]: `%${searchTerm}%`, // Поиск без учета регистра
        },
      },
    });
    return categories;
  };

  // Получить категорию с продуктами
  getCategoryWithProducts = async (id) => {
    const category = await this.#db.Category.findOne({
      where: { id },
      include: [{ model: this.#db.Product, as: 'Products' }],
    });
    return category;
  };

  // Получить все категории с продуктами пользователя
  getUserCategoriesWithProducts = async (userId) => {
    const categories = await this.#db.Category.findAll({
      where: { userId },
      include: [{ model: this.#db.Product, as: 'Products' }],
    });
    return categories;
  };
}

const categoryService = new CategoryService(dbModels);

module.exports = categoryService;