const path = require('path');

const express = require('express');

const adminController = require('../controllers/admin');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', adminController.getAddProduct);

// /admin/edit-product => GET
router.get('/edit-product/:id', adminController.getEditProduct);

// /admin/delete-product => post
router.post('/delete-product/:id', adminController.postDeleteProduct);

// /admin/products => GET
router.get('/products', adminController.getProducts);

// /admin/add-product => POST
router.post('/add-product', adminController.postAddProduct);
router.post('/edit-product', adminController.postEditProduct);

module.exports = router;
