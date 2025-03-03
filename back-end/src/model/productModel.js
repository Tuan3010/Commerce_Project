import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  price: String,
  description: String,
  date: { type: Date, default: Date.now },
  meta: {
    votes: Number,
    favs: Number
  }
});