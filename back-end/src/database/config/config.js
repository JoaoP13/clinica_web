require('dotenv').config();

module.exports = {
    development: {
        database: 'ClinicDataBase',
        username: 'postgres',
        password: '1997',
        host: 'localhost',
        dialect: 'postgresql',
        seederStorage: 'sequelize',
        seederStorageTableName: 'SeedersMeta'
    },
    production: {
        database: process.env.PSQL_DATABASE_PROD,
        username: process.env.PSQL_DATABASE_USER_PROD,
        password: process.env.PSQL_DATABASE_PASSWORD_PROD,
        host: process.env.PSQL_DATABASE_HOST_PROD,
        dialect: 'postgresql',
        seederStorage: 'sequelize',
        seederStorageTableName: 'SeedersMeta'
    }
};
