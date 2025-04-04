'use strict';

const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
      // define association here
    }
  }
  Recipe.init(
    {
      title: DataTypes.STRING,
      ingredients: DataTypes.STRING,
      instructions: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Recipe',
    },
  );
  return Recipe;
};
