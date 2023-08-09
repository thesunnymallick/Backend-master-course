const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

// Send data via URL in Query String
// This is easiest method to send data and mostly used in GET request.

// When you have URL with ?name=Youstart&subject=express at end, it translates in a query string. In query string each key,value pair is separated by = and between 2 such pairs we put &.

// To read such data in express you can use req.query

// 1)Try to call this API in your browser http://localhost:8080/demo?name=Youstart - this will return a response of req.query JSON object
app.get('/', (req, res) => {
  if (req.query) {
    res.send('ok i got data');
  }
});

// 2)Create 3 query parameters name, age, subject with some values. Check the final output of req.query - can you find all data on server side. Can you send it back to client via res object
app.get('/demo', (req, res) => {
  if (req.query) {
    res.json(req.query);
  }
});

// 2. Send data via Request Params

// In this method you can have a URL with url path like /Youstart/express at end it translates in a param string. In param part string each value is separated by /. As you can see that URL only contains value not the key part of data. key part is decided by the endpoint definition at express server

// 2)Try to call this API in your browser http://localhost:8080/demo/Youstart/Express - this will return a response of req.params JSON object

app.get('/demo/:youStart', (req, res) => {
  console.log(req.params);
});

// Create 3 URL params name, age, subject . Call the URL and check the final output of req.params - can you find all data on server side. Can you send it back to client via res object
app.get('/demo/:name/:age/:subject', (req, res) => {
  console.log(req.params);
  if (req.params) {
    res.json(req.params);
  }
});

// 3.Send data via Request Body

// Final method of sending data is via body part of request. We can send data directly to body using URL. We have to either use one of these methods

app.post('/demo', (req, res) => {
  console.log(req.body);
});

app.listen(8080, () => {
  console.log(`app listing port number is ${8080}`);
});
