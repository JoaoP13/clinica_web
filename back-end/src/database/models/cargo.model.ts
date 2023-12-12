import { Model } from 'sequelize';

interface CargoAttributes {
    id: number;
    nome: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cargo extends Model<CargoAttributes>
        implements CargoAttributes {
        id!: number;
        nome!: string;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Cargo.hasMany(models.Funcionario, {
                foreignKey: 'id_cargo',
                as: 'cargo'
            });
        }
    }

    Cargo.init({
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
        modelName: 'Cargo',
        freezeTableName: true
    });
    return Cargo;
};
