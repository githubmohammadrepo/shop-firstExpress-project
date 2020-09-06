const sequelize = require('./../util/database')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
module.exports =  ()=> {
    return sequelize.define('products', {
        title: {
            type: DataTypes.STRING(100),
            unique: true,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            unique: false,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    })
};