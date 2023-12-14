
import { Model } from 'sequelize';

interface MedicoAttributes {
    id: number;
    idEspecialidade: number;
    crm: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Medico extends Model<MedicoAttributes>
        implements MedicoAttributes {
        id!: number;
        idEspecialidade!: number;
        crm!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Medico.belongsTo(models.Especialidade, {
                foreignKey: 'id',
                as: 'especialidade'
            });
        }
    }

    Medico.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        idEspecialidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        crm: {
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
        modelName: 'Medico',
        freezeTableName: true
    });
    return Medico;
};
