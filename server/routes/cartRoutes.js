const express = require('express');
const Product = require('../models/productModel');

const router = express.Router();

router.put('/', async (req, res) => {
  const cartItems = req.body.items;
  const productIds = cartItems.map((item) => item.productId);

  const products = await Product.find({
    '_id': { $in: productIds }
  });

  const productPrices = {};

  products.forEach((product) => {
    productPrices[product._id] = product.discountPrice || product.price;
  })

  const totalPrice = cartItems.reduce((acc, item) => acc + productPrices[item.productId] * item.quantity, 0);
  res.json({ totalPrice });
});

module.exports = router;
