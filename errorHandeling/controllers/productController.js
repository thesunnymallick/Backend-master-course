
import Product from "../model/productSchema.js";
import ErrorHandel from "../utils/errorHandel.js";

export const createNewProduct=async(req, res, next)=>{
    try {
        const {name, category}=req.body;
        const result =await Product.create({name, category})
        res.status(201).json({
            statusCode:200,
            success:true,
            data:result
        })
    } catch (error) {
         return next(new ErrorHandel(error.message, 400))
       
        // res.status(400).json({
        //     statusCode:400,
        //     success:true,
        //     data:error
        // })
    }
}

// Get all Products
export const getAllProducts=async(req, res)=>{
  try {
    const result =await Product.find();
    res.status(201).json({
        statusCode:200,
        success:true,
        data:result
    })
  } catch (error) {

    res.status(400).json({
        statusCode:400,
        success:true,
        data:error
    })
  }
}