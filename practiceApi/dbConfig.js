const {MongoClient}=require("mongodb")

const url='mongodb://127.0.0.1:27017';
const dbName="e-commerce"
const connectMongoDB=async()=>{
    const client=new MongoClient(url)
  try {
     await client.connect();
     console.log("Mongodb conncet successfully");
     const database=client.db(dbName);
     return database;
  } catch (error) {
    console.log('failed! mongodb Connect failed')
  }
}
module.exports=connectMongoDB;