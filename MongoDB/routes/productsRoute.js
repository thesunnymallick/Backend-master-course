const express = require('express');
const router = express.Router();
const productContoroller = require('../controllers/productsController');

router.post('/', productContoroller.createProduct);
router.get('/', productContoroller.getAllProducts);
router.get('/:id', productContoroller.getOneProduct);
router.delete('/:id', productContoroller.deleteProduct);
router.patch('/:id', productContoroller.updateProduct);

module.exports = { router };
