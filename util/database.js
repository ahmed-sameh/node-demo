const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-demo', 'root', '357159', {dialect: 'mysql', host: 'localhost'})

module.exports = sequelize