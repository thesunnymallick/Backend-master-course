const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Server request');
  res.setHeader('Content-type', 'text/html');
  res.end('hello');
});

server.listen(8080, () => {
  console.log(`server running port${8080}`);
});
