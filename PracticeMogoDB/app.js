const { MongoClient } = require("mongodb");

const url = 'mongodb://127.0.0.1:27017';
const dbName = 'e-commerce';
const collectionName = 'products';
// Function to connect to MongoDB
const connectMongoDB = async () => {
    const client = new MongoClient(url);

    try {
        // Connect to MongoDB
        await client.connect();
        console.log("Connected successfully to server");
        // Access the database
        const database = client.db(dbName);
        return database;
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    } 
};

 module.exports=connectMongoDB
 
