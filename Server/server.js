const express = require("express");
require("dotenv").config();
const cors = require("cors");
const DbConnect = require("./Config/Database");
const userRoute = require("./route/userRoute");

//Db Connection
DbConnect();

const app = express();

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/v1", userRoute);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log("Server is running");
});
