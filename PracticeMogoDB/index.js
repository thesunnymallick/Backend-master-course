const connectMongoDB=require("./app.js")


// Inster data in database
const insertDataToDatabase=async()=>{
  try {
     const db=await connectMongoDB()
     const result= await db.collection("products").insertOne({
        name:"M-31",
        brand:"samsung",
        price:13999,
        category:"smartphone",
     })
     console.log("Result==>",result)
  } catch (error) {
    
  }
}

// Read data from  database
const readDataToDatabase=async()=>{
   try {
      const db=await connectMongoDB()
      const data=await db.collection("products").find({});
      const allData=await data.toArray();
      console.log(allData)

   } catch (error) {
      
   }
}

const updateDataToDatabase=async()=>{
   try {
      const db=await connectMongoDB();
      const updateData=await db.collection("products").updateOne(
         {name:"M-31"},
         {$set:{name:"Samsung A52"}})
        console.log(updateData);

   } catch (error) {
      
   }
}

const deleteDataToDatabase=async()=>{
   try {
      const db= await connectMongoDB()
      const deleteData=await db.collection("products").deleteOne({name:"M-31"})
      console.log(deleteData)
   } catch (error) {
      
   }
}

const findByNameFromDatabase=async()=>{
   try {
      const  db=await connectMongoDB();
      const  data=await db.collection("products").find({name:"Samsung S23"});
      const  resultData=await data.toArray();
      console.log(resultData);
   } catch (error) {
      
   }
}
  
//deleteDataToDatabase()

// readDataToDatabase()

//insertDataToDatabase();

//updateDataToDatabase()

findByNameFromDatabase()

