'use strict';

/** @type {import('sequelize-cli').Migration} */
const Cargo = require('./20231212192628-Cargo')
const Clinica = require('./20231213004527-Clinica')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Funcionario', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            salario: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            idPessoa: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Pessoa',
                 key: 'id',
              }
            },
            idCargo: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Cargo',
                 key: 'id',
              }
            },
            idClinica: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Clinica',
                 key: 'id',
              }
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
