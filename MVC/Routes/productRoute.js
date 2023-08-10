const express = require('express');
const router = express.Router();
const productContoroller = require('../controller/product');

router.post('/', productContoroller.createProduct);
router.get('/', productContoroller.getAllProducts);
router.get('/:id', productContoroller.getProduct);
router.put('/:id', productContoroller.replaceProduct);
router.patch('/:id', productContoroller.updateProduct);
router.delete('/:id', productContoroller.deleteProduct);

module.exports = { router };
