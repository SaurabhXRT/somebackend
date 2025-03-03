const { DataTypes, Model } = require("sequelize");
const { sequelize } = require("../config/db");

class Article extends Model {}

Article.init(
    {
        article_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        image: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    },
    {
        sequelize, 
        modelName: "Article",
        timestamps: true, 
    }
);

module.exports = Article;
