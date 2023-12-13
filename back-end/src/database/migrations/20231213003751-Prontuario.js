'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Prontuario', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            anamnese: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            medicamentosAdministrados: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            pressaoArterial: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            glicemia: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            peso: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            altura: {
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

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.dropTable('Prontuario');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },
};
