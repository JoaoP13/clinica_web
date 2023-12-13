'use strict';

/** @type {import('sequelize-cli').Migration} */
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
            data_nascimento: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            telefone: {
              type: Sequelize.INTEGER,
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
        Clinica.hasMany(Endereco);

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
