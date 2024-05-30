const express = require("express");
const {  ObjectId } = require('mongodb');
const app = express();

const mongoDB = require("./dbConfig");

const PORT = 8000;

app.use(express.json());

app.get("/api/products/all", async (req, res) => {
  try {
    const db = await mongoDB();
    const data =  db.collection("products").find({});
    const allProducts = await data.toArray();
    res.send(allProducts);
  } catch (error) {}
});

app.post("/api/products/create", async (req, res) => {
  try {
    const db = await mongoDB();
    const data =  db.collection("products");
    const result = await data.insertOne(req.body);
    res.send(result);
  } catch (error) {}
});

app.put("/api/product/:id", async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;
    const db = await mongoDB();
    const data =  db.collection("products");
    const objectId = new ObjectId(id);
    const result = await data.updateOne(
      { _id: objectId },
      {
        $set:{
            name: req.body.name,
            brand: req.body.brand,
            category: req.body.category,
            price: req.body.price,
          }
      }
    );
    res.send(result);
  } catch (error) {}
});

app.delete("/api/product/:id", async(req, res)=>{
    try {
        const id=req.params.id;
        console.log(`Received ID: ${id}`);  
        const objectId = new ObjectId(id);
        const db=await mongoDB();
        const data=db.collection("products");
        const result=await data.deleteOne({ _id: objectId })
      
        res.send(result);
    } catch (error) {
        
    }
})

app.listen(PORT, () => {
  console.log(`Server listing PORT ${PORT}`);
});
