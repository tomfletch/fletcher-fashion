const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

router.get('/:productId', async (req, res) => {
  const products = await Product.findById(req.params.productId);
  res.json(products);
});

module.exports = router;
