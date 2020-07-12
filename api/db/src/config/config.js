require('dotenv').config();

module.exports = {

  "development": {
    "username": "gaurimadhok",
    "password": null,
    "database": "tech_student_resources",
    "host": "127.0.0.1",
    "dialect": "postgres",

    // Use a different storage type. Default: sequelize
    "migrationStorage": "json",

    // Use a different file name. Default: sequelize-meta.json
    "migrationStoragePath": "migrationHistory.json",
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "tech_student_resources_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_NAME,
    "host": process.env.DB_HOST,
    "dialect": "postgres"
  }
};
