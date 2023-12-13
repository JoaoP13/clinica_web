import { Model } from 'sequelize';

interface ProntuarioAttributes {
    id: number;
    anamnese: string;
    medicamentosAdministrados: string;
    pressaoArterial: number;
    glicemia: number;
    peso: number;
    altura: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Prontuario extends Model<ProntuarioAttributes>
        implements ProntuarioAttributes {
        id!: number;
        anamnese!: string;
        medicamentosAdministrados!: string;
        pressaoArterial!: number;
        glicemia!: number;
        peso!: number;
        altura!: number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {
            Prontuario.hasMany(models.Prontuario, {
                foreignKey: 'id',
                as: 'Prontuario'
            });
        }
    }

    Prontuario.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        anamnese: {
            type: DataTypes.STRING,
            allowNull: false
        },
        medicamentosAdministrados: {
            type: DataTypes.STRING,
            allowNull: true
        },
        pressaoArterial: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        glicemia: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        peso: {
            type: DataTypes.INTEGER,
            allowNull: true
        },
        altura: {
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
        modelName: 'Prontuario',
        freezeTableName: true
    });
    return Prontuario;
};
