import { Model } from 'sequelize';

interface EspecialidadeAttributes {
    id: number;
    nome: string;
    valorConsulta: number;
    percentualMedico: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Especialidade extends Model<EspecialidadeAttributes>
        implements EspecialidadeAttributes {
        id!: number;
        nome!: string;
        valorConsulta!: number;
        percentualMedico!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

    }

    Especialidade.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valorConsulta: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        percentualMedico: {
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
        modelName: 'Especialidade',
        freezeTableName: true
    });
    return Especialidade;
};
