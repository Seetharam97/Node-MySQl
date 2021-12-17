const { Sequelize } = require('sequelize');

const dataBase = new Sequelize("test", "root", "admin@123",{
    host: 'localhost',
    dialect: 'mysql',
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

module.exports = dataBase;