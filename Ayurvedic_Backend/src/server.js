// server.js

const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose"); // Import mongoose
const app = require('./app'); // Import app from app.js
const PORT = process.env.PORT || 8070;

const serverApp = express();

serverApp.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {}) // Use mongoose connect function
  .then(() => {
    console.log("MongoDB Connection success!");
    serverApp.use(app); // Use the imported app
    serverApp.listen(PORT, () => {
      console.log(`Server is up and running on port number: ${PORT}`);
    });
  })
  .catch(err => console.error(err));
