const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./config");
const taskRoutes = require("./routes/taskRoutes");
require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
connectDB();

app.use("/api/task", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    
})