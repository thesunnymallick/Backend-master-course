const mongoose=require("mongoose");

// create schema
const customerSchema= new mongoose.Schema(
    {
      name:String,
      email:String,
      age: Number,
      gender:String,
      phoneNo: String,
      address1:String,
      address2:String,
      pinCode:Number,
    }
)

// add sheema in modal


const customers=mongoose.model("customers", customerSchema)

module.exports=customers;