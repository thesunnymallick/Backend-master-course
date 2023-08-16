require('dotenv').config();
const express = require('express');
const server = express();
const ProductRouter = require('./routes/productsRoute');
const mongoose = require('mongoose');
server.use(express.json());
server.use('/products', ProductRouter.router);

// mongoDB connect
const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URL);
    console.log(`connection sucessfuly ${process.env.DB_URL}`);
  } catch (error) {
    console.log(error);
    console.log(`connection mongoDB failed !!`);
  }
};
connectMongoDB();

// server start in local host
server.listen(process.env.PORT, () => {
  console.log(`Server listen in  http://localhost:${process.env.PORT}`);
});
