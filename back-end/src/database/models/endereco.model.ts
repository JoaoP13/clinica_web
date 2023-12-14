import { Model } from 'sequelize';

interface EnderecoAttributes {
    id: number;
    nomeEndereco: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Endereco extends Model<EnderecoAttributes>
        implements EnderecoAttributes {
        id!: number;
        nomeEndereco!: string;
        logradouro!: string;
        complemento!: string;
        bairro!: string;
        cidade!: string;
        estado!: string;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Endereco.hasMany(models.Clinica, {
                foreignKey: 'id',
                as: 'endereco'
            });
        }
    }

    Endereco.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        nomeEndereco: {
            type: DataTypes.STRING,
            allowNull: false
        },
        logradouro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        complemento: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bairro: {
            type: DataTypes.STRING,
            allowNull: false
        },
        cidade: {
            type: DataTypes.STRING,
            allowNull: false
        },
        estado: {
            type: DataTypes.STRING,
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
        modelName: 'Endereco',
        freezeTableName: true
    });
    return Endereco;
};
