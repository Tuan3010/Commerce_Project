const mongoose = require('mongoose');
const {faker} = require('@faker-js/faker');

const UserSchema = new mongoose.Schema({
  username: String,
  email: String,
  age: Number
});

