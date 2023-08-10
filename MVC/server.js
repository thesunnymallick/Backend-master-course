const express = require('express');
const app = express();
const productRouter = require('./Routes/productRoute');

app.use(express.json());
app.use('/products', productRouter.router);

app.listen(8000, (req, res) => {
  console.log(`port listening is ${8000}`);
});
