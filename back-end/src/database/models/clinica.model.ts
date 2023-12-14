import { Model } from 'sequelize';

interface ClinicaAttributes {
    id: number;
    nome: string;
    idEndereco: number;
    telefone: number;
    cnpj:number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Clinica extends Model<ClinicaAttributes>
        implements ClinicaAttributes {
        id!: number;
        nome!: string;
        idEndereco!: number;
        telefone!: number;
        cnpj!:number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {

            Clinica.belongsTo(models.Endereco, {
                foreignKey: 'id',
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
        idEndereco: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        telefone: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        cnpj: {
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
