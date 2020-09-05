const { Sequelize, Op, Model, DataTypes } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'mysql',
    username: 'root',
    password: '',
    host: 'localhost',
    database: 'nodejs-first'
});

module.exports = sequelize;

// class User extends Model { }
// User.init({
//     username: DataTypes.STRING,
//     birthday: DataTypes.DATE
// }, { sequelize, modelName: 'user' });

// (async () => {
//     try {
//         await sequelize.authenticate();
//         console.log('Connection has been established successfully.');
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
//     await sequelize.sync();
//     const jane = await User.create({
//         username: 'janedoe',
//         birthday: new Date(1980, 6, 20)
//     });
//     console.log(jane.toJSON());
// })();

