const sequelize = require('../util/database')
const { Sequelize, Op, Model, DataTypes } = require("sequelize");
module.exports =  ()=> {
    return sequelize.define('users', {
        firstName: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(100),
            length:12,
            unique: true,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            unique: false,
            allowNull: false
        }
    })
};