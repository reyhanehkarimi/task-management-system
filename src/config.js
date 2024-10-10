//connect to MongoDB

const mongoose = require("mongoose");

const DB_URI = process.env.DB_URI;

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        console.log("MongoDB Connected");
        
    } catch (error) {
        console.log("MongoDB connection error:" , error);
        process.exit(1)
        
    }
}

module.exports = { connectDB }