const dotenv = require('dotenv');
const Product = require('./models/productModel');
const sampleProducts = require('./sampleData/sampleProducts');
const { connectToDB } = require('./db');

dotenv.config();

connectToDB();

async function loadSampleData() {
  try {
    await Product.deleteMany();
    await Product.insertMany(sampleProducts);
    console.log('Sample data loaded');
    process.exit();
  } catch (error) {
    console.log(`Failed to load sample data: ${error.message}`);
    process.exit(1);
  }
}

loadSampleData();
