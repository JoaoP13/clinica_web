'use strict';

/** @type {import('sequelize-cli').Migration} */
const Pessoa = require('./20231212034252-criando-tabela-pessoa')
const Endereco = require('./20231212225842-Endereco')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('EnderecoPessoa', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            idPessoa: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Pessoa',
                 key: 'id',
              },
              allowNull: false
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

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
