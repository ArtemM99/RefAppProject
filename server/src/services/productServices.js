
const dbModels = require('../../db/models');

class ProductService {
  #db;

  constructor(db) {
    this.#db = db;
  }

  // Получить все продукты
  getAllProducts = async () => {
    const products = await this.#db.Product.findAll();
    return products;
  };

//   // Создать новый продукт
//   createProduct = async (productData) => {
//     const newProduct = await this.#db.Product.create(productData);
//     return newProduct;
//   };

//   // Получить продукт по ID
//   getProductById = async (id) => {
//     const product = await this.#db.Product.findByPk(id);
//     return product;
//   };

//   // Обновить продукт
//   updateProduct = async (id, productData) => {
//     const [updatedRows] = await this.#db.Product.update(productData, {
//       where: { id },
//     });
//     return updatedRows;
//   };

//   // Удалить продукт
//   deleteProduct = async (id) => {
//     const deletedRows = await this.#db.Product.destroy({
//       where: { id },
//     });
//     return deletedRows;
//   };

//   // Получить продукты пользователя
//   getProductsByUser = async (userId) => {
//     const products = await this.#db.Product.findAll({
//       where: { userId },
//     });
//     return products;
//   };

//   // Получить продукты по категории
//   getProductsByCategory = async (categoryId) => {
//     const products = await this.#db.Product.findAll({
//       where: { categoryId },
//     });
//     return products;
//   };

//   // Получить продукты с истекающим сроком годности
//   getExpiringProducts = async (userId, daysThreshold = 7) => {
//     const thresholdDate = new Date();
//     thresholdDate.setDate(thresholdDate.getDate() + daysThreshold);

//     const products = await this.#db.Product.findAll({
//       where: {
//         userId,
//         expirationDate: {
//           [this.#db.Sequelize.Op.lte]: thresholdDate, // Меньше или равно порогу
//         },
//       },
//     });
//     return products;
//   };

//   // Поиск продуктов по названию
//   searchProductsByName = async (searchTerm) => {
//     const products = await this.#db.Product.findAll({
//       where: {
//         name: {
//           [this.#db.Sequelize.Op.iLike]: `%${searchTerm}%`, 
//         },
//       },
//     });
//     return products;
//   };

//   // Получить продукт с информацией о пользователе и категории
//   getProductWithDetails = async (id) => {
//     const product = await this.#db.Product.findOne({
//       where: { id },
//       include: [
//         { model: this.#db.User, as: 'User' },
//         { model: this.#db.Category, as: 'Category' },
//       ],
//     });
//     return product;
//   };
}

const productService = new ProductService(dbModels);

module.exports = productService;
