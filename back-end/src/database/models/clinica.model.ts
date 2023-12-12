import { Model } from 'sequelize';

interface ClinicaAttributes {
    id: number;
    nome: string;
    id_endereco: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Clinica extends Model<ClinicaAttributes>
        implements ClinicaAttributes {
        id!: number;
        nome!: string;
        id_endereco!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Clinica.hasMany(models.Funcionario, {
                foreignKey: 'id_clinica',
                as: 'funcionario'
            });

            Clinica.belongsTo(models.Endereco, {
                foreignKey: 'id_endereco',
                as: 'endereco'
            });
        }
    }

    Clinica.init({
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
        id_endereco: {
            type: DataTypes.INTEGER,
            allowNull: false
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
        modelName: 'Clinica',
        freezeTableName: true
    });
    return Clinica;
};
