const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
    logging: false, 
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Connected to CockroachDB successfully!");
        await sequelize.sync({ alter: true});
        console.log("Database synced successfully!");
    } catch (error) {
        console.error("Unable to connect to CockroachDB:", error);
    }
};

module.exports = { sequelize, connectDB };
