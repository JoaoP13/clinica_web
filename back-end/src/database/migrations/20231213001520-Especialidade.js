'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Especialidade', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            nome: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            valorConsulta: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            percentualMedico: {
                type: Sequelize.INTEGER,
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
        await queryInterface.dropTable('Especialidade');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },
};
