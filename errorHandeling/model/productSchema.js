
import mongoose from "mongoose";

const productScheme=new mongoose.Schema({
   name: {
    type:"String",
    required: [true, "Product Name is required"],
    unique:true,
  },
  category:{
    type:"String",
    required : [true, "Product category is required"],
  }  
})


const Product=mongoose.model("Product", productScheme);
export default Product;