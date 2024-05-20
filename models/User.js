const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const User = sequelize.define(
  "User",
  {
    UserID: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    NickName: {
      type: DataTypes.STRING(50),
      allowNull: true, // Apenas no Servidor Principal
    },
  },
  {
    timestamps: false,
  }
);

module.exports = User;
