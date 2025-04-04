'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({User, Category}) {
      this.belongsTo(User, {foreignKey: 'userId'})
      this.belongsTo(Category, {foreignKey: 'categoryId'})
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    quantity: DataTypes.INTEGER,
    expirationDate: DataTypes.DATE,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};