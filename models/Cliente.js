const Sequelize = require("sequelize")
const database = require("../database/index")

const Cliente = database.define('clientes', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },

    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    }

}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Cliente