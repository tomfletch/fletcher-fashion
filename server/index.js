const express = require("express");
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/productModel');
const { connectToDB } = require('./db');

dotenv.config();

connectToDB();

const PORT = process.env.PORT || 4000;

const app = express();

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

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('**', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
