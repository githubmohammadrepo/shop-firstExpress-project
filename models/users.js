const sequelize = require('./../util/database')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
module.exports =  ()=> {
    return sequelize.define('users', {
        title: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        imageUrl: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        price: {
            type: DataTypes.DOUBLE,
            unique: false,
            allowNull: true
        },
        description: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: true
        }
    })
};