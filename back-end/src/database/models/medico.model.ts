
import { Model } from 'sequelize';

interface MedicoAttributes {
    id: number;
    crm: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Medico extends Model<MedicoAttributes>
        implements MedicoAttributes {
        id!: number;
        crm!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Medico.hasMany(models.Especialidade, {
                foreignKey: 'id_especialidade',
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
