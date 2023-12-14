'use strict';

/** @type {import('sequelize-cli').Migration} */
const Prontuario = require('./20231213003751-Prontuario')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Clinica', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            idEndereco: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Endereco',
                 key: 'id',
              }
            },
            nome: {
                type: Sequelize.STRING(150),
                allowNull: false,
            },
            telefone: {
              type: Sequelize.STRING,
              allowNull: false,
            },
            cnpj: {
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
        

        await queryInterface.addConstraint('Clinica', {
          fields: ['cnpj'],
          type: 'unique',
          name: 'unique_cnpj_key',
        }, { transaction });

        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },

  down: async (queryInterface) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.removeConstraint('Clinica', 'unique_cnpj_key');
        await queryInterface.dropTable('Clinica');
        await transaction.commit();
    } catch (error) {
        await transaction.rollback();
        throw error;
    }
  },
};
