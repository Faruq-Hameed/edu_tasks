
const mongoose = require('mongoose')
const MONGODB_URL = process.env.MONGODB_URL
const startServer = async (app) => {
    mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Connected to database successfully");
    })
    .catch((err) => {
      console.log("Error starting the server because: " + err.message);
    });
};

module.exports = startServer
