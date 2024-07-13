// import package
import express from "express";
import dotenv from "dotenv";
import connectMongoDB  from "./config/dbConfig.js"

// import student routes
import studentRoute from "./routes/studentsRoute.js";
import subjectRoute from "./routes/subjectRoute.js";
// express package exceute
dotenv.config()
const app=express();

const PORT=process.env.PORT||8000;

// use middleware
app.use(express.json());

// Student Route
app.use('/api/v1/student', studentRoute);

// Subject Route
app.use('/api/v1/admin',  subjectRoute);

// conncet mongoDB
connectMongoDB().then((succes)=>{
console.log(`mongoDB connect sucessfull`);
}).catch((err)=>{
    console.log(err);
})


// server Start
app.listen(PORT, ()=>{
    console.log(`Server listeing on PORT : ${PORT}`)
})





