const model = require('../model/productsModel');
const Product = model.Product;

const createProduct = async (req, res) => {
  // Craete product
  try {
    const product = new Product(req.body);
    await product.save();
    console.log('product create suceesfully');
    res.status(201).json(req.body);
  } catch (error) {
    res.status(401).json(error);
  }
};
const getAllProducts = async (req, res) => {
  try {
    const data = await Product.find();
    res.status(200).josn(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

const getOneProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findById(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await Product.findByIdAndDelete(id);
    res.status(200).json(data);
  } catch (error) {
    res.status(401).json(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    const id = req.params.id;
    const resultUpdate = await Product.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(resultUpdate);
  } catch (error) {
    res.status(400).json(error);
  }
};

module.exports = { createProduct, getAllProducts, getOneProduct, deleteProduct, updateProduct };
