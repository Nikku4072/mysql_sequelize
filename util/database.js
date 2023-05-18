const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-complete', 'root', 'nikku@4072', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
