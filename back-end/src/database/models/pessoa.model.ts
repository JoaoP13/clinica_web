import { Model } from 'sequelize';

interface PessoaAttributes {
    id: number;
    nome: string;
    email: Date;
    data_nascimento: Date;
    senha: string;
    telefone: string;
    cpf: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Pessoa extends Model<PessoaAttributes>
        implements PessoaAttributes {
        id!: number;
        nome!: string;
        email!: Date;
        data_nascimento!: Date;
        senha!: string;
        telefone!: string;
        cpf!: string;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Pessoa.hasMany(models.Funcionario, {
                foreignKey: 'id',
                as: 'funcionario'
            });
        }
    }

    Pessoa.init({
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
        email: {
            type: DataTypes.DATE,
            allowNull: true
        },
        data_nascimento: {
            type: DataTypes.DATE,
            allowNull: true
        },
        senha: {
            type: DataTypes.STRING,
            allowNull: false
        },
        telefone: {
            type: DataTypes.STRING,
            allowNull: true
        },
        cpf: {
            type: DataTypes.STRING,
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
        modelName: 'Pessoa',
        freezeTableName: true
    });
    return Pessoa;
};
