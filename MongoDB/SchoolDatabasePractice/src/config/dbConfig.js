import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()
const MONGODB_URL=process.env.MONGODB_URL;
console.log(MONGODB_URL);


const connectMongoDB=async()=>{
  try {
   await mongoose.connect(MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
    // console.log(conncetion);
  } catch (error) {
    console.log(error);
  }
}

export default connectMongoDB;