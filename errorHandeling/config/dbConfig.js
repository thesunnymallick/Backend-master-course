import mongoose from "mongoose";

const conncetMongoDB=async()=>{
    try {
        const {connection}= await mongoose.connect(`mongodb://127.0.0.1:27017/CRUD`);
        console.log(`Connect mongodb on server ${connection.host}`)
    } catch (error) {
        console.log(error)
    }
}

export default conncetMongoDB