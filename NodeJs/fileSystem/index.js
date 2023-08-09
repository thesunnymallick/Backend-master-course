const fs = require('fs');

fs.readFile('demo.text', 'utf-8', (err, data) => {
  console.log(data);
});

fs.writeFile('demo.text', 'i am forntend developer', (err) => {
  if (err) throw err;
  console.log('This file save');
});
// fs.readFile('demo.text', 'utf-8', (err, data) => {
//   console.log(data);
// });
