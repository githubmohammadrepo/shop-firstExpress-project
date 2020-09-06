const sequelize = require('./../util/database')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
module.exports = () => {
  return sequelize.define('orders', {
    qty: {
      type: DataTypes.INTEGER,
      unique: false,
      allowNull: false
    }
  })
};