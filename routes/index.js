const express = require("express");
const multer = require("multer");
const { createArticle, getAllArticles } = require("../controllers/articleController");
const storage = multer.diskStorage({});
const upload = multer({ storage });
const router = express.Router();

router.post("/articles", upload.single("image"), createArticle);
router.get("/articles", getAllArticles); 
module.exports = router;
