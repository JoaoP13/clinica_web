import { Model } from 'sequelize';

interface EspecialidadeAttributes {
    id: number;
    idProntuario: number;
    idPessoa: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Especialidade extends Model<EspecialidadeAttributes>
        implements EspecialidadeAttributes {
        id!: number;
        idProntuario!: number;
        idPessoa!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Especialidade.belongsTo(models.Pessoa, {
                foreignKey: 'idPessoa',
                as: 'Pessoa'
            });

            Especialidade.belongsTo(models.Prontuario, {
                foreignKey: 'idProntuario',
                as: 'Prontuario'
            });

        }
    }

    Especialidade.init({
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
        modelName: 'Especialidade',
        freezeTableName: true
    });
    return Especialidade;
};
