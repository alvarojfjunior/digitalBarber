const Sequelize = require('sequelize');
const sequelize = new Sequelize('digital_barber', 'root', '', {
  dialect: 'mysql', host: 'localhost'
});

module.exports = sequelize;