import { Model } from 'sequelize';

interface FuncionarioAttributes {
    id: number;
    salario: number;
    id_cargo: number;
    id_clinica: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Funcionario extends Model<FuncionarioAttributes>
        implements FuncionarioAttributes {
        id!: number;
        salario!: number;
        id_cargo!: number;
        id_clinica!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Funcionario.belongsTo(models.Pessoa, {
                foreignKey: 'id',
                as: 'pessoa'
            });

            Funcionario.belongsTo(models.Cargo, {
                foreignKey: 'id_cargo',
                as: 'cargo'
            });

            Funcionario.belongsTo(models.Clinica, {
                foreignKey: 'id_clinica',
                as: 'clinica'
            });
        }
    }

    Funcionario.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        salario: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        id_cargo: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        id_clinica: {
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
        modelName: 'Funcionario',
        freezeTableName: true
    });
    return Funcionario;
};
