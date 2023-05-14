const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/productModel');
const { connectToDB } = require('./db');

dotenv.config();

connectToDB();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Fletcher Fashion API" });
});

app.get("/api/products", async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

app.get("/api/products/:productId", async (req, res) => {
  const products = await Product.findById(req.params.productId);
  res.json(products);
});

app.put("/api/cart", async (req, res) => {
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

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('**', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
