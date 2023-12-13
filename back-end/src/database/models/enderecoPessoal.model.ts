import { Model } from 'sequelize';

interface EnderecoPessoalAttributes {
    id: number;
    idEndereco: number;
    idPessoa: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class EnderecoPessoal extends Model<EnderecoPessoalAttributes>
        implements EnderecoPessoalAttributes {
        id!: number;
        idEndereco!: number;
        idPessoa!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            EnderecoPessoal.belongsTo(models.Pessoa, {
                foreignKey: 'idPessoa',
                as: 'Pessoa'
            });

            EnderecoPessoal.belongsTo(models.Endereco, {
                foreignKey: 'idEndereco',
                as: 'Endereco'
            });

        }
    }

    EnderecoPessoal.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idEndereco: {
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
        modelName: 'EnderecoPessoa',
        freezeTableName: true
    });
    return EnderecoPessoal;
};
