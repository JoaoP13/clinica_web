'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();
    try {
        await queryInterface.createTable('Consulta', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            idMedico: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Medico',
                 key: 'id',
              }
            },
            dataConsulta: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            horarioConsulta: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
            idPaciente: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Paciente',
                 key: 'id',
              }
            },
            idEspecialidade: {
              type: Sequelize.INTEGER,
              references: {
                 model: 'Especialidade',
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
        Consulta.hasMany(Paciente);
        Consulta.hasMany(Especialidade);
        Consulta.hasMany(Clinica);

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
