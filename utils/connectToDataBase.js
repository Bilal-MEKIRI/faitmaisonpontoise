const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoUri = process.env.MONGO_URI;

const connectToDB = async () => {
  try {
    await mongoose.connect(mongoUri, {
      dbName: "data",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to data base");
  } catch (error) {
    console.log("Connection to data base failed: ", error);
  }
};

module.exports = { connectToDB };
