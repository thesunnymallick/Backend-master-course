const express = require('express');
const router = express.Router();
const productContoroller = require('../controllers/productsController');

router.post('/', productContoroller.createProduct);
router.get('/', productContoroller.getAllProducts);

module.exports = { router };
