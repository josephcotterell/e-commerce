const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    id: {
      type: DataTypes_INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    category_name: {
      type: DataTypes_STRING,
      allowNull: false,
    },
  },

  {
    sequelize,
    timestamps: true,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
