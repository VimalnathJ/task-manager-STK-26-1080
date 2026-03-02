const mongoose = require("mongoose");

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.Mongo_URL);
        console.log("MongoDB connected");
    }

    catch (error) {
        console.error("Database not connected : ", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;