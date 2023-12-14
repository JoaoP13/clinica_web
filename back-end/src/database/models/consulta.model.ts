import { Model } from 'sequelize';

interface ConsultaAttributes {
    id: number;
    dataConsulta: string;
    idPaciente: number;
    idEspecialidade:number;
    idMedico:number;
    idClinica:number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Consulta extends Model<ConsultaAttributes>
        implements ConsultaAttributes {
        id!: number;
        dataConsulta!: string;
        idPaciente!: number;
        idEspecialidade!:number;
        idMedico!:number;
        idClinica!:number;
        createdAt!: Date;
        updatedAt!: Date;
        deletedAt!: Date;

        static associate(models: any) {

            Consulta.belongsTo(models.Endereco, {
                foreignKey: 'id',
                as: 'endereco'
            });
        }
    }

    Consulta.init({
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        dataConsulta: {
            type: DataTypes.STRING,
            allowNull: false
        },
        idPaciente: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idEspecialidade: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idMedico: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        idClinica: {
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
        modelName: 'Consulta',
        freezeTableName: true
    });
    return Consulta;
};
