const express = require('express');
const app = express();
const port = 8080;

const Routes = require('./route');
const db = require('./config/database');
const mongoose = require('mongoose');
app.use(express.json());

db.connectDB('mongodb://127.0.0.1:27017/commerce_database');

// Router app
Routes(app);

app.listen(port, () => {
  console.log(`App listenning on port ${port} ...`);
})