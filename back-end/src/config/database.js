const mongoose = require('mongoose');

function connectDB(url) {
  try {
    mongoose.connect(url);
    console.log(`Connect successful !`);
  } catch (error) {
    console.log(`Error connect to mongoDB ! ${error}`);
  }
}

module.exports = { connectDB };