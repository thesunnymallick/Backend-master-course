const http = require('http');

const fs = require('fs');

const data = fs.readFileSync('./data.json', 'utf-8');
const dataObj = JSON.parse(data);
const product = dataObj.products[0];

const indexData = fs.readFileSync('./index.html', 'utf-8');

const server = http.createServer((req, res) => {
  console.log('Server request');
  res.setHeader('Content-type', 'text/html');
  let staticIndexData = indexData
    .replace('**title**', product.title)
    .replace('**url**', product.thumbnail)
    .replace('**price**', product.price)
    .replace('**rating**', product.rating);
  res.end(staticIndexData);
});

server.listen(8000, () => {
  console.log(`server running port${8000}`);
});
