'use strict';

/** @type {import('sequelize-cli').Migration} */
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
        Funcionario.hasMany(Cargo);
        Funcionario.hasMany(Clinica);

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
