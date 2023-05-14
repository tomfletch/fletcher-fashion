const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const { connectToDB } = require('./db');

dotenv.config();

connectToDB();

const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());

app.get('/api', (req, res) => {
  res.json({ message: 'Fletcher Fashion API' });
});

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

app.get('**', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
