const mongoose = require("mongoose");

const DbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to DataBase");
  } catch (error) {
    console.log("Error while connecting to Database", error);
  }
};

module.exports = DbConnect;
