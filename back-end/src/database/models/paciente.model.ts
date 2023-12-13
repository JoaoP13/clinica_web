import { Model } from 'sequelize';

interface PacienteAttributes {
    id: number;
    idProntuario: number;
    idPessoa: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Paciente extends Model<PacienteAttributes>
        implements PacienteAttributes {
        id!: number;
        idProntuario!: number;
        idPessoa!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Paciente.belongsTo(models.Pessoa, {
                foreignKey: 'idPessoa',
                as: 'Pessoa'
            });

            Paciente.belongsTo(models.Prontuario, {
                foreignKey: 'idProntuario',
                as: 'Prontuario'
            });

        }
    }

    Paciente.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idProntuario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idPessoa: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        sequelize,
        timestamps: true,
        paranoid: true,
        modelName: 'Paciente',
        freezeTableName: true
    });
    return Paciente;
};
