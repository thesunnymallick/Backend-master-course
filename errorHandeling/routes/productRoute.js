import express from "express"
import { createNewProduct, getAllProducts } from "../controllers/productController.js";


const router = express.Router();
router.post("/createProduct", createNewProduct)
router.get("/allProducts", getAllProducts)
export default router;