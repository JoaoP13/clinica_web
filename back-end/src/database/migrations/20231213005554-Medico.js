'use strict';

/** @type {import('sequelize-cli').Migration} */
const Especialidade = require('./20231213001520-Especialidade')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Medico', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            idEspecialidade: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Especialidade',
                 key: 'id',
              }
            },
            crm: {
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
        

        await queryInterface.addConstraint('Medico', {
            fields: ['crm'],
            type: 'unique',
            name: 'unique_crm_key',
        }, { transaction });

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
