const http=require("http");// http module handel request and responce 
const {data}=require("./demoData")
const PORT=8000

// console.log("Server start")
// http.createServer((req, res)=>{
//  res.write("<h1>Hello, I am Sunny Mallick !</h1>");
//  res.end();
// }).listen(8000)      

http.createServer((req, res)=>{
  
    res.writeHead(200, {'Content-type' : 'application/json'});
    res.write(JSON.stringify(data));
    res.end(); 
    
  console.log(`server listening on ${PORT}`)
}).listen(PORT)