'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        const transaction = await queryInterface.sequelize.transaction();
        try {
            await queryInterface.createTable('Pessoa', {
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
                email: {
                    type: Sequelize.STRING(150),
                    allowNull: false,
                },
                data_nascimento: {
                    type: Sequelize.DATE,
                    allowNull: false,
                },
                senha: {
                  type: Sequelize.STRING(150),
                  allowNull: false,
               },
               telefone: {
                type: Sequelize.STRING(150),
                allowNull: false},
               cpf: {
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

            await queryInterface.addConstraint('Pessoa', {
                fields: ['email'],
                type: 'unique',
                name: 'unique_email_key',
            }, { transaction });

            await queryInterface.addConstraint('Pessoa', {
                fields: ['cpf'],
                type: 'unique',
                name: 'unique_cpf_key',
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
            await queryInterface.removeConstraint('Pessoa', 'unique_email_key');
            await queryInterface.dropTable('Pessoa');
            await transaction.commit();
        } catch (error) {
            await transaction.rollback();
            throw error;
        }
    },
};
