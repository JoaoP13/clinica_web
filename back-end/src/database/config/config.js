require('dotenv').config();

module.exports = {
    development: {
        database: process.env.PSQL_DATABASE_DEV,
        username: process.env.PSQL_DATABASE_USER_DEV,
        password: process.env.PSQL_DATABASE_PASSWORD_DEV,
        host: process.env.PSQL_DATABASE_HOST_DEV,
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
