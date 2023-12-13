'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Endereco', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            logradouro: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            complemento: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            bairro: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            cidade: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            estado: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            nomeEndereco: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },

            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            deletedAt: {
                type: Sequelize.DATE,
                allowNull: true,
            }
        });

    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.dropTable('Endereco');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },
};
