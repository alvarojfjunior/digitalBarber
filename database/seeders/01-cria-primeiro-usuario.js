module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('clientes', [{
            nome: 'Álvaro',
            telefone: '38991611042',
            email: 'example@example.com',
            created_at: new Date(),
            updated_at: new Date()
        }]);
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('clientes', null, {});
    }
};