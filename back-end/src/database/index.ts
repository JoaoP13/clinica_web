'use strict';

require('dotenv').config();
/* eslint-disable global-require */
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const currentDirectory = path.join(__dirname, '/models');
const configPath = path.join(__dirname, './config/config');
const env = process.env.NODE_ENV || 'development';
const useBuild = process.env.USE_BUILD || 'false';
const config = require(configPath)[env];
const db: any = {};

let sequelize: any;
if (config.use_env_variable) {
    sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
    sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
    .readdirSync(currentDirectory)
    .filter((file: string) => ((file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === (useBuild === 'true' ? '.js' : '.ts'))))
    .forEach((file: any) => {
        const model = require(path.join(currentDirectory, file))(sequelize, Sequelize.DataTypes);
        db[model.name] = model;
    });

Object.keys(db).forEach((modelName) => {
    if (db[modelName].associate) {
        db[modelName].associate(db);
    }
});

function auth() {
    try {
        sequelize.authenticate();
        // eslint-disable-next-line no-console
        console.log('Banco de dados conectado com sucesso!');
    } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
    }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default { db, auth };
