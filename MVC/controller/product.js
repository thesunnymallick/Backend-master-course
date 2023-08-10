const fs = require('fs');
const { products } = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

const createProduct = (req, res) => {
  const product = req.body;
  products.push(product);
  res.status(201).send('products create successfully!');
};

const getAllProducts = (req, res) => {
  res.status(200).json(products);
};

const getProduct = (req, res) => {
  const id = +req.params.id;
  const product = products.find((item) => item.id === id);
  res.status(200).json(product);
};

const replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

const updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
};

const deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1);
  res.status(201).send('delete product');
};

module.exports = {
  createProduct,
  getProduct,
  getAllProducts,
  replaceProduct,
  updateProduct,
  deleteProduct,
};
