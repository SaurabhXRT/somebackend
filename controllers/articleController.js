const Article = require("../models/Article");
const cloudinary = require("cloudinary");
require("dotenv").config();
cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});
const createArticle = async (req, res) => {
    try {
        const { title, description } = req.body;
        const file = req.file.path;
        if (!title || !description) {
            return res.status(400).json({ message: "All fields are required!" });
        }

        const result = await cloudinary.uploader.upload(file, {
            folder: "satyagraha/articleimage",
        });


        await Article.create({
            title,
            image: result.secure_url,
            description
        });

        return res.status(201).json({
            message: "Article created successfully!",
        });
    } catch (error) {
        console.error("Error creating article:", error.message);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

const getAllArticles = async (req, res) => {
    try {
        const articles = await Article.findAll({
            order: [["createdAt", "DESC"]],
        });

        return res.status(200).json({
            message: "Articles fetched successfully!",
            data: articles
        });
    } catch (error) {
        console.error("Error fetching articles:", error.message);
        return res.status(500).json({
            message: "Internal server error",
            error: error.message
        });
    }
};

module.exports = { createArticle, getAllArticles };
