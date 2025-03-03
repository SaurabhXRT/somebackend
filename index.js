const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger-output.json");
require("dotenv").config();
const { connectDB } = require("./config/db");
const articleRoutes = require("./routes/index");
const app = express();
const port = 3000;
connectDB();
app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

app.use("/", articleRoutes);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})