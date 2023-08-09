const express = require('express');
const app = express();

const { json } = require('body-parser');
const fs = require('fs');

const { products } = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

app.use(express.json());

// 1)post request create
app.post('/products', (req, res) => {
  const product = req.body;
  products.push(req.body);
  res.status(201).send('products create successfully!');
});
//2) Get request read
app.get('/products', (req, res) => {
  res.status(200).json(products);
});
// find particular product
app.get('/products/:id', (req, res) => {
  const id = +req.params.id;
  const product = products.find((item) => item.id === id);
  res.status(200).json(product);
});

//3) put request --update data

app.put('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
});

app.patch('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
});

app.delete('/products/:id', (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((item) => item.id === id);
  products.splice(productIndex, 1);
  res.status(201).send('delete product');
});

app.listen(8080, (req, res) => {
  console.log(`port listening is ${8080}`);
});
