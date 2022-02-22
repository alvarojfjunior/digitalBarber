const Sequelize = require("sequelize")
const database = require("../database/index")

const Agendamento = database.define('agendamentos', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },

    cliente_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    horario: {
        type: Sequelize.DATE,
        allowNull: false
    }, 

    created_at: {
        allowNull: false,
        type: Sequelize.DATE,
    },

    updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
    },
}, 
{
    timeStamps: false,
    createdAt: false,
    updatedAt: false
})

module.exports = Agendamento