const mongoose = require('mongoose');
const { Schema } = mongoose;
// define schema
const productSchema = new Schema({
  title: String,
  description: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  category: String,
  thumbnail: String,
  images: [String],
});

const Product = mongoose.model('Product', productSchema);

module.exports = { Product };
