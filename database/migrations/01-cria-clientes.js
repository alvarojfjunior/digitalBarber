module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.createTable("clientes", {
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
        return queryInterface.dropTable("clientes");
    },
};
