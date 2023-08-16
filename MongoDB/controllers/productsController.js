const model = require('../model/productsModel');
const Product = model.Product;
const createProduct = async (req, res) => {
  // Craete product
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(req.body);
};
const getAllProducts = (req, res) => {
  res.send('Send all products');
};

module.exports = { createProduct, getAllProducts };
