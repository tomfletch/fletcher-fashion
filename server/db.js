const mongoose = require('mongoose');

async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.log(`Failed to connect to MongoDB: ${error.message}`);
    process.exit(1);
  }
}

module.exports = {
  connectToDB
};
