const express=require("express");
const app=express();
const PORT=8000


// home page
app.get("/", (req, res)=>{
  res.send("<h1>This is home page</h1>")
})
// home page
app.get("/about", (req, res)=>{
    res.send("<h1>This is about page</h1>")
  })
  // home page
app.get("/contact", (req, res)=>{
    res.send("<h1>This is contact page</h1>")
  })

// Server start
app.listen(PORT, ()=>{
    console.log(`Server listening ${PORT}`)
})