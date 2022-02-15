"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("agendamentos", {
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
        });
    },

    down: async (queryInterface) => {
        return queryInterface.dropTable("agendamentos");
    },
};
